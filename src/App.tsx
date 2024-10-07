import React, { useState, useEffect } from 'react';
import { Box, Button, Grid } from '@mui/material';
import WeatherWidget from './components/WeatherWidget';
import { useTemperature } from './context/TemperatureContext';

const App: React.FC = () => {
  const [widgets, setWidgets] = useState<number[]>([]);
  const { isCelsius, toggleUnit } = useTemperature();

  // Add widget handler
  const addWidget = () => {
    setWidgets([...widgets, widgets.length + 1]);
  };

  // Remove widget handler
  const deleteWidget = (id: number) => {
    setWidgets(widgets.filter((widget) => widget !== id));
  };

  // Load widgets from localStorage
  useEffect(() => {
    const savedWidgets = localStorage.getItem('widgets');
    if (savedWidgets) {
      setWidgets(JSON.parse(savedWidgets));
    }
  }, []);

  // Save widgets to localStorage
  useEffect(() => {
    localStorage.setItem('widgets', JSON.stringify(widgets));
  }, [widgets]);

  return (
    <Box p={2}>
      <Button variant="contained" onClick={addWidget}>
        Add Widget
      </Button>
      <Button variant="outlined" onClick={toggleUnit} sx={{ ml: 2 }}>
        Switch to {isCelsius ? 'Fahrenheit' : 'Celsius'}
      </Button>
      <Grid container spacing={2} mt={2}>
        {widgets.map((widget, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <WeatherWidget id={widget} onDelete={deleteWidget} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default App;
