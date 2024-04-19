import React from 'react'
import Home from '../containers/Home'
import { getServiceCharacter } from '../services'

export const getStaticProps = async () => {
  const queryClient = await getServiceCharacter()

  return {
    props: {
      dataCharacters: queryClient?.data?.data
    }
  }
}
const PrincipalPage = ({ dataCharacters }) => {  
  return <Home dataCharacters={dataCharacters} />
}

export default PrincipalPage
