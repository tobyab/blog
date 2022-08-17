module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    keyframes: {
      'rotate-90': 'rotate(90deg)',
    },
    animation: {
      rotateAnimate: 'rotate-90 3s infinite',
    },
    extend: {},
  },
  plugins: [],
}
