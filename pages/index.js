import React from 'react'
import Home from '../containers/Home'
import { getServiceCharacter } from '../services'

export const getStaticProps = async () => {
  // const characters = await getServiceCharacter()
  const characters = await fetch(
    `https://naruto-front-api-git-master-maidedponce.vercel.app/api/avo`
  ).then((r) => r)
  console.log( characters.status)
  return {
    props: {
      dataCharacters: []
    }
  }
}
const PrincipalPage = ({ dataCharacters }) => {  
  return <Home dataCharacters={dataCharacters} />
}

export default PrincipalPage
