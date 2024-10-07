import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#f50057',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f4f6f8',
      paper: '#ffffff',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
    },
    info: {
      main: '#0288d1',
      contrastText: '#ffffff',
    },
    success: {
      main: '#4caf50',
    },
    error: {
      main: '#f44336',
    },
    warning: {
      main: '#ff9800',
    },
  },
  typography: {
    fontFamily: `'Poppins', sans-serif`,
    h5: {
      fontWeight: 500,
    },
    button: {
      textTransform: 'none',
    },
  },
  // shadows: [
  //   'none',
  //   '0px 1px 3px rgba(0, 0, 0, 0.2)',
  //   '0px 3px 6px rgba(0, 0, 0, 0.15)', // Add more shadows as needed
  // ],
});

export default theme;
