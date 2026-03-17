import React, { useState } from "react";
import "./Country.css";

const Country = ({ country }) => {
  const [visited, setVisited] = useState(false);

  const handleVisit = () => {
    setVisited(visited ? false : true);
  };

  return (
    <div className="country">
      <img src={country.flags.flags.png} alt={country.name.common} />
      <p>Name: {country.name.common}</p>
      <p>Population: {country.population.population}</p>
      <p>Capital: {country.capital.capital}</p>
      {/* <p>Currency: {country.currencies.currencies.name}</p> */}
      <p>Region: {country.region.region}</p>
      <p>Language: {country.languages.languages.eng}</p>
      <p>
        Area: {country.area.area}
        {country.area.area > 300000 ? " Large Country" : " Small Country"}
      </p>
      <button onClick={handleVisit}>
        {visited ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
};

export default Country;
