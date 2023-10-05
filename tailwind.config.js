/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./docs/*.{html,js}"
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary-color': '#26577C',     // Add your primary color
        'secondary-color': '#EBE4D1',   // Add your secondary color
        'tertiary-color': '#E55604',    // Add your tertiary color
        'quaternary-color': '#B4B4B3',  // Add your quaternary color
      },
    },
  },
  plugins: [],
}

