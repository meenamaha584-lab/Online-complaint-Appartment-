/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                royalGold: '#D4AF37',
                royalBlue: '#002366', // Deep Royal Blue
                royalBlack: '#0F0F0F', // Very dark grey/black
                royalSilver: '#C0C0C0',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            }
        },
    },
    plugins: [],
}
