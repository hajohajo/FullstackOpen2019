import React from 'react'

const Filter = (props) => {
    var filteredCountries = props.countries.filter(country => country.name.toLowerCase().includes(props.filterCondition.toLowerCase()))

    if(filteredCountries.length>10) {
        return (
            <div>
                Too many matches, specify another filter.
            </div>
        )
    }else if(filteredCountries.length>1) {
        return (
            filteredCountries.map(country => <div key={country.name}>{country.name}</div>)
        )
    }else if(filteredCountries.length===1) {
        let country = filteredCountries[0]
        return (
            <div>
                <h1>{country.name}</h1>
                    <p>capital: {country.capital}</p>
                    <p>population: {country.population}</p>
                <h2>Languages</h2>
                    <ul>
                        {country.languages.map(language => <li key={language.name}>{language.name}</li>)}
                    </ul>

                <div>
                    <img
                        src={country.flag}
                        alt={"Flag of the country"}
                        height={"200px"}
                        width={"200px"}
                    />
                </div>
            </div>
        )
    }else{
        return (
            <div>
                No countries match the search.
            </div>
        )
    }

}

export default Filter