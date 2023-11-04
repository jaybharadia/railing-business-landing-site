/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    100: "#FBEFD4",
                    200: "#F7DDAB",
                    300: "#E9BE7D",
                    400: "#D39C59",
                    500: "#B6702A",
                    600: "#9C571E",
                    700: "#834115",
                    800: "#692D0D",
                    900: "#571F08",
                },
            },
        },
    },
    plugins: [],
};
