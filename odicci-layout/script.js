/* ============================================================
   JON BON — ODICCI LAYOUT
   Nav scroll · Hero zoom · Scroll reveal
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
    initNav();
    initHero();
    initReveal();
});

/* ── NAVIGATION ─────────────────────────────────────────── */
function initNav() {
    const nav = document.getElementById('nav');
    if (!nav) return;

    const update = () => nav.classList.toggle('scrolled', window.scrollY > 60);
    window.addEventListener('scroll', update, { passive: true });
    update();
}

/* ── HERO ZOOM ON LOAD ───────────────────────────────────── */
function initHero() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    requestAnimationFrame(() => hero.classList.add('loaded'));

    // Subtle parallax
    let raf;
    window.addEventListener('scroll', () => {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
            if (window.scrollY > window.innerHeight * 1.2) return;
            const img = hero.querySelector('.hero-img');
            const text = hero.querySelector('.hero-text');
            const y = window.scrollY;
            if (img)  img.style.transform  = `scale(1) translateY(${y * 0.15}px)`;
            if (text) {
                text.style.transform = `translateY(${y * 0.08}px)`;
                text.style.opacity   = Math.max(0, 1 - (y / window.innerHeight) * 1.6);
            }
        });
    }, { passive: true });
}

/* ── SCROLL REVEAL ───────────────────────────────────────── */
function initReveal() {
    const els = document.querySelectorAll('.reveal');
    if (!els.length) return;

    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('visible');
                obs.unobserve(e.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    els.forEach(el => obs.observe(el));
}

console.log('%c✈ Jon Bon — Travel Filmmaker', 'color:#888;font-size:13px;font-weight:300;letter-spacing:2px;');
