import React, { useState } from "react";

const Search = ({ onSearchChange }) => {
   const [selectedCity, setSelectedCity] = useState("London");

   const handleOnChange = (searchData) => {
      setSelectedCity(searchData);
      onSearchChange(searchData);
   };

   return (
      <select
         className="search-select"
         value={selectedCity}
         onChange={(e) => handleOnChange(e.target.value)}
         name="selectedCity"
      >
         <option value="London">London</option>
         <option value="Paris">Paris</option>
         <option value="Berlin">Berlin</option>
         <option value="Amsterdam">Amsterdam</option>
         <option value="Vienna">Vienna</option>
      </select>
   );
};

export default Search;
