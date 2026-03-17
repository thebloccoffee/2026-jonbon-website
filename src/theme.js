/**
 * theme.js — Light / Dark mode toggle
 * Load this in <head> (before body renders) to prevent flash of wrong theme.
 * Exposes: toggleTheme()
 */
(function () {
    // ── Apply saved preference immediately (prevents flash) ──────────────
    const saved = localStorage.getItem('theme') || 'light';
    if (saved === 'light') document.documentElement.setAttribute('data-theme', 'light');

    // ── Inject light-mode overrides ──────────────────────────────────────
    const css = `
        /* ── Smooth theme transition (only active during toggle) ── */
        html.theme-switching *,
        html.theme-switching *::before,
        html.theme-switching *::after {
            transition: background-color 0.22s ease, border-color 0.22s ease, color 0.15s ease !important;
        }
        html.theme-switching img,
        html.theme-switching iframe,
        html.theme-switching video { transition: none !important; }

        /* ── Light mode CSS variable overrides ── */
        html[data-theme="light"] {
            --bg:           #F5F4F0;
            --bg-card:      #FFFFFF;
            --bg-card-2:    #EDEAE5;
            --text:         #0A0A0A;
            --text-muted:   #565656;
            --text-dim:     #999999;
            --accent:       #0A0A0A;
            --accent-hover: #2A2A2A;
            --accent-bg:    rgba(0,0,0,0.05);
            --warm:         #333333;
            --warm-bg:      rgba(0,0,0,0.05);
            --border:       rgba(0,0,0,0.08);
            --border-mid:   rgba(0,0,0,0.15);
        }

        /* ── Nav ── */
        html[data-theme="light"] .nav {
            background: rgba(245,244,240,0.92) !important;
        }
        html[data-theme="light"] .nav-link:hover,
        html[data-theme="light"] .nav-link.active {
            background: rgba(0,0,0,0.06) !important;
        }
        html[data-theme="light"] .nav-link.yt {
            background: rgba(0,0,0,0.06) !important;
            border-color: rgba(0,0,0,0.18) !important;
            color: #0A0A0A !important;
        }
        html[data-theme="light"] .nav-link.yt:hover {
            background: rgba(0,0,0,0.1) !important;
            border-color: rgba(0,0,0,0.25) !important;
        }

        /* ── Footer ── */
        html[data-theme="light"] .footer {
            background: #E5E3DE !important;
        }

        /* ── Hardcoded section backgrounds ── */
        html[data-theme="light"] .nl-bar {
            background: #EDEAE5 !important;
        }
        html[data-theme="light"] .section--alt {
            background: var(--bg-card) !important;
        }

        /* ── Primary button — inverts in light mode ── */
        html[data-theme="light"] .btn-primary {
            background: #0A0A0A !important;
            color: #FFFFFF !important;
        }
        html[data-theme="light"] .btn-primary:hover {
            background: #2A2A2A !important;
        }
        html[data-theme="light"] .btn-warm {
            background: #C8C5BF !important;
            color: #0A0A0A !important;
        }
        html[data-theme="light"] .btn-warm:hover {
            background: #B8B5AF !important;
        }
        html[data-theme="light"] .btn-outline {
            color: var(--text-muted) !important;
        }

        /* ── Checkmark lists ── */
        html[data-theme="light"] .product-features li::before,
        html[data-theme="light"] .modal-features li::before {
            color: #0A0A0A !important;
        }

        /* ── Shop / blog tab active states ── */
        html[data-theme="light"] .shop-tab.active {
            background: #0A0A0A !important;
            color: #FFFFFF !important;
        }
        html[data-theme="light"] .shop-tabs .shop-tab.active {
            color: #0A0A0A !important;
            border-bottom-color: #0A0A0A !important;
            background: none !important;
        }
        html[data-theme="light"] .blog-cat.active {
            background: #0A0A0A !important;
            color: #FFFFFF !important;
            border-color: transparent !important;
        }

        /* ── Product modal ── */
        html[data-theme="light"] .product-modal {
            background: #FFFFFF !important;
        }
        html[data-theme="light"] .modal-close {
            background: rgba(0,0,0,0.06) !important;
            border-color: rgba(0,0,0,0.12) !important;
            color: #0A0A0A !important;
        }
        html[data-theme="light"] .modal-included-item {
            background: #F0EEE9 !important;
            border-color: rgba(0,0,0,0.08) !important;
        }

        /* ── Post/blog article elements ── */
        html[data-theme="light"] .post-blockquote {
            border-left-color: rgba(0,0,0,0.2) !important;
        }
        html[data-theme="light"] .progress-bar-wrap {
            background: rgba(0,0,0,0.06) !important;
        }

        /* ── Badge ── */
        html[data-theme="light"] .badge-blue,
        html[data-theme="light"] .badge-warm {
            background: rgba(0,0,0,0.05) !important;
            color: #444444 !important;
            border-color: rgba(0,0,0,0.12) !important;
        }

        /* ── Carousel ── */
        html[data-theme="light"] .carousel-btn {
            background: var(--bg-card) !important;
        }

        /* ── Theme toggle button ── */
        .theme-toggle {
            width: 34px;
            height: 34px;
            border-radius: 8px;
            border: 1px solid var(--border-mid);
            background: var(--accent-bg);
            color: var(--text);
            cursor: pointer;
            font-size: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: background 0.2s ease, border-color 0.2s ease;
            margin-left: 6px;
            flex-shrink: 0;
            padding: 0;
            line-height: 1;
        }
        .theme-toggle:hover {
            background: rgba(128,128,128,0.14);
        }
        /* Icon: show ☀️ in dark mode, 🌙 in light mode */
        .theme-toggle::before {
            content: '☀️';
        }
        html[data-theme="light"] .theme-toggle::before {
            content: '🌙';
        }
    `;

    const style = document.createElement('style');
    style.id = 'theme-styles';
    style.textContent = css;
    document.head.appendChild(style);

    // ── Toggle function (called by button onclick) ────────────────────────
    window.toggleTheme = function () {
        const html = document.documentElement;
        html.classList.add('theme-switching');
        const isLight = html.getAttribute('data-theme') === 'light';
        html.setAttribute('data-theme', isLight ? 'dark' : 'light');
        localStorage.setItem('theme', isLight ? 'dark' : 'light');
        setTimeout(function () { html.classList.remove('theme-switching'); }, 300);
    };
})();
