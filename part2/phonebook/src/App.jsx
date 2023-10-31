import { useState } from 'react'

const Person = ({ name, phone }) => {
    return (
      <li>
        {name} {phone}
      </li>
    )
}

const App = () => {
  const [persons, setPersons] = useState([
    {name: 'arto Hellas', phone: '040-1234567', id: 1}
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()

    if(persons.some(person => person.name === newName)) {
      return alert(`${newName} is already added to phonebook`)
    } 
    
    const personObject = {
      name: newName,
      phone: newPhone,
      id: persons.length + 1
    }
  
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewPhone('')

  }

  return (
    <div>
      <h2>Phonebook</h2>

      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} required/>
        </div>
        <div>
          number: <input value={newPhone} onChange={handlePhoneChange} required/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <ul>
        {persons.map(person =>
          <Person key={person.id} name={person.name} phone={person.phone}/>
        )}
      </ul>
    </div>
  )
}

export default App
