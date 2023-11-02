import { useState, useEffect } from 'react'

import Title from './components/Title'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newSearch, setNewSearch] = useState('')
  const [newSearchList, setNewSearchList] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/persons')
         .then(response => {
            setPersons(response.data)
         })
  }, 
  [])

  const handleSearchChange = (event) => {
    setNewSearch(event.target.value)
    setNewSearchList(
      persons.filter(person => person.name.toLowerCase()
                                 .includes(event.target.value.toLowerCase()))
    )
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()

    if(persons.some(person => person.name === newName)) {
      return alert(`${newName} is already added to phonebook`)
    } 
    
    const personObject = {
      name: newName,
      number: newNumber
    }

    axios.post('http://localhost:3001/persons', personObject)
         .then(response => {
          setPersons(persons.concat(response.data))
         }
    )
  
    setNewName('')
    setNewNumber('')

  }

  return (
    <div>

      <Title title={'Phonebook'}/>
      
      <Filter newSearch={newSearch} handleSearchChange={handleSearchChange}/>

      <Title title={'add a new'}/>

      <PersonForm name={newName} handleName={handleNameChange} 
                  number={newNumber} handleNumber={handleNumberChange} 
                  addPerson={addPerson}/>

      <Title title={'Numbers'}/>

      <Persons isSearchLabelEmpty={newSearch === ''} 
               personsList={persons} searchList={newSearchList}/> 
    
    </div>
  )
}

export default App
