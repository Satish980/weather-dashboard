import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import WeatherWidget from './WeatherWidget';
import { TemperatureProvider } from '../context/TemperatureContext';

describe('WeatherWidget', () => {
  const mockDelete = jest.fn();

  beforeEach(() => {
    render(
      <TemperatureProvider>
        <WeatherWidget id={1} onDelete={mockDelete} />
      </TemperatureProvider>
    );
  });

  it('renders weather widget with correct information', () => {
    expect(screen.getByText(/New York/i)).toBeInTheDocument();
    expect(screen.getByText(/25°C/i)).toBeInTheDocument();
    expect(screen.getByText(/Sunny/i)).toBeInTheDocument(); // Adjust if weatherType changes
  });

  it('calls onDelete function when close icon is clicked', () => {
    const closeButton = screen.getByLabelText(/remove/i);
    fireEvent.click(closeButton);
    expect(mockDelete).toHaveBeenCalledWith(1);
  });
});
