/* ========================================
   有限会社ジェイシー技研 共通スクリプト
   script.js
======================================== */

// スムーススクロール
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        var target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

// ハンバーガーメニュー
(function () {
    var hamburgerBtn = document.getElementById('hamburgerBtn');
    var mobileMenu   = document.getElementById('mobileMenu');
    var closeBtn     = document.getElementById('mobileMenuClose');
    var label        = hamburgerBtn ? hamburgerBtn.querySelector('.hamburger-label') : null;

    if (!hamburgerBtn || !mobileMenu) return;

    function openMenu() {
        hamburgerBtn.classList.add('open');
        mobileMenu.classList.add('open');
        hamburgerBtn.setAttribute('aria-expanded', 'true');
        if (label) label.textContent = '閉じる';
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        hamburgerBtn.classList.remove('open');
        mobileMenu.classList.remove('open');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        if (label) label.textContent = 'メニュー';
        document.body.style.overflow = '';
    }

    hamburgerBtn.addEventListener('click', function () {
        mobileMenu.classList.contains('open') ? closeMenu() : openMenu();
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', closeMenu);
    }

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
            closeMenu();
        }
    });
}());
