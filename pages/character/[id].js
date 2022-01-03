import React from "react";
import { useRouter } from "next";
import Product from "../../containers/Product";
//`https://naruto-front-api-git-master-maidedponce.vercel.app/api/avo/`

export const getStaticPaths = async () => {
    const response = await fetch(
        `https://naruto-front-api-git-master-maidedponce.vercel.app/api/avo/`
    );
    const { data: characterList } = await response.json();

    const paths = characterList.map((character) => ({
        params: {
            id: character.id,
        },
    }));
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async ({ params }) => {
    const response = await fetch(
        `https://naruto-front-api-git-master-maidedponce.vercel.app/api/avo/${params.id}`
    );

    const dataCharacter = await response.json();

    return {
        props: {
            dataCharacter,
        },
    };
};

const ProductItem = ({ dataCharacter }) => {
    return <Product dataCharacter={dataCharacter} />;
};

export default ProductItem;
