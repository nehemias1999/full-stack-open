import { useState } from 'react'

import Title from './components/Title'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newSearch, setNewSearch] = useState('')
  const [newSearchList, setNewSearchList] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

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
      number: newNumber,
      id: persons.length + 1
    }
  
    setPersons(persons.concat(personObject))
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
