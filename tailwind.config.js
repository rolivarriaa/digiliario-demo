const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gilmerRegular: "Gilmer Regular",
        gilmerMedium: "Gilmer Medium",
        gilmerBold: "Gilmer Bold",
        gilmerHeavy: "Gilmer Heavy",
      },
      colors: {
        red: {
          digiliario: "#D92332",
        },
        black: {
          digiliario: "#3E3E3E",
        },
      },
      screens: {
        smx: "425px",
      },
      backgroundImage: (theme) => ({
        digiliario: "url('/hero.png')",
        auto: "auto",
        cover: "cover",
        contain: "contain",
      }),
    },
    select: {
      styles: {
        base: {
          container: {
            position: "relative",
            width: "w-full",
            minWidth: "min-w-[200px]",
          },
          colors: {
            select: "text-red-digiliario",
            label: "text-red-digiliario",
          },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
  daisyui: {
    themes: false,
  },
});
