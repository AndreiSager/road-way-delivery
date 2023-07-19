/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-1': '#A06C20',
        'accent-1': '#006600',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mountain-sunset': 'url(/mountain-sunset_compressed.jpg)',
        'highway': 'url(/highway-dark_compressed.jpg)',
        'truck': 'url(/hero-truck_dark.jpg)'
      },
    },
  },
  plugins: [],
}
