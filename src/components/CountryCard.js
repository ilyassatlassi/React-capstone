import { Link } from 'react-router-dom';
import './style/CountryCard.css';

export default function CountryCard({ country }) {


  return (
    <Link to={`/details/${country.name}`}>
      <div className="country-card">
        <img
          className="country-flag"
          src={country.flag}
          alt={`${country.name} flag`}
        />
        <h2>{country.name}</h2>
        <p>
          Population:
          {country.population}
        </p>
      </div>
    </Link>

  );
}
