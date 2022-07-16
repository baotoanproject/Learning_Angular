const plugin = require("tailwindcss/plugin");

/** generates a map of sizes from min to max e.g. {'1px':'1px',..., '60px':'60px'} */
function genPxSizeMap(min, max) {
  const sizes = {};
  for (let size = min; size <= max; size++) {
    const sizeToAdd = `${size}px`;
    sizes[sizeToAdd] = sizeToAdd;
  }
  return sizes;
}

/** adds additional color utility classes to tailwind e.g. if called with ('caret', 'caret-color') will gen { .caret-pink: { caret-color: pink } ... }  */
function genColorUtilClasses(prefix, attribute) {
  return function ({ e, addUtilities, theme }) {
    const colors = theme("colors");
    const classes = {};

    for (key in colors) {
      classes[`.${e(`${prefix}-${key}`)}`] = {
        [attribute]: colors[key],
      };
    }

    addUtilities(classes);
  };
}
module.exports = {
  prefix: "",
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: ["./src/**/*.{html,ts}"],
  },
  darkMode: false,
  content: [],
  theme: {
    colors: {
      "blue-1": "#7900FF",
      "blue-2": "#548CFF",
      "green-1": "#93FFD8",
      "green-2": "#CFFFDC",
      red: "#ff0000",
    },
    fontFamily: {
      "roboto-black": ["Roboto-Black", "sans-serif"],
      "roboto-bold": ["Roboto-Bold", "sans-serif"],
      "roboto-light": ["Roboto-Light", "sans-serif"],
      "roboto-medium": ["Roboto-Medium", "sans-serif"],
      "roboto-regular": ["Roboto-Regular", "sans-serif"],
      "roboto-thin": ["Roboto-Thin", "sans-serif"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "15px",
        sm: "30px",
        md: "30px",
        lg: "30px",
        xl: "30px",
      },
    },
    screens: {
      // default: 0 <-> 479 // portrait mobile // fluid width
      sm: "480px", // landscape mobile // fixed width // same design as portrait mobile
      md: "768px", // tablet // fixed width
      lg: "1014px", // laptop // fixed width
      xl: "1336px", // desktop // fixed width
    },
    extend: {
      fontSize: genPxSizeMap(1, 150),
      spacing: genPxSizeMap(1, 300),
      borderRadius: genPxSizeMap(1, 150),
    },
  },
  plugins: [plugin(genColorUtilClasses("caret", "caret-color"))],
};
