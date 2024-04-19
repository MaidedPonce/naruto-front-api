import { QueryClient } from '@tanstack/react-query'
import { charactersApi } from '../api/productsApi'

const getServiceCharacter = async () => {
  const queryClient = new QueryClient()
  const data = await queryClient.fetchQuery({
    queryKey: ['characters'],
    queryFn: getCharacters
  })
  return data
}

const getCharacters = async () => {
  const response = await charactersApi.get('/')
  return response
}

export { getCharacters, getServiceCharacter }
