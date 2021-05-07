import React from 'react';

import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import Search from '../Components/Search/Search';

const setCityMock = jest.fn()

beforeEach(cleanup);

describe('<Search />', () => {
  describe('Success', () => {
    it('renders the search component', () => {
      const { queryByTestId } = render(
        <Search setCity={setCityMock} />
      );
      expect(queryByTestId('search-test')).toBeTruthy();
    });
    it('renders the task checkbox and accepts a onClick', () => {
      const { queryByTestId } = render(
        <Search setCity={setCityMock} />
      );
      fireEvent.click(queryByTestId('search-button'));
    });
    it('renders the task checkbox and accepts a onKeyDown', () => {
      const { queryByTestId } = render(
        <Search setCity={setCityMock} />
      );
      expect(queryByTestId('search-test')).toBeTruthy();
      fireEvent.keyDown(queryByTestId('search-input'), {
        key: 'a',
        code: 65,
      });
      fireEvent.keyDown(queryByTestId('search-input'), {
        key: 'Enter',
        code: 13,
      });
      expect(setCityMock).toHaveBeenCalled();
    });
  });
})
