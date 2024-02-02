if(process.env.NODE_ENV === "production") {
  module.exports = {
    plugins: [
      require("tailwindcss"),
      require("rfs"),
      require("postcss-prune-var"),
      require("postcss-variable-compress"),
      require("autoprefixer"),
      require("cssnano")({
        preset: [
          "default",
          {discardComments: {removeAll: true}}
        ]
      })
    ]
  }
} else {
  module.exports = {
    plugins: [
      require("tailwindcss"),
      require("rfs") 
    ]
  }
}