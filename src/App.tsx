import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import Dashboard from './components/Dashboard';
import { TemperatureProvider } from './context/TemperatureContext';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TemperatureProvider>
        <Dashboard />
      </TemperatureProvider>
    </ThemeProvider>
  );
}

export default App;
