/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './pages/**/*.{html,js}',
  './components/**/*.{html,js}',
  './index.html',
	'./public/index.html', 
	'./src/**/*.{html,js}',
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      "custom-white": "#FFFFFF",
      "custom-gray": "#969696",
      "custom-black": "#15202A",
      "light-blue": "#C2D3FF",
      "pale-blue": "hsl(223, 100%, 88%)",
      "strong-blue": "#4C7BF3"
    }
  },
  plugins: [],
}

