import axios from 'axios';


// 
// const apiKey = process.env.REACT_APP_API_KEY
const baseUrl = import.meta.env.VITE_BASE_URL
console.log(baseUrl)
// const baseUrl = process.env.VITE_BASE_URL
const options = {
  baseURL: baseUrl,
  headers: {
    accept: 'text/plain',
    'Content-Type': 'application/json',
  }
}
export const Axios = axios.create(options)
