require('dotenv').config();
const express = require('express');
const stripe  = require('stripe')(process.env.STRIPE_SECRET_KEY);
const path    = require('path');
const crypto  = require('crypto');
const fs      = require('fs');
const POSTS   = require('./src/posts.js');

const app = express();

// Block direct access to downloads folder before static middleware
app.use('/downloads', (req, res) => res.status(403).send('Forbidden'));

// Server-side OG tag injection for post pages (social media crawlers don't run JS)
app.get('/post.html', (req, res) => {
  const id   = req.query.id;
  const post = id && POSTS[id];

  if (!post) {
    return res.sendFile(path.join(__dirname, 'post.html'));
  }

  const pageTitle = post.title.trim() + ' — Jon Bon';
  const pageDesc  = (post.excerpt || post.intro || '').slice(0, 160);
  const pageUrl   = 'https://tabasjonbon.com/post.html?id=' + id;
  const pageImage = post.hero
    ? 'https://tabasjonbon.com/' + post.hero
    : 'https://tabasjonbon.com/assets/og-default.jpg';

  let html = fs.readFileSync(path.join(__dirname, 'post.html'), 'utf8');

  // Escape $ so JS replacement strings don't misinterpret $1, $2, etc.
  const esc = s => s.replace(/\$/g, '$$$$');

  html = html
    .replace(/(<title[^>]*>)[^<]*(<\/title>)/,                             `$1${esc(pageTitle)}$2`)
    .replace(/(<meta\s+name="description"[^>]*content=")[^"]*(")/,         `$1${esc(pageDesc)}$2`)
    .replace(/(<link\s+rel="canonical"[^>]*href=")[^"]*(")/,               `$1${esc(pageUrl)}$2`)
    .replace(/(<meta\s+property="og:title"[^>]*content=")[^"]*(")/,        `$1${esc(pageTitle)}$2`)
    .replace(/(<meta\s+property="og:description"[^>]*content=")[^"]*(")/,  `$1${esc(pageDesc)}$2`)
    .replace(/(<meta\s+property="og:url"[^>]*content=")[^"]*(")/,          `$1${esc(pageUrl)}$2`)
    .replace(/(<meta\s+property="og:image"[^>]*content=")[^"]*(")/,        `$1${esc(pageImage)}$2`)
    .replace(/(<meta\s+name="twitter:title"[^>]*content=")[^"]*(")/,       `$1${esc(pageTitle)}$2`)
    .replace(/(<meta\s+name="twitter:description"[^>]*content=")[^"]*(")/,`$1${esc(pageDesc)}$2`)
    .replace(/(<meta\s+name="twitter:image"[^>]*content=")[^"]*(")/,       `$1${esc(pageImage)}$2`);

  res.setHeader('Content-Type', 'text/html');
  res.send(html);
});

app.use(express.static(path.join(__dirname)));

// ─── Product catalogue ────────────────────────────────────────────────────────
const PRODUCTS = {
  lut_pack: {
    name:        'Cinematic LUT Pack',
    description: '12 professionally crafted LUTs for travel footage. Works in DaVinci Resolve, Premiere Pro, and Final Cut Pro.',
    price:       2999,
    file:        'downloads/lut_pack.zip',
  },
  filmmaking_guide: {
    name:        'Travel Filmmaking Guide',
    description: '50+ pages covering pre-production, storytelling, camera settings, and how to create content that stands out.',
    price:       3999,
    file:        'downloads/filmmaking_guide.pdf',
  },
  editing_workflow: {
    name:        'Creator Editing Workflow',
    description: 'Full editing system — project files, presets, and workflow docs for DaVinci Resolve and Premiere Pro.',
    price:       4999,
    file:        'downloads/editing_workflow.zip',
  },
  creator_bundle: {
    name:        'Full Creator Bundle',
    description: 'All three products at a 20% discount. LUT Pack + Filmmaking Guide + Editing Workflow.',
    price:       9499,
    file:        'downloads/creator_bundle.zip',
  },
};

// ─── Download token helpers ───────────────────────────────────────────────────
const DOWNLOAD_SECRET = process.env.DOWNLOAD_SECRET || 'dev_secret_change_in_production';
const TOKEN_TTL_MS    = 24 * 60 * 60 * 1000; // 24 hours

function generateToken(sessionId, productId) {
  const ts   = Date.now().toString();
  const hmac = crypto.createHmac('sha256', DOWNLOAD_SECRET)
    .update(sessionId + productId + ts)
    .digest('hex');
  return Buffer.from([sessionId, productId, ts, hmac].join('|')).toString('base64url');
}

function verifyToken(token) {
  try {
    const decoded             = Buffer.from(token, 'base64url').toString('utf8');
    const [sessionId, productId, ts, hmac] = decoded.split('|');
    if (!sessionId || !productId || !ts || !hmac) return null;

    if (Date.now() - parseInt(ts) > TOKEN_TTL_MS) return null;

    const expected = crypto.createHmac('sha256', DOWNLOAD_SECRET)
      .update(sessionId + productId + ts)
      .digest('hex');

    const valid = hmac.length === expected.length &&
      crypto.timingSafeEqual(Buffer.from(hmac, 'hex'), Buffer.from(expected, 'hex'));

    return valid ? { sessionId, productId } : null;
  } catch {
    return null;
  }
}

// ─── Routes ───────────────────────────────────────────────────────────────────
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

// Create Stripe checkout session
app.post('/create-checkout-session', express.json(), async (req, res) => {
  const { productId } = req.body;
  const product = PRODUCTS[productId];
  if (!product) return res.status(400).json({ error: 'Invalid product ID' });

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: { name: product.name, description: product.description },
          unit_amount: product.price,
        },
        quantity: 1,
      }],
      mode:        'payment',
      metadata:    { productId },
      success_url: `${req.headers.origin}/success.html?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url:  `${req.headers.origin}/products.html`,
    });

    res.json({ url: session.url });
  } catch (err) {
    console.error('Stripe error:', err.message);
    res.status(500).json({ error: err.message });
  }
});

// Verify payment and return a signed download token
app.get('/verify-session', async (req, res) => {
  const { session_id } = req.query;
  if (!session_id) return res.status(400).json({ error: 'Missing session_id' });

  try {
    const session = await stripe.checkout.sessions.retrieve(session_id);

    if (session.payment_status !== 'paid') {
      return res.status(402).json({ error: 'Payment not completed' });
    }

    const productId = session.metadata?.productId;
    const product   = PRODUCTS[productId];

    if (!product) return res.status(404).json({ error: 'Product not found' });

    const token = generateToken(session_id, productId);

    res.json({
      success:     true,
      productName: product.name,
      token,
    });
  } catch (err) {
    console.error('Verify error:', err.message);
    res.status(500).json({ error: err.message });
  }
});

// Serve the file after validating the download token
app.get('/download', (req, res) => {
  const { token } = req.query;
  const payload   = verifyToken(token);

  if (!payload) {
    return res.status(403).send('Invalid or expired download link. Please contact contact@tabasjonbon.com');
  }

  const product = PRODUCTS[payload.productId];
  if (!product) return res.status(404).send('Product not found.');

  const filePath = path.join(__dirname, product.file);
  res.download(filePath, path.basename(product.file), (err) => {
    if (err && !res.headersSent) {
      console.error('Download error:', err.message);
      res.status(500).send('File not available yet. Contact contact@tabasjonbon.com');
    }
  });
});

// ─── Local dev ────────────────────────────────────────────────────────────────
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
}

module.exports = app;
