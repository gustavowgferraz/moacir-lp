/**
 * Tailwind Configuration - Moacir LP
 * Configuração customizada de cores, fontes e animações
 */

tailwind.config = {
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#121212', // Grafite Profundo (Fundo Principal)
          dark: '#1F1F1F',  // Cinza Escuro (Seções/Cards)
          gray: '#2A2A2A',  // Cinza de Contorno
          accent: '#A4AD66', // Verde Oliva Vibrante (Energia)
          primary: '#F3F4F6', // Off-White para textos principais
          muted: '#9CA3AF',   // Cinza para textos secundários
        },
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        serif: ['Poppins', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        noise:
          "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.07%22/%3E%3C/svg%3E')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'slow-spin': 'spin 20s linear infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
};
