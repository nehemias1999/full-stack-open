
import axios from "axios";

const api_key = import.meta.env.VITE_SOME_KEY

const baseUrl = 'https://api.openweathermap.org/'

const getWeather = (cityName) => {
    return axios
        .get(baseUrl + `data/2.5/weather?q=${cityName}&appid=${api_key}`)
        .then(response => response.data)
}

const getIconWeather = (iconName) => {
    return baseUrl + `img/w/${iconName}.png`
}

export default { getWeather, getIconWeather }