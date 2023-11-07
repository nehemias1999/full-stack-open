import { useState, useEffect } from 'react'

import Filter from './components/Filter'
import CountriesList from './components/CountriesList'
import FilterList from './components/FilterList'

import countriesServices from './services/countriesServices'

function App() {
  const [search, setNewSearch] = useState('')
  const [countriesList, setNewCountriesList] = useState([])
  const [filterList, setNewFilterList] = useState([])

  useEffect(() => {
    countriesServices
      .getAll()
      .then(response => {

        setNewCountriesList(response)

      })
  }, [])

  const handleSearchChange = (event) => {
    const newSearch = event.target.value.trim().toLowerCase()
    
    setNewFilterList(
      countriesList.filter(country => country.name.common
        .toLowerCase().includes(newSearch))
    )
    setNewSearch(event.target.value)
  }

  return (
    <div>

      <Filter text={'find countries'} search={search} handleSearch={handleSearchChange} />

      {

        !search
          ? <CountriesList countriesList={countriesList} />
          : <FilterList filterList={filterList} />

      }

    </div>
  )
}

export default App
