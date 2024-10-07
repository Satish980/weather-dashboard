import React, { createContext, useContext, useState } from 'react';

interface TemperatureContextProps {
  isCelsius: boolean;
  toggleUnit: () => void;
}

const TemperatureContext = createContext<TemperatureContextProps | undefined>(undefined);

export const useTemperature = () => {
  const context = useContext(TemperatureContext);
  if (!context) {
    throw new Error('useTemperature must be used within a TemperatureProvider');
  }
  return context;
};

export const TemperatureProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const LOCAL_STORAGE_UNIT_KEY = 'weather-dashboard-unit';
  
  // Loading temperature unit from localStorage or default to Celsius
  const [isCelsius, setIsCelsius] = useState<boolean>(() => {
    const savedUnit = localStorage.getItem(LOCAL_STORAGE_UNIT_KEY);
    return savedUnit ? JSON.parse(savedUnit) : true;
  });

  const toggleUnit = () => {
    setIsCelsius((prevUnit) => {
      const newUnit = !prevUnit;
      localStorage.setItem(LOCAL_STORAGE_UNIT_KEY, JSON.stringify(newUnit));
      return newUnit;
    });
  };

  return (
    <TemperatureContext.Provider value={{ isCelsius, toggleUnit }}>
      {children}
    </TemperatureContext.Provider>
  );
};
