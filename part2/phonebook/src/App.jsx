import { useState, useEffect } from 'react'

import Title from './components/Title'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/PersonsList'

import personService from './services/personsServices'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newSearch, setNewSearch] = useState('')
  const [newSearchList, setNewSearchList] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
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

    personService
      .create(personObject)
      .then(savedPerson => {
        setPersons(persons.concat(savedPerson))
      })
  
    setNewName('')
    setNewNumber('')

  }

  const removePerson = id => {
    const personToRemove = persons.find(person => person.id === id)

    if(confirm(`Delete ${personToRemove.name} ?`)) {
      personService
      .remove(id)
      .then(
          setPersons(persons.filter(person => person.id !== id))
      )
    }
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
               personsList={persons} searchList={newSearchList} 
               removePerson={removePerson}/> 
    
    </div>
  )
}

export default App
