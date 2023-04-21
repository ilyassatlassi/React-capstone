import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Population from '../components/Population';

const mockStore = configureMockStore();

describe('Population component', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      population: {
        data: [
          {
            name: 'Country 1',
            population: 1000,
            flag: 'https://restcountries.com/data/afg.svg',
            capital: 'Capital 1',
            region: 'Region 1',
            subregion: 'Subregion 1',
          },
          {
            name: 'Country 2',
            population: 2000,
            flag: 'https://restcountries.com/data/ala.svg',
            capital: 'Capital 2',
            region: 'Region 2',
            subregion: 'Subregion 2',
          },
        ],
        status: 'succeeded',
        error: null,
      },
    });
  });

  it('renders correctly', () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Population searchTerm="" />
        </BrowserRouter>
      </Provider>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
