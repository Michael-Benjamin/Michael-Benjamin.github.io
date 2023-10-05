/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./docs/*.{html,js}"
  ],
  theme: {
    extend: {
      backgroundColor: {
        'dark-color': '#142e41',        // Add your dark color
        'primary-color': '#26577C',     // Add your primary color
        'secondary-color': '#E55604',   // Add your secondary color
        'tertiary-color': '#EBE4D1',    // Add your tertiary color
        'quaternary-color': '#525251',  // Add your quaternary color
      },
    },
  },
  plugins: [],
}

