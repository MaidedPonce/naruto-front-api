import React, { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

export const getServerSideProps = async (p) => {
    const res = await fetch("/api/avo");
    const { data } = await res.json();
    return {
        props: {
            productList: data,
        },
    };
};

const Home = ({ productList }) => {
    return (
        <section className={styles.section}>
            {productList.map((item) => (
                <Link href={`character/${item.id}`}>
                    <div className={styles.card} key={item.id}>
                        <figure className={styles.figure}>
                            <Image width="190" height="190" src={item.image} />
                        </figure>
                        <div className={styles.details}>
                            <span>{item.name}</span>
                            <span>
                                <b>{item.last}</b>
                            </span>
                            <span>{item.aldea}</span>
                        </div>
                    </div>
                </Link>
            ))}
        </section>
    );
};

export default Home;
