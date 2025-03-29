import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries]= useState([])
  const [visitedFLag, setVisitedFlag]=useState([])
  useState(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  const handleVisitedCountry=(country)=>{
    console.log('add this to your visited country')
    // console.log(country)
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  }

  const handleVisitedFlag=(flag)=>{
    console.log('glag visited')
    console.log(flag)
    const newFlags=[...visitedFLag, flag];
    setVisitedFlag(newFlags);
  }

  // remove item from an array in a state
  // use filter to select all the elements except the one you want to remove


  return (
    <div>
      <h3>Countries:{countries.length} </h3>
      <div className="flag-countainer">
        <h3>Visited Flag</h3>
        <ul>
          {
            visitedFLag.map(visitedF=> <img src={visitedF.png} alt="" /> )
          }
        </ul>
      </div>


      <div>
        <h5>Visited Countries: {visitedCountries.length} </h5>
        <ul>
            {
                visitedCountries.map(country=> <li key={country.cca3}>{country.name.common}</li> )
            }
        </ul>
      </div>

      <div className="country-container">
        {countries.map((country) => (
          <Country key={country.cca3} 
          handleVisitedFlag={handleVisitedFlag}
          handleVisitedCountry={handleVisitedCountry}
          country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
