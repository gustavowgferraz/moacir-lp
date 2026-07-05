/**
 * Mobile Menu - Moacir LP
 * Controle do menu mobile overlay
 */

(function () {
  'use strict';

  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-link');
  let isMenuOpen = false;

  /**
   * Toggle mobile menu visibility
   */
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;

    if (isMenuOpen) {
      mobileMenu.classList.remove(
        'opacity-0',
        'pointer-events-none',
        'scale-95',
      );
      document.body.style.overflow = 'hidden';
    } else {
      mobileMenu.classList.add('opacity-0', 'pointer-events-none', 'scale-95');
      document.body.style.overflow = 'auto';
    }
  }

  // Event Listeners
  if (menuBtn) {
    menuBtn.addEventListener('click', toggleMenu);
  }

  mobileLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
  });
})();
