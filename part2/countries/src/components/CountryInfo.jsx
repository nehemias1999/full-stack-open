
import Title from './Title'
import Subtitle from './Subtitle' 

const CountryData = ({ country }) => {
    return (
        <div>

            <Title text={country.name.common} />

            <p>capital {country.capital}</p>
            
            <p>area {country.area}</p>
            
            <Subtitle text={'languages'} />

            <ul>
                {
                    Object.values(country.languages).map((languaje, index) => 
                        <li key={index}>{languaje}</li>
                    )
                }
            </ul>

            <img src={country.flags.svg} alt={country.flags.alt} />       

        </div>
    )
}

export default CountryData