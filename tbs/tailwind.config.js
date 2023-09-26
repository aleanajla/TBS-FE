/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    // themes: false,
    styled: true,
    base: false,
    themes: [
         {
              mytheme: {
                   primary: "#064B82",
                   "primary-focus": "#3d4451",
                   "primary-content": "#ffffff",
                   secondary: "#f000b8",
                   "secondary-focus": "#bd0091",
                   "secondary-content": "#ffffff",
                   accent: "#37cdbe",
                   "accent-focus": "#2aa79b",
                   "accent-content": "#ffffff",
                   neutral: "#3d4451",
                   "neutral-focus": "#2a2e37",
                   "neutral-content": "#ffffff",
                   "base-100": "#ffffff",
                   "base-200": "#f9fafb",
                   "base-300": "#d1d5db",
                   "base-content": "#0E73A7",
                   info: "#2094f3",
                   success: "#009485",
                   warning: "#ff9900",
                   error: "#ff5724",
              },
         },
         
    ],
},
  
}


