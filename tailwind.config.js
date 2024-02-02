const darkColorPalette = {
  50: "#e6e8ed",
  100: "#c0c4d4",
  200: "#989fb7",
  300: "#717b99",
  400: "#565f86",
  500: "#3b4674",
  600: "#353f6c",
  700: "#2d3661",
  800: "#262d55",
  900: "#1b1e3d"
}

/** @type import("tailwindcss").Config */

module.exports = {
  content: [
    "./src/index.html",
    "./src/**/*.tsx",
    "./public/template.html"
  ],
  theme: {
    colors: {
      inherit: "inherit",
      transparent: "transparent",
      white: "#fff",
      dark: darkColorPalette,
      primary: "#fb9b45",
      danger: "#FC3030"
    },
    spacing: {
      0: 0,
      2: "0.125rem",
      4: "0.25rem",
      6: "0.375rem",
      8: "0.5rem",
      12: "0.75rem",
      14: "0.875rem",
      16: "1rem",
      18: "1.125rem",
      20: "1.25rem",
      24: "1.5rem",
      32: "2rem",
      48: "3rem",
      64: "4rem",
    },
    fontSize: {
      sm: "0.875rem",
      DEFAULT: "1rem",
      lg: "rfs(1.25rem)",
      xl: "rfs(2rem)",
      "display": "rfs(6rem)"
    },
    borderRadius: {
      DEFAULT: ".375rem",
      circle: "50%",
      pill: "50rem",
      full: "100%"
    },
    screens: {
      md: "768px",
      lg: "992px"
    },
    extend: {
      textColor: {
        muted: darkColorPalette[100],
      },
    }
  },
  corePlugins: {
    container: false
  }
}