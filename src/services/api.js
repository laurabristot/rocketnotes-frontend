import axios from 'axios'



await axios.get(`https://rocketnotes-api-lfzv.onrender.com`, {
  params: { /* Whatever data you want to send */ },
  headers: {
      'Content-Type': 'application/json',
  }
})

export const api = axios.create({
  baseURL: 'https://rocketnotes-api-lfzv.onrender.com'
})
