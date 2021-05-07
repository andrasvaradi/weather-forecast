import React from 'react';

import { render, cleanup, fireEvent } from '@testing-library/react';
import Tile from '../Components/Tile/Tile';

beforeEach(cleanup);


const dataMock = {
  dt_txt: "2021-05-06 21:00:00",
  weather: [{
    main: 'Rain'
  }],
  main: {
    temp: 280.00
  },
}

describe('<Tile />', () => {
  describe('Success', () => {
    it('renders a tile', () => {
      const { queryByTestId, debug } = render(
        <Tile data={dataMock} />
      );
      // debug()
      expect(queryByTestId('tile-test')).toBeTruthy();
    });
  });
})
