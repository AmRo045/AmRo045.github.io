import {heroui} from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
const config = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#517179",
                    50: "#F3F6F7",
                    100: "#E7EDEF",
                    200: "#C8D7DA",
                    300: "#A6BEC4",
                    400: "#7C9EA7",
                    500: "#517179",
                    600: "#4A676E",
                    700: "#3F585F",
                    800: "#354A4F",
                    900: "#253337",
                    950: "#121A1B"
                }
            },

            fontFamily: {
                monospace: ["monospace"]
            }
        }
    },
    darkMode: "class",
    plugins: [heroui()]
};

module.exports = config;
