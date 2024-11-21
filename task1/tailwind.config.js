module.exports = {
    content: [
      "./**/*.{html,js,jsx,ts,tsx}",
      "./index.html",
    ],theme:{
        extends:{
            container:{
                center: true,
                padding: {
                  DEFAULT: '5rem',  // px-20 equivalent (80px)
                  sm: '2rem',
                  lg: '4rem',
                  xl: '5rem',
                  '2xl': '6rem',
                },
            }
        }
    }
  };
  