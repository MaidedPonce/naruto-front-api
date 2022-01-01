import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import fetch from "isomorphic-unfetch";

export const getStaticPaths = async () => {
    const response = await fetch(
        "https://naruto-front-api-git-master-maidedponce.vercel.app/api/avo"
    );
    const { data: productList } = await response.json();

    const paths = productList.map((cha) => ({
        params: {
            id: cha.id,
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
    const { data: chery } = await response.json();
    return {
        props: {
            chery,
        },
    };
};

const Product = ({ chery }) => {
    
    console.log({chery})
    return (
        <section>
            <div className={styles.card} key={chery.id}>
                <figure className={styles.figure}>
                    <Image
                        width="190"
                        height="190"
                        src={chery.image || "/naruto.jpg"}
                    />
                </figure>
                <div className={styles.details}>
                    <span>{chery.name}</span>
                    <span>
                        <b>{chery.last}</b>
                    </span>
                    <span>{chery.aldea}</span>
                </div>
            </div>
        </section>
    );
};

export default Product;
