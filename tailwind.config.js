/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      container: {
        center: true,
        padding: '1rem', // Отступ внутри контейнера
        screens: {
          'DEFAULT': '100%', // Ширина по умолчанию
          '2xl': '1440px',   // Максимальная ширина контейнера на экранах >=1440px
        },
      },
      height: {
        container: '1000px', // Высота для класса h-container
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '1440px', // Максимальная ширина
          height: '1000px',   // Высота контейнера
          margin: '0 auto',   // Центрирование
          padding: '1rem',    // Внутренние отступы
        },
      });
    },
  ],
};
