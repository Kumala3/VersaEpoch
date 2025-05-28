/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        keyframes: {
          dropdownSlideDown: {
            '0%': { opacity: '0.2', transform: 'translateY(-10px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' }
          },
        },
        animation: {
          'dropdown-slide-down': 'slideDown 400ms ease',
        }
      },
    },
    plugins: [],
  }
