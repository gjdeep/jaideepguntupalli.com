const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        fontFamily: {
            dm: ["DM Sans", ...defaultTheme.fontFamily.serif],
            work: ["Work Sans", ...defaultTheme.fontFamily.serif],
        },
        extend: {
            colors: {
                "cus-orange": "#EA4638",
                "cus-light-orange": "#F3F0F1",
                "cus-orange-dark": "#E03C2F",
            },
            screens: {
                "3xl": "1792px",
                "4xl": "1856px",
            },
        },
    },
    plugins: [],
};
