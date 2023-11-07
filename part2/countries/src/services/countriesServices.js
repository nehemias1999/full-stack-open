
import axios from "axios";

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api'

const getAll = () => {
    return axios.get(baseUrl + '/all')
        .then(reponse => reponse.data)
}

const getByCountryName = (countryName) => {
    return axios.get(baseUrl + '/name/' + countryName)
        .then(reponse => reponse.data)
}

export default { getAll, getByCountryName }