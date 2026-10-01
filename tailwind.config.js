/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1.25rem', lg: '2rem' },
      screens: { sm: '600px', md: '760px', lg: '1000px', xl: '1290px', '2xl': '1290px' },
    },
    extend: {
      colors: {
        accent: { DEFAULT: '#e03821', dark: '#b92c18', light: '#f0533c' },
        ink: '#000000',
        night: '#151a19',
        coal: '#1e2322',
        body: '#797c7f',
        paper: '#f8f8f7',
        band: '#ededeb',
        line: '#e4e4e2',
      },
      fontFamily: {
        display: ['"Inter Tight"', 'system-ui', 'sans-serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: { tightest: '-0.5px' },
      keyframes: {
        floatY: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-14px)' } },
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        pulseRing: { '0%': { transform: 'scale(.9)', opacity: '.7' }, '100%': { transform: 'scale(1.7)', opacity: '0' } },
        slowZoom: { '0%': { transform: 'scale(1.06)' }, '100%': { transform: 'scale(1.16)' } },
        bounceDown: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(7px)' } },
      },
      animation: {
        floatY: 'floatY 5s ease-in-out infinite',
        marquee: 'marquee 32s linear infinite',
        pulseRing: 'pulseRing 2.4s cubic-bezier(.4,0,.6,1) infinite',
        slowZoom: 'slowZoom 14s ease-out forwards',
        bounceDown: 'bounceDown 1.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
