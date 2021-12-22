import React, { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import Character from "../components/Character.js"


export const getServerSideProps = async () => {
    const response = await fetch("https://localhost:3000/api/avo");
    const { data: productList } = await response.json();
    return {
        props: {
            productList,
        },
    };
};

const Home = ({ productList }) => {
    return (
        <Character productList={productList} />
    );
};

export default Home;
