
import { useState } from 'react'

import CountryInfo from './CountryInfo'
import CountryItem from './CountryItem'

const CountriesList = ({ countriesList }) => {
    const [selectedCountry, setNewSelectedCountry] = useState(null)

    const listStyle = {
        listStyleType: 'none'
    }

    const handleButtonChange = (country) => {
        setNewSelectedCountry(country)
    };

    return (
        <>
            {
                (selectedCountry) 
                ? (
                    <CountryInfo country={selectedCountry} />
                ) : (
                    <ul style={listStyle}>
                        {
                            countriesList.map((country, index) => 
                                <CountryItem key={index} name={country.name.common}
                                handleButton={() => handleButtonChange(country)} />
                            )
                        }
                    </ul>
                )
            }
        </>
    )
}

export default CountriesList