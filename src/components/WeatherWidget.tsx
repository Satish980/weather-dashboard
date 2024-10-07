import { Card, CardContent, IconButton, Typography, Box } from "@mui/material";
import { WbSunny, Cloud } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import { useTemperature } from "../context/TemperatureContext";

type WeatherWidgetProps = {
  id: number;
  onDelete: (id: number) => void;
};

const WeatherWidget: React.FC<WeatherWidgetProps> = ({ id, onDelete }) => {
  const { isCelsius } = useTemperature();
  const temperatureC = 25;
  const temperatureF = (temperatureC * 9) / 5 + 32;

  const weatherType = "sunny"; // Dynamic weather condition
  const weatherIcon =
    weatherType === "sunny" ? (
      <WbSunny fontSize="large" />
    ) : (
      <Cloud fontSize="large" />
    );
  const widgetColor = weatherType === "sunny" ? "success.main" : "warning.main";

  return (
    <Card
      sx={{
        bgcolor: widgetColor,
        color: "text.primary",
        boxShadow: 2,
        borderRadius: 2,
        position: "relative",
        p: 1,
      }}
    >
      <IconButton
        aria-label="remove"
        onClick={() => onDelete(id)}
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
          zIndex: 1,
        }}
      >
        <CloseIcon />
      </IconButton>

      <CardContent>
        <Typography variant="h5" sx={{ color: "primary.contrastText" }}>
          New York
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box>{weatherIcon}</Box>
          <Typography variant="h6">
            {isCelsius ? `${temperatureC}°C` : `${temperatureF.toFixed(1)}°F`} -{" "}
            {weatherType.charAt(0).toUpperCase() + weatherType.slice(1)}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default WeatherWidget;
