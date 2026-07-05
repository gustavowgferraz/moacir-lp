/**
 * Navbar Scroll Effect - Moacir LP
 * Aplica blur e background na navbar ao scrollar
 */

(function () {
  'use strict';

  const navbar = document.getElementById('navbar');

  if (!navbar) return;

  /**
   * Handle scroll event and update navbar styles
   */
  function handleScroll() {
    const navLinks = navbar.querySelectorAll('a:not(.bg-brand-black), button');
    const logoImg = navbar.querySelector('img');

    if (window.scrollY > 50) {
      navbar.classList.add(
        'bg-brand-black',
        'backdrop-blur-md',
        'border-white/5',
      );
      navbar.classList.remove('py-6', 'border-transparent', 'bg-white', 'border-black');
      navbar.classList.add('py-4');

      // Ensure text is white for black background
      const menuLinks = navbar.querySelector('.hidden.lg\\:flex');
      if (menuLinks) {
        menuLinks.classList.add('text-gray-400');
        menuLinks.classList.remove('text-black');
        menuLinks.querySelectorAll('a').forEach(link => {
          link.classList.add('hover:text-white');
          link.classList.remove('hover:text-brand-accent');
        });
      }
      
      if (logoImg) logoImg.classList.remove('invert');
      
      const menuBtn = document.getElementById('menu-btn');
      if (menuBtn) {
        menuBtn.classList.remove('text-black');
        menuBtn.classList.add('text-white');
        menuBtn.querySelectorAll('span').forEach(span => {
            if (!span.classList.contains('bg-brand-accent')) {
                span.classList.remove('bg-black');
                span.classList.add('bg-white');
            }
        });
      }

    } else {
      navbar.classList.remove(
        'bg-brand-black',
        'backdrop-blur-md',
        'border-white/5',
        'bg-white',
        'border-black'
      );
      navbar.classList.add('py-6', 'border-transparent');
      navbar.classList.remove('py-4');

      // Keep text white/gray for transparent background on dark hero
      const menuLinks = navbar.querySelector('.hidden.lg\\:flex');
      if (menuLinks) {
        menuLinks.classList.add('text-gray-400');
        menuLinks.classList.remove('text-black');
        menuLinks.querySelectorAll('a').forEach(link => {
          link.classList.add('hover:text-white');
          link.classList.remove('hover:text-brand-accent');
        });
      }

      if (logoImg) logoImg.classList.remove('invert');

      const menuBtn = document.getElementById('menu-btn');
      if (menuBtn) {
        menuBtn.classList.remove('text-black');
        menuBtn.classList.add('text-white');
        menuBtn.querySelectorAll('span').forEach(span => {
            if (!span.classList.contains('bg-brand-accent')) {
                span.classList.remove('bg-black');
                span.classList.add('bg-white');
            }
        });
      }
    }
  }

  // Attach scroll listener
  window.addEventListener('scroll', handleScroll);

  // Run on load in case page is already scrolled
  handleScroll();
})();
