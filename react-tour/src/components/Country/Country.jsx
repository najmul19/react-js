import { useState } from "react";
import "./Country.css";
import CountryDetail from "../CountryDetail/CountryDetail";
const Country = ({ country, handleVisitedCountry, handleVisitedFlag }) => {
  // console.log(country)
  const { name, flags, population, area, cca3 } = country;
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  };
  // console.log(handleVisitedCountry)

  // const passWithParams=()=>{
  //     handleVisitedCountry(country)
  // }
  return (
    <div className={`country ${visited ? "visited" : "non-visited"}`}>
      <h3 style={{ color: visited ? "purple" : "white" }}>
        Name: {name?.common}{" "}
      </h3>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Area: {area} </p>
      <p>
        <small>Code: {cca3} </small>
      </p>
      {/* <button onClick={passWithParams}>Mark Visited</button> <br /> */}
      <button onClick={() => handleVisitedFlag(country.flags)}>Add Flag</button>
      <button onClick={() => handleVisitedCountry(country)}>
        Mark Visited
      </button>{" "}
      <br />
      <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>
      {visited && "I have visited this country"}
      <hr />
      <CountryDetail
        country={country}
        handleVisitedCountry={handleVisitedCountry}
        handleVisitedFlag={handleVisitedFlag}
      ></CountryDetail>
    </div>
  );
};

export default Country;
