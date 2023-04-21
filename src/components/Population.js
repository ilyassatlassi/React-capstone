import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchPopulationData,
  selectFilteredData,
} from '../redux/stock/populationSlice';
import './style/Population.css';

import CountryCard from './CountryCard';

export default function Population({ searchTerm }) {
  const dispatch = useDispatch();
  const filteredData = useSelector(selectFilteredData);
  const status = useSelector((state) => state.population.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPopulationData());
    }
    // eslint-disable-next-line
  }, [dispatch]);

  return (
    <div className="country-list">
      {filteredData
        .filter((country) => country.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .slice(0, 100)
        .map((country) => (
          <CountryCard key={country.name} country={country} />
        ))}
    </div>
  );
}
