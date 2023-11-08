
import CountryInfo from './CountryInfo'
import CountriesList from './CountriesList'

const FilterList = ({ filterList, handleButton }) => {

    if(filterList.length === 1)
        return <CountryInfo country={filterList[0]} />
    else

    if (filterList.length <= 10)
        return <CountriesList countriesList={filterList} handleButton={handleButton} />    
    else
        return <p>Too many matches, specify another filter</p>
    
}

export default FilterList