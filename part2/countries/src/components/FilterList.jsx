
import { useEffect, useState } from 'react' 

import CountryInfo from './CountryInfo'
import CountriesList from './CountriesList'

import countriesServices from '../services/countriesServices'

const FilterList = ({ filterList }) => {
    const [selectedCountry, setCountry] = useState(null)
    const [loaded, setLoaded] = useState(false)
   
    useEffect(() => {
        if (filterList.length === 1) {
            countriesServices
                .getByCountryName(filterList[0])
                .then(response => {
                    setCountry(response)
                    setLoaded(true)
                })            
        }
    }, [filterList])

    if ((filterList.length === 1) && (loaded === true)) {
        return <CountryInfo country={selectedCountry} />
    }

    if ((filterList.length > 1) && (filterList.length <= 10))
        return <CountriesList countriesList={filterList} />
    
    if(filterList.length > 10)
        return <p>Too many matches, specify another filter</p>
    
}

export default FilterList