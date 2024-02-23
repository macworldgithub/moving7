/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
        extend: {
             screens: {
      'ssm': '400px',
    },
            colors: {
                'Glight': '#D0F3E0',
                'primary': '#1ABD5E',
            },
        },
    },
    plugins: [],
}
