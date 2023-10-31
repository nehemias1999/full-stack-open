import { useState } from 'react'

const Person = ({ name }) => {
    return (
      <li>
        {name}
      </li>
    )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', id: 1}
  ]) 
  const [newName, setNewName] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()

    if(persons.some(person => person.name === newName)) {
      return alert(`${newName} is already added to phonebook`)
    } 
    
    const personObject = {
      name: newName,
      id: persons.length + 1
    }
  
    setPersons(persons.concat(personObject))
    setNewName('')

  }

  return (
    <div>
      <h2>Phonebook</h2>

      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <ul>
        {persons.map(person =>
          <Person key={person.id} name={person.name}/>
        )}
      </ul>
    </div>
  )
}

export default App
