/** @type {import('tailwindcss').Config} */
export default {
content: [
"./index.html",
"./src/**/*.{js,ts,jsx,tsx}",
],
theme: {
extend: {
    colors: {
        dark: {
            navy: "rgb(13, 12, 33)",
            light: "rgb(242, 242, 245)",
            gray: "rgb(26, 24, 50)"
        }
    }
},
},
plugins: [],
}