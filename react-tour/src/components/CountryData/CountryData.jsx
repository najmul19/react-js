

const CountryData = ({country,handleVisitedCountry, handleVisitedFlag}) => {
    console.log("inside countrt data: ", country, handleVisitedCountry, handleVisitedFlag )
    // console.log(country)
    return (
        <div>
            <h4>Country Data: {country.name.common} </h4>
        </div>
    );
};

export default CountryData;