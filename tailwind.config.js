/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
          primary: "#9f00ff",
          
          secondary: "#ff0000",
                   
          accent: "#007800",
                   
          neutral: "#0e0815",
                   
          "base-100": "#f6fcff",
                   
          info: "#00a2ec",
                   
          success: "#46b73e",
                   
          warning: "#ff7800",
                   
          error: "#cc002a",
        },
      },
    ],
  },
  screens: {
    'tablet': '640px',
    // => @media (min-width: 640px) { ... }

    'laptop': '1024px',
    // => @media (min-width: 1024px) { ... }

    'desktop': '1280px',
    // => @media (min-width: 1280px) { ... }
  },

  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

