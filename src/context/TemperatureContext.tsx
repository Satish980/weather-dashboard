import React, { createContext, useState, useContext, ReactNode } from 'react';

type TemperatureContextType = {
  isCelsius: boolean;
  toggleUnit: () => void;
};

// Define the props for the provider, including children
type TemperatureProviderProps = {
  children: ReactNode;
};

const TemperatureContext = createContext<TemperatureContextType>({
  isCelsius: true,
  toggleUnit: () => {},
});

export const TemperatureProvider: React.FC<TemperatureProviderProps> = ({ children }) => {
  const [isCelsius, setIsCelsius] = useState<boolean>(true);

  const toggleUnit = () => {
    setIsCelsius(!isCelsius);
  };

  return (
    <TemperatureContext.Provider value={{ isCelsius, toggleUnit }}>
      {children}
    </TemperatureContext.Provider>
  );
};

export const useTemperature = () => useContext(TemperatureContext);
