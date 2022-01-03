import React from "react";
import Home from "../containers/Home";

export const getStaticProps = async () => {
    const response = await fetch(
        `https://naruto-front-api-git-master-maidedponce.vercel.app/api/avo`
    );

    const { data: dataCharacters } = await response.json();

    return {
        props: {
            dataCharacters,
        },
    };
};
const PrincipalPage = ({ dataCharacters }) => {
    return <Home dataCharacters={dataCharacters} />;
};

export default PrincipalPage;
