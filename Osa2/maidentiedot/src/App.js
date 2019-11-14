import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Filter from './components/Filter'

const App = () => {
    const [countries, setCountries] = useState([])
    const [filterCondition, setFilterCondition] = useState('')

    const hook = () => {
      axios
          .get('https://restcountries.eu/rest/v2/all')
          .then(response => {
            setCountries(response.data)
              console.log(response.data)
          })
    }
    useEffect(hook, [])

    const handleFilterChange = (event) => {
        setFilterCondition(event.target.value)
    }


    return (
        <div>
            <div>
                <input value={filterCondition} onChange={handleFilterChange} />
            </div>
            <div>
                <Filter countries={countries} filterCondition={filterCondition}>Placeholder</Filter>
            </div>
        </div>


    )
}

export default App;
