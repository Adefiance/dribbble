/** @type {import('tailwindcss').Config} */
export default {
content: [
"./index.html",
"./src/**/*.{js,ts,jsx,tsx}",
],
theme: {
extend: {
    colors: {
        navy: "rgb(13, 12, 33)",
        gray: {
            light: "rgb(242, 242, 245)"
        }
    }
},
},
plugins: [],
}