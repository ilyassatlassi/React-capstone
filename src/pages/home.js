import { useState } from "react";
import Population from "../components/Population";
import Search from "../components/Search";
import { useNavigate } from "react-router-dom";
import '../components/style/Population.css'

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  // const [selectedCountry, setSelectedCountry] = useState(null);
  const navigate = useNavigate();

  const handleSearch = (value) => {
    setSearchTerm(value);
    //   setSelectedCountry(null);
  };
  

//   const handleClick = (location, city) => {
//     dispatch(fetchAirPollution(location));
//     setTimeout(() => {
//       navigate(`/${city.name}`);
//     }, 500);
// };

//   const handleCountryClick = (country) => {
//     setSelectedCountry(country);
//   };

  return (
    <div className="container">
      <Search searchTerm={searchTerm} onSearch={setSearchTerm} />
      <Population searchTerm={searchTerm}  />
    </div>
  );
}
