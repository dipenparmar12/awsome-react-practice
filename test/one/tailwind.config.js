module.exports = {
  mode: 'jit',
  darkMode: 'class', // class, media, false
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        test: 'red',
      },
    },
  },
  plugins: [],
  purge: {
    enabled: true,
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    options: {
      safelist: ['dark'], //specific classes
    },
  },
}
