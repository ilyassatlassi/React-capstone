import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPopulationData,
  selectFilteredData,
} 
from "../redux/stock/populationSlice";
import'./style/Population.css';

import CountryCard from "./CountryCard";

export default function Population({ searchTerm }) {
  const dispatch = useDispatch();
  const filteredData = useSelector(selectFilteredData);
  // const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchPopulationData());
  }, [dispatch]);

//   const handleClick = (location, city) => {
//     dispatch(fetchPopulationData(location));
//     setTimeout(() => {
//       navigate(`/${city.name}`);
//     }, 500);
// };

  return (
    <div className="country-list">
      {filteredData
        .filter((country) =>
          country.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .slice(0, 100)
        .map((country) => (
          <CountryCard key={country.name} country={country} />
        ))}
    </div>
  );
}

// import { fetchPopulationData, selectFilteredData } from "../redux/stock/populationSlice"
// import { useSelector, useDispatch } from 'react-redux';
// import { useEffect,useState } from "react";

// export default function Population() {
//     const [searchTerm, setSearchTerm] = useState("");
//     const [selectedCountry, setSelectedCountry] = useState(null);
//     const dispatch = useDispatch();
//     const filteredData = useSelector(selectFilteredData);

//     const handleSearch = (event) => {
//       setSearchTerm(event.target.value);
//     };

//     const handleFlagError = (event) => {
//       event.target.onError = null;
//       event.target.src =
//         "https://www.crwflags.com/fotw/images/u/unknown.gif";
//     };

//     const handleCountryClick = (event, country) => {
//         event.stopPropagation();
//         setSelectedCountry(country);
//       };

//     useEffect(() => {
//       dispatch(fetchPopulationData());
//     }, [dispatch]);

//     return (
//       <div className="App">
//         <input
//           type="text"
//           placeholder="Search..."
//           value={searchTerm}
//           onChange={handleSearch}
//         />
//         <div className="countries-list">
//           {filteredData
//             .filter((country) =>
//               country.name.toLowerCase().includes(searchTerm.toLowerCase())
//             )
//             .slice(0, 100)
//             .map((country) => (
//               <div className="country-card" key={country.name} onClick={(event) => handleCountryClick(event, country)}>
//                 <img
//                   className="country-flag"
//                   src={country.flag}
//                   alt={country.name + " flag"}
//                   onError={handleFlagError}
//                 />
//                 <h2>{country.name}</h2>
//                 <p>Population: {country.population}</p>
//               </div>
//             ))}
//         </div>
//         {selectedCountry && (
//         <div className="selected-country">
//           <h2>{selectedCountry.name}</h2>
//           <p>Capital: {selectedCountry.capital}</p>
//           <p>Region: {selectedCountry.region}</p>
//           <p>Subregion: {selectedCountry.subregion}</p>
//         </div>
//       )}
//       </div>
//     );
//   }
