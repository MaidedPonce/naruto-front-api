import React from 'react'
import { useRouter } from 'next/router'
import Product from '../../containers/Product'
import LoadingComponent from '../../components/LoadingComponent'
import { getServiceCharacter, getServiceCharacterById } from '../../services'
//`https://naruto-front-api-git-master-maidedponce.vercel.app/api/avo/`

export const getStaticPaths = async () => {
  const response = await getServiceCharacter()
  const { data: characterList } = response

  const paths = await characterList?.data.map((character) => ({
    params: {
      id: character.id
    }
  }))
  return {
    paths,
    fallback: true
  }
}

export const getStaticProps = async ({ params }) => {
  /*  const response = await fetch(
        `https://naruto-front-api-git-master-maidedponce.vercel.app/api/avo/${params.id}`
    ); */
  const dataCharacter = await getServiceCharacterById({ id: params.id })
  return {
    props: {
      dataCharacter: dataCharacter.data
    }
  }
}

const ProductItem = ({ dataCharacter }) => {
  const router = useRouter()
  if (router.isFallback) {
    return <LoadingComponent />
  } else {
    return <Product dataCharacter={dataCharacter} />
  }
}

export default ProductItem
