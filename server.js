require('dotenv').config();
const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname)));

const PRODUCTS = {
  lut_pack: {
    name: 'Cinematic LUT Pack',
    description: '12 professionally crafted LUTs for travel footage. Works in DaVinci Resolve, Premiere Pro, and Final Cut Pro.',
    price: 2999,
  },
  filmmaking_guide: {
    name: 'Travel Filmmaking Guide',
    description: '50+ pages covering pre-production, storytelling, camera settings, and how to create content that stands out.',
    price: 3999,
  },
  editing_workflow: {
    name: 'Creator Editing Workflow',
    description: 'Full editing system — project files, presets, and workflow docs for DaVinci Resolve and Premiere Pro.',
    price: 4999,
  },
  creator_bundle: {
    name: 'Full Creator Bundle',
    description: 'All three products at a 20% discount. LUT Pack + Filmmaking Guide + Editing Workflow.',
    price: 9499,
  },
};

app.post('/create-checkout-session', async (req, res) => {
  const { productId } = req.body;
  const product = PRODUCTS[productId];

  if (!product) {
    return res.status(400).json({ error: 'Invalid product ID' });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: {
            name: product.name,
            description: product.description,
          },
          unit_amount: product.price,
        },
        quantity: 1,
      }],
      mode: 'payment',
      success_url: `${req.headers.origin}/success.html?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/products.html`,
    });

    res.json({ url: session.url });
  } catch (err) {
    console.error('Stripe error:', err.message);
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
