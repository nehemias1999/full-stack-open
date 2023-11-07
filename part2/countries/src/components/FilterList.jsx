
import CountryData from './CountryInfo'
import CountriesList from './CountriesList'

const FilterList = ({ filterList }) => {

    if(filterList.length === 1)
        return <CountryData country={filterList[0]} />
    else
    
    if (filterList.length <= 10)
        return <CountriesList countriesList={filterList} />
    else
        return <p>Too many matches, specify another filter</p>
    
}

export default FilterList