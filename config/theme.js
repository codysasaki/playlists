import {extendTheme } from 'native-base';

const theme = extendTheme({
    colors: {
      // Add new color
      primary: {
        50: '#d9f7ff',
        100: '#b0e8fc',
        200: '#84dcf8',
        300: '#56d2f3',
        400: '#2accee',
        500: '#11a5d5',
        600: '#0075a6',
        700: '#004c78',
        800: '#00284a',
        900: '#000c1d',
      },
      secondary: {
        50: '#f2f1f4',
        100: '#d8d6d9',
        200: '#bebbc1',
        300: '#a49ea9',
        400: '#8b8291',
        500: '#736979',
        600: '#59525e',
        700: '#403b42',
        800: '#262327',
        900: '#0d0b0e',  
      }
    },
    config: {
      // Changing initialColorMode to 'dark'
      initialColorMode: 'dark',
    },
  });

export default theme;