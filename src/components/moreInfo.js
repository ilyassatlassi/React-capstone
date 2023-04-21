import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectFilteredData,
}
  from '../redux/stock/populationSlice';
import './style/info.css';

export default function Info() {
  const { countryName } = useParams();

  const filteredData = useSelector(selectFilteredData);
  const character = filteredData.find((item) => item.name === countryName);
  return (
    <div className="info">
      {character ? (
        <div className="selected-country">
          <img
            className="country-flag-info"
            src={character.flag}
            alt={`${character.name} flag`}
          />
          <h2>
            Name:
            {character.name}
          </h2>
          <p>
            Capital:
            {character.capital}
          </p>
          <p>
            Region:
            {character.region}
          </p>
          <p>
            Subregion:
            {character.subregion}
          </p>
        </div>
      ) : (
        <div>No data available for {countryName}</div>
      )}
    </div>
  );
  
}
