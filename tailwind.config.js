// const colors = require('tailwindcss/colors')

module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-main": "url('./src/img/bg.jpg')",
       
      },
    },
  },
  plugins: [],
};
