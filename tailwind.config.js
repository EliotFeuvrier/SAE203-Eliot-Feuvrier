module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        "Black": "#000000",
        "white": "#ffffff",
        "Blue": "#36a9e1",
        "Grey": "#7d7373"
       },
       "fontSize": {
        "base": "0.9375rem",
        "lg": "1.25rem",
        "xl": "1.875rem",
        "2xl": "2.1875rem"
       },
       "fontFamily": {
        "flob-out-a-bork": "Flob Out a Bork",
        "big-shoulders-text": "Big Shoulders Text",
        "arial": "Arial"
       },
       "boxShadow": {
        "drop-shadow": "0px 0px 10px 0px rgba(54,169,225,1)"
       },
       "borderRadius": {
        "none": "0",
        "xs": "0.125rem",
        "sm": "0.1875rem",
        "default": "0.25rem",
        "lg": "0.3125rem",
        "xl": "0.4375rem",
        "2xl": "0.625rem",
        "3xl": "1.25rem",
        "4xl": "2.1875rem",
        "5xl": "2.8271484375rem",
        "6xl": "5.0888671875rem",
        "full": "9999px"
       }
     }
     
  },
  plugins: [],
}
