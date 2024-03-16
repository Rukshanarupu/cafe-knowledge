/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
        "primary": "#570DF8",
                
        "secondary": "#F000B8",
                
        "accent": "#37CDBE",
                
        "neutral": "#3D4451",
                
        "base-100": "#FFFFFF",
                
        "info": "#3ABFF8",
                
        "success": "#36D399",
                
        "warning": "#FBBD23",
                
        "error": "#F87272",
        },
      },
      // {
      //   container: {
      //     center: true,
      //   },
      // }
    ],
  },
  plugins: [
    require('daisyui')
]
}
