import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import fetchMock from 'jest-fetch-mock';

import Weather from '../components/Weather';

beforeEach(() => {
  fetchMock.enableMocks();
});

afterEach(() => {
  fetchMock.resetMocks();
});

// Mocking geolocation API
global.navigator.geolocation = {
  getCurrentPosition: jest.fn().mockImplementationOnce(success =>
    Promise.resolve(
      success({
        coords: {
          latitude: 51.1,
          longitude: 45.3,
        },
      })
    )
  ),
};

describe('Weather component', () => {
  test('fetches weather data', async () => {
    const mockWeatherData = {
      name: 'Example City',
      main: {
        temp: 293.15,
        temp_max: 295.15,
        temp_min: 290.15,
        humidity: 50,
        pressure: 1013,
      },
      weather: [
        {
          icon: '01d',
          description: 'Clear sky',
        },
      ],
      wind: {
        speed: 2.5,
      },
      sys: {
        sunrise: 1622723823,
        sunset: 1622776823,
      },
    };

    fetchMock.mockResponseOnce(JSON.stringify(mockWeatherData));

    render(<Weather />);

    // expect(screen.getByText("Example City")).toBeInTheDocument();
  });

  test('displays loading state while fetching data', () => {
    render(<Weather />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
