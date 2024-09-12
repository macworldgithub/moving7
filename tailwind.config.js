/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
        fontSize: {
            'heading': ['22px', {
                lineHeight: '2rem',
                letterSpacing: '-0.01em',
            }],
            'sub-heading': ['18px', {
                lineHeight: '1.8rem',
                letterSpacing: '-0.01em',
                fontWeight:"bold"
            }],
            'para': ['14px', {
                lineHeight: '1.2rem',
                letterSpacing: '-0.01em',
            }]
        },
        extend: {
            screens: {
                'ssm': '400px',
            },
            colors: {
                'Glight': '#D0F3E0',
                'primary': '#C1E1EE',
            },
        },
    },
    plugins: [],
}
