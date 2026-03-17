/* ============================================================
   JON BON — TRAVEL DIARY
   Navigation · Scroll reveal · Hero cards · Counter animation
   Traavellio-inspired clone
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
    initNav();
    initReveal();
    initHero();
    initCounters();
    initSmoothScroll();
    initKeyboard();
});

/* ── NAVIGATION ─────────────────────────────────────────── */
function initNav() {
    const nav       = document.getElementById('nav');
    const hamburger = document.querySelector('.hamburger');
    const navLinks  = document.querySelector('.nav-links');
    if (!nav) return;

    // Scroll → frosted white
    const tick = () => nav.classList.toggle('scrolled', window.scrollY > 60);
    window.addEventListener('scroll', tick, { passive: true });
    tick();

    // Mobile menu
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', e => {
            e.stopPropagation();
            const open = hamburger.classList.toggle('active');
            navLinks.classList.toggle('active', open);
            document.body.style.overflow = open ? 'hidden' : '';
        });
        document.addEventListener('click', e => {
            if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) closeMenu();
        });
        navLinks.querySelectorAll('a').forEach(l => l.addEventListener('click', closeMenu));
    }
    function closeMenu() {
        hamburger?.classList.remove('active');
        navLinks?.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Active link is set statically in HTML per-page
}

/* ── SCROLL REVEAL ──────────────────────────────────────── */
function initReveal() {
    const els = document.querySelectorAll('.reveal');
    if (!els.length) return;
    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -50px 0px' });
    els.forEach(el => obs.observe(el));
}

/* ── HERO ───────────────────────────────────────────────── */
function initHero() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    // Kick off bg zoom
    requestAnimationFrame(() => hero.classList.add('loaded'));

    // Subtle parallax on scroll
    let raf;
    window.addEventListener('scroll', () => {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
            const y = window.scrollY;
            if (y > window.innerHeight * 1.2) return;

            const bg      = hero.querySelector('.hero-bg');
            const content = hero.querySelector('.hero-content');
            const cards   = hero.querySelectorAll('.hero-card');

            if (bg)      bg.style.transform      = `scale(1) translateY(${y * 0.18}px)`;
            if (content) {
                content.style.transform = `translateY(${y * 0.10}px)`;
                content.style.opacity   = Math.max(0, 1 - (y / window.innerHeight) * 1.5);
            }
            // Cards drift slightly at different rates
            cards.forEach((card, i) => {
                const dir  = i < 2 ? -1 : 1;
                const rate = i % 2 === 0 ? 0.08 : 0.12;
                card.style.marginTop = `${y * rate * dir}px`;
            });
        });
    }, { passive: true });
}

/* ── ANIMATED COUNTERS ──────────────────────────────────── */
function initCounters() {
    const counters = document.querySelectorAll('.count-up');
    if (!counters.length) return;

    const obs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const el     = entry.target;
            const target = parseInt(el.dataset.target, 10);
            const dur    = 1600; // ms
            const step   = dur / target;
            let current  = 0;
            const timer  = setInterval(() => {
                current++;
                el.textContent = current;
                if (current >= target) {
                    el.textContent = target;
                    clearInterval(timer);
                }
            }, step);
            obs.unobserve(el);
        });
    }, { threshold: 0.5 });

    counters.forEach(c => obs.observe(c));
}

/* ── SMOOTH SCROLL ──────────────────────────────────────── */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', e => {
            const id = link.getAttribute('href');
            if (id === '#') return;
            const target = document.querySelector(id);
            if (!target) return;
            e.preventDefault();
            window.scrollTo({
                top: target.getBoundingClientRect().top + window.scrollY - 90,
                behavior: 'smooth'
            });
        });
    });
}

/* ── KEYBOARD ───────────────────────────────────────────── */
function initKeyboard() {
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            document.querySelector('.hamburger')?.classList.remove('active');
            document.querySelector('.nav-links')?.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

/* ── EMAIL FORM ─────────────────────────────────────────── */
function handleEmailForm(e) {
    e.preventDefault();
    const input = e.target.querySelector('.email-input');
    const btn   = e.target.querySelector('button');
    if (!input?.value) return;
    const orig = btn.textContent;
    btn.textContent = '✓ You\'re in!';
    btn.style.background = '#2e7d5e';
    btn.style.borderColor = '#2e7d5e';
    input.value = '';
    setTimeout(() => {
        btn.textContent = orig;
        btn.style.background = '';
        btn.style.borderColor = '';
    }, 3000);
}

/* ── CONSOLE ────────────────────────────────────────────── */
console.log('%c✈ Jon Bon — Travel Diary', 'color:#0d4a56;font-size:14px;font-weight:bold;');
