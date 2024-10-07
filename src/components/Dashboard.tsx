import { Box, Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';
import AddWidgetButton from './AddWidgetButton';
import WeatherWidget from './WeatherWidget';
import TemperatureToggleButton from './TemperatureToggleButton';

const LOCAL_STORAGE_KEY = 'weather-dashboard-widgets';

const Dashboard = () => {
  // loading widgets
  const [widgets, setWidgets] = useState<number[]>(() => {
    const savedWidgets = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedWidgets ? JSON.parse(savedWidgets) : [1];
  });

  // saving widgets to local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(widgets));
  }, [widgets]);

  const handleAddWidget = () => {
    setWidgets([...widgets, widgets.length + 1]);
  };

  const handleDeleteWidget = (id: number) => {
    setWidgets(widgets.filter((widgetId) => widgetId !== id));
  };

  return (
    <Box sx={{ bgcolor: 'background.default', p: 2, minHeight: '100vh' }}>
      <Box sx={{
        display: 'flex',
        justifyContent: 'flex-start'
      }}>
      <Box sx={{ justifyContent: 'space-between' }}>
        <AddWidgetButton onAdd={handleAddWidget} />
        {/* <Box flexGrow={1} /> */}
        <TemperatureToggleButton />
      </Box>
      </Box>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {widgets.map((id, index) => (
          <Grid item xs={12} sm={6} md={4} key={id+index}>
            <WeatherWidget id={id} onDelete={handleDeleteWidget} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Dashboard;
