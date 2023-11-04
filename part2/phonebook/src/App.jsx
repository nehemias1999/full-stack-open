import { useState, useEffect } from 'react'

import Title from './components/Title'
import StateMessage from './components/StateMessage'
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

  const [newStateMessage, setStateMessage] = useState(null)

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

    if (persons.some(person => person.name === newName)) { 

      if (confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        
        const toUpdatePerson = persons.find(person => person.name === newName)

        const personObject = {
          ...toUpdatePerson,
          number: newNumber
        }

        personService
          .update(toUpdatePerson.id, personObject)
          .then(updatedPerson => {
            setPersons(
              persons.map(person => person.id !== updatedPerson.id ? person : updatedPerson)  
            )

            setStateMessage(`Updated ${updatedPerson.name}`, 'success')
            setTimeout(() => {
              setStateMessage(null, null)
            }, 5000)  
          })
          .catch(error => {
            setStateMessage(`Information of '${toUpdatePerson.name}' has already been removed from server`, 'success')
            
            setTimeout(() => {
              setErrorMessage(null, null)
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

              setStateMessage(`Added ${addedPerson.name}`, 'success')
              setTimeout(() => {
                setStateMessage(null, null)
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
        
        setStateMessage(`Removed ${personToRemove.name}`, 'success')
        setTimeout(() => {
          setStateMessage(null, null)
        }, 5000)
        
      })
    }

    setNewName('')
    setNewNumber('')

  }

  return (
    <div>

      <Title title={'Phonebook'}/>

      <StateMessage message={newStateMessage} messageType={'success'}/>
      
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
