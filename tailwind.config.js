/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        abril: ['Abril Fatface', 'serif'],
        apple: ['AppleSDGothicNeo', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 4s infinite',
        wipe: 'wipe 3s linear infinite',
        wipeOpacity: 'wipeOpacity 3s linear 1s infinite',
        'slide-in-down': 'slideInDown 1s ease-in-out',
      },
      keyframes: {
        'bounce-slow': {
          '0%, 100%': {
            transform: 'translateY(-5.5%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
        wipe: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        wipeOpacity: {
          '0%': {
            clipPath: 'polygon(0 0, 0 100%, 0 100%, 0 0)',
            opacity: 0,
          },
          '50%': {
            clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)',
            opacity: 1,
          },
          '100%': {
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
            opacity: 0,
          },
        },
        slideInDown: {
          '0%': {
            opacity: 0,
            transform: 'translateY(-20px)', // 시작 위치를 조정
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)', // 최종 위치를 조정
          },
        },
      },
      fontSize: {
        mini: '0.75rem',
        caption: '1rem',
        body2: '1.125rem',
        body1: '1.25rem',
        subheading: '1.5rem',
        heading3: '1.75rem',
        heading2: '2rem',
        heading1: '2.5rem',
        hero: '12.5rem',
      },
      colors: {
        tuatara: {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#3b3b3b',
          950: '#262626',
        },
        chart: {
          red: {
            50: '#FF7B51',
            100: '#FF725E',
            200: '#FF6262',
            300: '#FF5757',
            400: '#FF3D3D',
          },
          blue: {
            50: '#30B5FF',
            100: '#5CB1FF',
            200: '#62A3FF',
            300: '#5891FF',
            400: '#3D7FFF',
          },
        },
        consensus: {
          blue: {
            50: '#E3FAFF',
            100: '#4BDFFF',
          },
          grey: {
            50: '#EDEDED',
            100: '#858585',
          },
          pink: {
            50: '#F9D5FF',
            100: '#E64BFF',
          },
        },
        magenta: {
          50: '#fff3ff',
          100: '#fee6ff',
          200: '#fcccff',
          300: '#ffa4ff',
          400: '#ff6ffe',
          500: '#f94bfd',
          600: '#e118e1',
          700: '#bb10b8',
          800: '#990f95',
          900: '#7c1376',
          950: '#540050',
        },
        spray: {
          50: '#ebffff',
          100: '#cdfcff',
          200: '#a1f5ff',
          300: '#4be9ff',
          350: '#4BC9FF',
          400: '#1ad8f6',
          500: '#00bbdc',
          600: '#0194b9',
          700: '#097695',
          800: '#115f79',
          900: '#134f66',
          950: '#063446',
        },
        blue: {
          50: '#eef4ff',
          100: '#dae6ff',
          200: '#bdd4ff',
          300: '#90b9ff',
          400: '#6398ff',
          500: '#356bfc',
          600: '#1f4af1',
          700: '#1735de',
          800: '#192db4',
          900: '#1a2b8e',
          950: '#151d56',
        },
        yellow: '#FFEF63',
        black: {
          50: '#363636',
          100: '#191919',
        },
        white: '#FFFFFF',
        pink: {
          50: '#FF6FFE',
          100: '#FF00FD',
          200: '#FB4BFF',
        },
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
export const colors = tailwindConfig.theme.extend.colors;
