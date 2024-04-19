import React from 'react'
import Home from '../containers/Home'
import { getServiceCharacter } from '../services'

export const getStaticProps = async () => {

  return {
    props: {
      dataCharacters: characters?.data?.data
    }
  }
}
const PrincipalPage = ({ dataCharacters }) => {  
  return <Home dataCharacters={dataCharacters} />
}

export default PrincipalPage
