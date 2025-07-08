/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx,js,jsx,html}", // tambahkan ekstensi lain yang kamu gunakan
    "./views/**/*.{html,js,ts}",       // jika kamu simpan di folder views
    "./public/**/*.html",              // jika kamu punya HTML di public
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
