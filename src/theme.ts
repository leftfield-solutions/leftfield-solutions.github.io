import { createTheme } from '@mui/material/styles';
import tailwindConfig from '../tailwind.config';
export const theme = createTheme({
  palette: {
    primary: {
      light: tailwindConfig.theme.extend.colors.primary[50],
      main: tailwindConfig.theme.extend.colors.primary[600],
      dark: tailwindConfig.theme.extend.colors.primary[900],
      contrastText: '#fff'
    },
    secondary: {
      light: tailwindConfig.theme.extend.colors.secondary[50],
      main: tailwindConfig.theme.extend.colors.secondary[500],
      dark: tailwindConfig.theme.extend.colors.secondary[600],
      contrastText: '#fff'
    }
  },
  typography: {
    fontFamily: [...tailwindConfig.theme.extend.fontFamily.sans].join(',')
  }
});
