import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
const config = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#627369",
                    50: "#EEF1EF",
                    100: "#DEE3E0",
                    200: "#C0C9C4",
                    300: "#9FADA5",
                    400: "#7E9186",
                    500: "#627369",
                    600: "#4D5B53",
                    700: "#3B453F",
                    800: "#282F2B",
                    900: "#131614",
                    950: "#090B0A"
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
