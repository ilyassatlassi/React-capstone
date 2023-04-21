import React from 'react';
import { render } from '@testing-library/react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Info from '../components/moreInfo';
import { selectFilteredData} from '../redux/stock/populationSlice';

jest.mock('react-router-dom', () => ({
  useParams: jest.fn()
}));

jest.mock('react-redux', () => ({
  useSelector: jest.fn()
}));

describe('Info', () => {
  beforeEach(() => {
    useParams.mockReturnValue({ countryName: 'United States' });
    useSelector.mockReturnValue([
      {
        name: 'United States',
        flag: 'https://restcountries.com/data/usa.svg',
        capital: 'Washington, D.C.',
        region: 'Americas',
        subregion: 'Northern America'
      }
    ]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly when character data is available', () => {
    const { container } = render(<Info />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correctly when character data is not available', () => {
    useSelector.mockReturnValue([]);

    const { container } = render(<Info />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
