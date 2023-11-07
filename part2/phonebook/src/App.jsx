import { useState, useEffect } from 'react'

import Title from './components/Title'
import SuccessMessage from './components/messages/SuccessMessage'
import ErrorMessage from './components/messages/ErrorMessage'
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

  const [newSuccessMessage, setSuccessMessage] = useState(null)
  const [newErrorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, 
  [])

  const handleSearchChange = (event) => {
    const newSearchName = event.target.value.trim().toLowerCase()
    setNewSearch(newSearchName)
    setNewSearchList(
      persons.filter(person => person.name.toLowerCase().includes(newSearchName))
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

    const newPersonFullname = newName.trim()

    if (persons.some(person => person.name === newPersonFullname)) { 

      if (confirm(`${newPersonFullname} is already added to phonebook, replace the old number with a new one?`)) {
        
        const toUpdatePerson = persons.find(person => person.name === newPersonFullname)

        const personObject = {
          ...toUpdatePerson,
          number: newNumber
        }

        personService
          .update(personObject.id, personObject)
          .then(updatedPerson => {
            setPersons(
              persons.map(person => person.id !== updatedPerson.id ? person : updatedPerson)  
            )

            setSuccessMessage(`Updated ${updatedPerson.name}`)
            setTimeout(() => {
              setSuccessMessage(null)
            }, 5000)

          })
          .catch(error => {

            setErrorMessage(`Information of '${toUpdatePerson.name}' has already been removed from server`)
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)

            setPersons(persons.filter(person => person.id !== toUpdatePerson.id))
          })

      }

    } else {
      
      const personObject = {
          name: newName,
          number: newNumber
      }
    
        personService
          .create(personObject)
          .then(addedPerson => {
            setPersons(
              persons.concat(addedPerson))

              setSuccessMessage(`Added ${addedPerson.name}`)
              setTimeout(() => {
                setSuccessMessage(null)
              }, 5000)

          })

    }
    
    setNewName('')
    setNewNumber('')

  }

  const removePerson = id => {
    const personToRemove = persons.find(person => person.id === id)

    if(confirm(`Delete ${personToRemove.name} ?`)) {

      personService
      .remove(id)
      .then(response => {
        setPersons(persons.filter(person => person.id !== id))
        
        setSuccessMessage(`Removed ${personToRemove.name}`)
        setTimeout(() => {
          setSuccessMessage(null)
        }, 5000)
        
      })
    }

    setNewName('')
    setNewNumber('')

  }

  return (
    <div>

      <Title title={'Phonebook'}/>

      <SuccessMessage message={newSuccessMessage} />
      <ErrorMessage message={newErrorMessage} />
      
      <Filter newSearch={newSearch} handleSearchChange={handleSearchChange} />

      <Title title={'add a new'} />

      <PersonForm name={newName} handleName={handleNameChange} 
                  number={newNumber} handleNumber={handleNumberChange} 
                  addPerson={addPerson} />

      <Title title={'Numbers'} />

      <Persons isSearchLabelEmpty={newSearch === ''} 
               personsList={persons} searchList={newSearchList} 
               removePerson={removePerson} /> 
    
    </div>
  )
}

export default App
