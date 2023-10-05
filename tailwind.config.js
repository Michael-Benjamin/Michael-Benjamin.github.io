/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./docs/*.{html,js}"
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary-color': '#277BC0',     // Add your primary color
        'secondary-color': '#FFB200',   // Add your secondary color
        'tertiary-color': '#FFCB42',    // Add your tertiary color
        'quaternary-color': '#FFF4CF',  // Add your quaternary color
      },
    },
  },
  plugins: [],
}

