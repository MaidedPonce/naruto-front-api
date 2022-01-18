import React, { useState, useReducer } from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import lazyLoad from "../components/LazyLoad";
import loadingContext from "../context/loadingContext";
import LoadingComponent from "../components/LoadingComponent";
import { add_favorite } from "../redux/actions";

const INIT_STATE = {
    favorites: []
}


const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "ADD_FAVORITE":
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
            break;
        default:
            return state

    }
}

const Home = ({ dataCharacters }) => {

    const [saveFavorite, setSaveFavorite] = useReducer(reducer, INIT_STATE)
    const { loading } = lazyLoad();

    const handleFavorite = (favorite) => {
        setSaveFavorite({ type: "ADD_FAVORITE", payload: favorite })
    }

    console.log(saveFavorite)

    return (
        <>
            {loading ? (
                <LoadingComponent />
            ) : (
                <section className={styles.section}>
                    {dataCharacters.map((item) => (
                        <div className={styles.sectionDiv}>
                            <div className={styles.characterData}>
                                <div className={styles.name}>
                                    <span>{item.name}</span>
                                    <span><b>{item.last}</b></span>
                                </div>
                                <div className={styles.seeContainer}>

                                    <Link href={`character/${item.id}`}>
                                        <span className={styles.seeMore}>
                                            Ver más...
                                        </span>
                                    </Link>
                                </div>
                            </div>
                            <img className={styles.card} src={item.image} />


                        </div>
                    ))}
                </section>
            )}
        </>
    );
};

export default Home;
