/**
 * nav.js — Mobile hamburger menu
 * Loaded on all pages. Toggles .mobile-open on .nav-links
 * and .is-open on .nav-hamburger.
 */
(function () {
    'use strict';

    const hamburger = document.querySelector('.nav-hamburger');
    const navLinks  = document.querySelector('.nav-links');
    if (!hamburger || !navLinks) return;

    function openMenu() {
        navLinks.classList.add('mobile-open');
        hamburger.classList.add('is-open');
        hamburger.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        navLinks.classList.remove('mobile-open');
        hamburger.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }

    hamburger.addEventListener('click', function () {
        navLinks.classList.contains('mobile-open') ? closeMenu() : openMenu();
    });

    // Close when any nav link or theme toggle is tapped
    navLinks.addEventListener('click', function (e) {
        if (e.target.closest('.nav-link, .theme-toggle')) closeMenu();
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeMenu();
    });
}());
