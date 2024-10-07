import { render, screen } from '@testing-library/react';
import WeatherWidget from './WeatherWidget';

test('renders weather widget with temperature and location', () => {
  render(<WeatherWidget id={1} onDelete={() => {}} />);
  expect(screen.getByText(/New York/i)).toBeInTheDocument();
  expect(screen.getByText(/25°C - Sunny/i)).toBeInTheDocument();
});
