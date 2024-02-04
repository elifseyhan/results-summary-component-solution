/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                hanken: ["Hanken Grotesk", "sans-serif"],
            },
            colors: {
                "light-red": "hsl(0, 100%, 67%)",
                "light-red-5": "hsl(0 100% 67% / 5%)",
                "orangey-yellow": "hsl(39, 100%, 56%)",
                "orangey-yellow-5": "hsl(39deg 100% 56% / 5%)",
                "green-teal": "hsl(166, 100%, 37%)",
                "green-teal-5": "hsl(166 100% 37% / 5%)",
                "cobalt-blue": "hsl(234, 85%, 45%)",
                "cobalt-blue-5": "hsl(234 85% 45% / 5%)",
                "pale-blue": "hsl(221, 100%, 96%)",
                "light-lavender": "hsl(241, 100%, 89%)",
                "dark-gray-blue": "hsl(224, 30%, 27%)",
                "light-state-blue": "hsl(252, 100%, 67%)",
                "light-royal-blue": "hsl(241, 81%, 54%)",
                "violet-blue": "hsla(256, 72%, 46%, 1)",
                "persian-blue": "hsla(241, 72%, 46%, 0)",
            },
        },
    },
    plugins: [],
};
