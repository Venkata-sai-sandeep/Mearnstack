import React, { useState, useEffect } from "react";
import axios from "axios";
import Searching from "./components/Searching";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [newfilter, setFilter] = useState("");

  useEffect(() => {
    axios
        .get("https://restcountries.eu/rest/v2/all")
        .then(res => {
           setCountries(res.data);
    });
  }, []);



  const handleChange = event => {
    event.preventDefault()
    setFilter(event.target.value);
  };

  return (
    <div>
      <h2>Find countries</h2>
      <input value={newfilter} onChange={handleChange}/>
          <Searching countries={countries} newfilter={newfilter} showC={handleChange}/>

    </div>
  )
}

export default App;