
import { useState, useEffect } from 'react'

import weatherServices from '../services/weatherServices'

import Title from './Title'
import Subtitle from './Subtitle' 

const CountryData = ({ country }) => {
    const [weather, setNewWeather] = useState(null)

    useEffect(() => {
        weatherServices
            .getWeather(country.capital)
            .then(response =>
                setNewWeather(response)
            )
    }
    , [])

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

            {
                (weather) && (
                    <div>
                        <Title text={'Weather in ' + country.capital} />

                        <p>temperature {weather.main.temp}</p>

                        <img src={weatherServices.getIconWeather(weather.weather[0].icon)} alt={weather.weather[0].description} />                                              

                        <p>wind {weather.wind.speed}</p>
                    </div>
                )
            }

        </div>
    )
}

export default CountryData