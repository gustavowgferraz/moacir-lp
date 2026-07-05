(function () {
  var COPIES = 3;

  function getVelocidade() {
    var largura = window.innerWidth;
    if (largura < 480) return 500;    // mobile pequeno — muito rápido
    if (largura < 768) return 400;    // mobile grande — rápido
    if (largura < 1024) return 200;   // tablet
    if (largura < 1440) return 160;   // desktop
    return 140;                        // desktop grande
  }

  function calcularDuracao(track) {
    var larguraTotal = track.scrollWidth;
    var larguraUmSet = larguraTotal / COPIES;
    if (larguraUmSet <= 0) return;

    var duracao = larguraUmSet / getVelocidade();
    track.style.animationDuration = duracao.toFixed(3) + 's';
  }

  function iniciarMarquees() {
    document.querySelectorAll('.animate-marquee').forEach(calcularDuracao);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', iniciarMarquees);
  } else {
    iniciarMarquees();
  }

  var resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(iniciarMarquees, 150);
  });
})();
