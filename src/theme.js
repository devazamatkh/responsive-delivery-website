import PoppinsRegularWoff2 from './assets/fonts/poppins/Poppins-Regular.woff2'
import PoppinsSemiBoldWoff2 from './assets/fonts/poppins/Poppins-SemiBold.woff2'
import PoppinsBoldWoff2 from './assets/fonts/poppins/Poppins-Bold.woff2'
import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  typography: {
    fontFamily: `"Poppins", sans-serif`
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Poppins';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Poppins'), local('Poppins-Regular'), url(${PoppinsRegularWoff2}) format('woff2');
        }
        @font-face {
          font-family: 'Poppins';
          font-style: normal;
          font-display: swap;
          font-weight: 600;
          src: local('Poppins'), local('Poppins-Regular'), url(${PoppinsSemiBoldWoff2}) format('woff2');
        }
        @font-face {
          font-family: 'Poppins';
          font-style: normal;
          font-display: swap;
          font-weight: 700;
          src: local('Poppins'), local('Poppins-Regular'), url(${PoppinsBoldWoff2}) format('woff2');
        }
      `
    }
  }
})
