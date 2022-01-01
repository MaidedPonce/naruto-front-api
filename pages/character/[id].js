import React from "react";
import { useRouter } from "next/router";
import Product from "../../containers/Product";

export const getStaticPaths = async () => {
    const response = await fetch(
        `https://naruto-front-api-git-master-maidedponce.vercel.app/api/avo/`
    );
    const { data: productList } = await response.json();

    const paths = productList.map((item) => ({
        params: {
            id: item.id,
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
    const chery  = await response.json();

    return {
        props: {
            chery,
        },
    };
};

const ProductItem = ({ chery }) => {
    //  const router = useRouter()
    //  const { query: {id} } = useRouter()

    return <Product chery={chery} />;
};

export default ProductItem;
