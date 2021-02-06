import axios from 'axios'

const api = axios.create({
  baseURL: 'https://gama-bankline-desbugados.herokuapp.com/'
})

export default axios