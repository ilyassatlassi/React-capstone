import { Link } from "react-router-dom";
import './style/CountryCard.css'
export default function CountryCard({ country}) {
    const handleFlagError = (event) => {
      event.target.onError = null;
      event.target.src = "https://www.crwflags.com/fotw/images/u/unknown.gif";
    };
  
    return (
      <Link to={`/details/${country.name}`}>
<div className="country-card" >
        <img
          className="country-flag"
          src={country.flag}
          alt={country.name + " flag"}
          onError={handleFlagError}
        />
        <h2>{country.name}</h2>
        <p>Population: {country.population}</p>
      </div>
  </Link>
      
    );
  }
  