import React, { useState, useEffect } from "react";
import { FormControl, NativeSelect } from "@mui/material";
import { countryData } from "../../api";
import styles from "./CountryPicker.module.css";

const CountryPicker = ({ country, onCountryChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    (async () => {
      setCountries(await countryData());
    })();
  }, []);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue={country}
        onChange={(e) => {
          console.log(e.target.value);
          onCountryChange(e.target.value);
        }}
      >
        <option value="">Global</option>
        {countries.map((country) => (
          <option value={country} key={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
