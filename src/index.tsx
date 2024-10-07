import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { TemperatureProvider } from './context/TemperatureContext';

ReactDOM.render(
  <React.StrictMode>
    <TemperatureProvider>
      <App />
    </TemperatureProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
