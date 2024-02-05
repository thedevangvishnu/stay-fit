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
        shadowBlack: {
          100: "rgba(0,0,0, 0.3)",
          200: "rgba(0,0,0, 0.5)",
          300: "rgba(0,0,0, 0.7)",
          400: "rgba(0,0,0, 0.9)",
        },
        redPrimary: {
          100: "rgb(177, 5, 5)",
          200: "rgb(170, 5, 5)",
        },
      },
      screens: {
        xs: { min: "320px", max: "639px" },
      },
    },
  },
  plugins: [],
};
