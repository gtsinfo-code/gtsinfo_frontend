/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#040F1E',
          900: '#071B36', // Deep Navy (Primary brand background)
          800: '#0B3D70', // Brand Navy
          700: '#0F4D8A',
          600: '#155FA8',
        },
        primary: {
          DEFAULT: '#0878E8', // Primary Blue
          hover: '#0062CC',
          light: '#EAF4FF',
        },
        electric: {
          DEFAULT: '#006BFF', // Electric Blue
          glow: 'rgba(0, 107, 255, 0.35)',
        },
        cyan: {
          DEFAULT: '#00A6D6', // Cyan Blue
          accent: '#00A6D6',
          light: '#E0F7FC',
        },
        softblue: {
          50: '#F4F8FC',       // Pale Background
          100: '#EAF4FF',      // Light Blue
          200: '#D8E5F2',      // Border
          300: '#B8D1E8',
        },
        brandText: {
          primary: '#142B45',  // Primary Text
          secondary: '#64748B',// Secondary Text
          muted: '#8FA0B4',
          dark: '#071B36',
        },
        brandBorder: {
          DEFAULT: '#D8E5F2',
          light: '#E8F1FA',
          glow: 'rgba(8, 120, 232, 0.25)',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
      },
      boxShadow: {
        subtle: '0 2px 12px -2px rgba(7, 27, 54, 0.05)',
        card: '0 10px 30px -4px rgba(7, 27, 54, 0.08), 0 2px 6px -1px rgba(7, 27, 54, 0.04)',
        'card-hover': '0 20px 40px -8px rgba(7, 27, 54, 0.14), 0 4px 12px -2px rgba(8, 120, 232, 0.08)',
        glass: '0 8px 32px 0 rgba(7, 27, 54, 0.12)',
        'glass-dark': '0 12px 40px 0 rgba(0, 0, 0, 0.37)',
        glow: '0 0 25px rgba(0, 107, 255, 0.35)',
        'glow-cyan': '0 0 30px rgba(0, 166, 214, 0.35)',
        'glow-lg': '0 0 50px rgba(8, 120, 232, 0.45)',
      },
      letterSpacing: {
        widest: '0.15em',
        tightest: '-0.035em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 5s ease-in-out infinite',
        'float-slow': 'floatGrid 12s ease-in-out infinite',
        'float-reverse': 'floatReverse 14s ease-in-out infinite',
        'glow-pulse': 'glowPulse 6s ease-in-out infinite',
        'radar-sweep': 'radarSweep 8s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.04)' },
        },
        floatGrid: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(1.5deg)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(14px) rotate(-1.5deg)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.3', filter: 'blur(35px)' },
          '50%': { opacity: '0.6', filter: 'blur(55px)' },
        },
        radarSweep: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}
