
const PersonItem = ({ name, number, removePerson}) => {
    return (
      <li>
        {name} {number} <button onClick={removePerson}>delete</button>
      </li>
    )
}

export default PersonItem