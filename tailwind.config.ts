export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  corePlugins: {
    preflight: false
  },
  important: '#app',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'], // Default sans-serif font
        serif: ['Merriweather', 'Georgia', 'serif'], // Default serif font
        mono: ['SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'], // Default monospace
        custom: ['MyCustomFont', 'Arial', 'sans-serif'] // A custom font
      },
      colors: {
        primary: {
          50: '#f0fafb',
          100: '#d9f0f4',
          200: '#b7e2ea',
          300: '#85cbdb',
          400: '#53b0c7',
          500: '#3090aa',
          600: '#2b758f',
          700: '#286076',
          800: '#295061',
          900: '#264453',
          950: '#142c38'
        },
        secondary: {
          50: '#fcf7ee',
          100: '#f7e9ce',
          200: '#eed099',
          300: '#e5b364',
          400: '#df9a40',
          500: '#d77d2c',
          600: '#be5d21',
          700: '#9e421f',
          800: '#81351f',
          900: '#6a2d1d',
          950: '#3c160c'
        }
      }
    }
  },
  plugins: []
};
