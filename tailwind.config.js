/** @type {import('tailwindcss').Config} */
export default {
content: [
"./index.html",
"./src/**/*.{js,ts,jsx,tsx}",
],
theme: {
extend: {
    colors: {
        gray: {
            light: "rgb(242, 242, 245)",
            medium: "rgb(122, 112, 148)",
            hard: "rgb(26, 24, 50)",
        },
        navy: "rgb(13, 12, 33)"
    }
},
},
plugins: [],
}