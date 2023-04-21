import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
    selectFilteredData,
  } 
  from "../redux/stock/populationSlice";
import './style/info.css'

export default function Info(){
    const { countryName } = useParams();
    const handleFlagError = (event) => {
        event.target.onError = null;
        event.target.src = "https://www.crwflags.com/fotw/images/u/unknown.gif";
      };

    const filteredData = useSelector(selectFilteredData);
    const character = filteredData.find((item) => item.name === countryName);
    return (
        <div className='info'>
        <div className="selected-country">
        <img
          className="country-flag-info"
          src={character.flag}
          alt={character.name + " flag"}
          onError={handleFlagError}
        />
      <h2>Name:{character.name}</h2>
      <p>Capital: {character.capital}</p>
      <p>Region: {character.region}</p>
      <p>Subregion: {character.subregion}</p>
    
    </div>
        </div>
    )

}