/** @type {import('tailwindcss').Config} */
const v = (n) => `rgb(var(--${n}) / <alpha-value>)`
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: v('paper'), soft: v('soft'), ink: v('ink'), muted: v('muted'),
        deep: v('deep'), deep2: v('deep2'), ondeep: v('ondeep'), ondeepm: v('ondeepm'),
        accent: v('accent'), onaccent: v('onaccent'), accentink: v('accentink'), accentlt: v('accentlt'), star: v('star'),
      },
      fontFamily: { display: ['var(--fd)'], sans: ['var(--fs)'] },
    },
  },
  plugins: [],
}
