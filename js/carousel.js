document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('lifestyle-carousel');
  const prevBtn = document.getElementById('scroll-left');
  const nextBtn = document.getElementById('scroll-right');

  if (!container || !prevBtn || !nextBtn) return;

  // Helper to toggle icon colors
  const setButtonState = (btn, isActive) => {
    const icon = btn.querySelector('svg') || btn.querySelector('i');
    if (!icon) return;

    if (isActive) {
      icon.classList.remove('text-gray-600');
      icon.classList.add('text-white');
      btn.style.opacity = '1';
      btn.style.cursor = 'pointer';
    } else {
      icon.classList.remove('text-white');
      icon.classList.add('text-gray-600');
      btn.style.opacity = '0.5';
      btn.style.cursor = 'default';
    }
  };

  const updateButtons = () => {
    const tolerance = 10; // px
    const isAtStart = container.scrollLeft <= tolerance;
    const isAtEnd =
      container.scrollLeft + container.clientWidth >=
      container.scrollWidth - tolerance;

    setButtonState(prevBtn, !isAtStart);
    setButtonState(nextBtn, !isAtEnd);
  };

  // Initial check
  updateButtons();

  // Event Listeners
  container.addEventListener('scroll', updateButtons);
  window.addEventListener('resize', updateButtons);

  prevBtn.addEventListener('click', () => {
    container.scrollBy({
      left: -container.clientWidth * 0.75,
      behavior: 'smooth',
    });
  });

  nextBtn.addEventListener('click', () => {
    container.scrollBy({
      left: container.clientWidth * 0.75,
      behavior: 'smooth',
    });
  });
});
