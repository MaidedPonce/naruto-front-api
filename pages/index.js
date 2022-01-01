import React, { useState, useEffect } from "react";
import Character from "../components/Character";

export const getStaticProps = async () => {
    const response = await fetch("https://naruto-front-api-git-master-maidedponce.vercel.app/api/avo");
    const { data: productList } = await response.json();
    return {
        props: {
            productList,
        },
    };
};
const PrincipalPage = ({productList}) => {
    
    return (
        <Character productList={productList} />
    )
}

export default PrincipalPage;