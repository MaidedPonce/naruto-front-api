import axios from 'axios'

const charactersApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_DEV
})

export { charactersApi }
