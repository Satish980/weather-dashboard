import React from 'react';
import { Button } from '@mui/material';
import { useTemperature } from '../context/TemperatureContext';

const TemperatureToggleButton: React.FC = () => {
  const { isCelsius, toggleUnit } = useTemperature();

  return (
    <Button
      variant="contained"
      onClick={toggleUnit}
      color="secondary"
      sx={{
        mt: 2,
        mb: 2,
      }}
    >
      {isCelsius ? 'Switch to Fahrenheit' : 'Switch to Celsius'}
    </Button>
  );
};

export default TemperatureToggleButton;
