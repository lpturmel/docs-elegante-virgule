module.exports = {
    mode: "jit",
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                "main-accent": "#FAFAFA",
                title: "#666666",
                "border-accent": "#E1E1E1",
                "icon-accent": "#B0B0B0",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
