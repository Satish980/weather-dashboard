import { Card, CardContent, IconButton, Typography } from '@mui/material';
import { WbSunny, Delete } from '@mui/icons-material';
import React from 'react';
import { useTemperature } from '../context/TemperatureContext';

type WeatherWidgetProps = {
  id: number;
  onDelete: (id: number) => void;
};

const WeatherWidget: React.FC<WeatherWidgetProps> = ({ id, onDelete }) => {
  const { isCelsius } = useTemperature();
  const temperatureC = 25; // Hardcoded example
  const temperatureF = (temperatureC * 9) / 5 + 32;

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">New York</Typography>
        <WbSunny fontSize="large" />
        <Typography variant="h6">
          {isCelsius ? `${temperatureC}°C` : `${temperatureF.toFixed(1)}°F`} - Sunny
        </Typography>
        <IconButton aria-label="delete" onClick={() => onDelete(id)}>
          <Delete />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default WeatherWidget;
