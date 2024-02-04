/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: "Poppins, sans-serif",
      },

      colors: {
        lightcream: "rgb(243, 225, 225)",
        grayishBlack: {
          100: "rgb(77, 68, 68)",
          200: "rgb(43, 39, 39)",
          300: "rgb(12, 10, 10)",
          400: "rgb(4, 4, 4)",
        },
        redPrimary: "rgb(177, 5, 5)",
      },
    },
  },
  plugins: [],
};
