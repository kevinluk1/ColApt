import React, { useState } from "react";
function CitySelect({ onCitySelected }) {
  const [selectedCity, setSelectedCity] = useState("");

  const handleChange = (event) => {
    setSelectedCity(event.target.value);
    onCitySelected(event.target.value);
  };
  return (
    <form>
      Choose a city:
      <select value={selectedCity} onChange={handleChange}>
        <option value="" disabled>
          ---Please choose a city---
        </option>
        <option value="las-vegas-nv">Las Vegas</option>
        <option value="new-york-ny">New York</option>
        <option value="los-angeles-ca">Los Angeles</option>
        <option value="boston-ma">Boston</option>
        <option value="chicago-il">Chicago</option>
        <option value="houston-tx">Houston</option>
        <option value="philadelphia-pa">Philadelphia</option>
        <option value="phoenix-az">Phoenix</option>
      </select>
    </form>
  );
}
export default CitySelect;
