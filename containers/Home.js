import React, { useState, useEffect, useContext } from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import lazyLoad from "../components/LazyLoad";
import loadingContext from "../context/loadingContext";
import LoadingComponent from "../components/LoadingComponent";

const Home = ({ dataCharacters }) => {
    const { loading } = lazyLoad();

    return (
        <>
            {loading ? (
                <LoadingComponent />
            ) : (
                <section className={styles.section}>
                    {dataCharacters.map((item) => (
                        <div className={styles.sectionDiv}>
                            <div className={styles.card} key={item.id}>
                                <div className={styles.cardC}>
                                    <figure className={styles.figure}>
                                        <Image
                                            width="190"
                                            height="190"
                                            src={item.image}
                                        />
                                    </figure>
                                    <div className={styles.details}>
                                        <span>{item.name}</span>
                                        <span>
                                            <b>{item.last}</b>
                                        </span>
                                        <span>{item.aldea}</span>
                                    </div>
                                </div>
                                <div className={styles.cardBack}>
                                    <div className={styles.cardBackItem}>
                                        <div className={styles.logob}>
                                            <Image
                                                width="90"
                                                height="90"
                                                src={item.logo}
                                            />
                                        </div>
                                    </div>
                                    <Link href={`character/${item.id}`}>
                                        <span className={styles.seeMore}>
                                            Ver más...
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            )}
        </>
    );
};

export default Home;
