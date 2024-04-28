import { QueryClient } from '@tanstack/react-query'
import { charactersApi } from '../api/productsApi'

const getServiceCharacterById = async ({ id }) => {
  const queryClient = new QueryClient()
  const data = await queryClient.fetchQuery({
    queryKey: ['character', id],
    queryFn: () => getCharacterById(id)
  })
  return data
}

const getCharacterById = async (id) => {
  const response = await charactersApi.get(`/${id}`)
  return response
}

export { getCharacterById, getServiceCharacterById }
