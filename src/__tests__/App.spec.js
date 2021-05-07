import React from 'react';

import { render, cleanup, waitFor } from '@testing-library/react';
import App from '../App';
import { getWeatherForecast } from '../services/weather';

beforeEach(cleanup);

const res = {
  cod: '200',
  city: {
    id: 1111111,
    name: 'Liverpool',
    list: [{
      dt_txt: "2021-05-06 21:00:00",
      main: {
        temp: 280.00
      },
      weather: [{
        main: 'Rain'
      }]
    }]
  }
}

jest.mock('../services/weather', () => ({
  getWeatherForecast: jest.fn(() => Promise.resolve(res))
}))


describe('<App />', () => {
  afterEach(() => {
    jest.clearAllMocks();
  })
  it('renders <App />', () => {
    const { queryByTestId } = render(
      <App />
    );
    expect(queryByTestId('application')).toBeTruthy();
  });
  it('triggers the API call', async () => {
    const app = render(
      <App />
    );
    await waitFor(() => expect(getWeatherForecast).toBeDefined())
  });

})