
import CountryItem from './CountryItem'

const CountriesList = ({ countriesList }) => {
    const listStyle = {
        listStyleType: 'none'
    }

    return (
        <ul style={listStyle}>
            {
                countriesList.map((country, index) => 
                    <CountryItem key={index} name={country} />
                )
            }
        </ul>
    )
}

export default CountriesList