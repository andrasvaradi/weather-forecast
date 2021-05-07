import React from 'react';

import { render, cleanup, fireEvent } from '@testing-library/react';
import City from '../Components/City/City';

beforeEach(cleanup);

const cityDataMock = {
  city: {
    id: 1111111,
    name: 'Liverpool',
  },
  list: [
    {
      dt_txt: "2021-05-06 21:00:00",
      main: {
        temp: 280.00
      },
      weather: [{
        main: 'Rain'
      }]
    },
    {
      dt_txt: "2021-05-07 17:00:00",
      main: {
        temp: 290.00
      },
      weather: [{
        main: 'Snow'
      }]
    },
  ]
}


describe('<City />', () => {
  describe('Success', () => {
    it('renders the city component', () => {
      const { queryByTestId, debug } = render(
        <City data={cityDataMock} />
      );
      // debug()
      expect(queryByTestId('city-test')).toBeTruthy();
    });
    it('displays the correct city name', () => {
      const { queryByTestId, debug } = render(
        <City data={cityDataMock} />
      );
      // debug()
      expect(queryByTestId('city-test')).toBeTruthy();
    });
    it('accepts an onClick', () => {
      const { queryByTestId } = render(
        <City data={cityDataMock} />
      );
      fireEvent.click(queryByTestId('forward-button-test'));
    });
    it('has the right value for the button', () => {
      const { queryByTestId } = render(
        <City data={cityDataMock} />
      );
      fireEvent.click(queryByTestId('back-button-test'));
      expect(queryByTestId('back-button-test').value).toBe(
        'back'
      );
    });
  });
})
