
const CountryItem = ({ name, handleButton }) => {
    return (
      <li>
        {name} <button onClick={handleButton}>show</button>
      </li>
    )
}

export default CountryItem