import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#D65A31', 
    },
    background: {
      default: '#F5F1E7', 
      paper: '#FFFFFF', 
    },
    text: {
      primary: '#3D3D3D',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Arial", sans-serif', 
  },
});

export default theme;
