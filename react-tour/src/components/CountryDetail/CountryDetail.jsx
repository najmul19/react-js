import CountryData from "../CountryData/CountryData";

const CountryDetail = (props) => {
//   const { country, handleVisitedCountry, handleVisitedFlag } = props;
  return (
    <div>
      <h4>Country Detail</h4>
      <hr />

      {/* <CountryData
        country={country}
        handleVisitedCountry={handleVisitedCountry}
        handleVisitedFlag={handleVisitedFlag}
      ></CountryData> */}

        <CountryData {...props}></CountryData>
    </div>
  );
};

export default CountryDetail;
