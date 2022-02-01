import React, { useState, useReducer, useEffect } from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import lazyLoad from "../components/LazyLoad";
import loadingContext from "../context/loadingContext";
import LoadingComponent from "../components/LoadingComponent";
import { add_favorite } from "../redux/actions";
import Search from "../components/Search";
import AlreadyExists from "../components/AlreadyExists";

const INIT_STATE = {
    favorites: [],
    isExist: null
}


const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "ADD_FAVORITE":
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        case "ALREADY_FEXIST":
            return {
                ...state,
                favorites: [...state.favorites],
                isExist: true
            }
        default:
            return state

    }
}

const Home = ({ dataCharacters }) => {
    const [result, setResult] = useState("");
    const [saveFavorite, dispatch] = useReducer(reducer, INIT_STATE)
    const [exists, setExists] = useState(false)
    const handleOnchange = (event) => {
        setResult(event.target.value)
    }
    const { loading } = lazyLoad();

    /* const handleAddFavorite = (favorite) => {

        dispatch({ type: "ADD_FAVORITE", payload: favorite })
    } */

    const handleAddFavorite = (character) => {
        let islocalStorage = localStorage.getItem("save_favorite_character")
        let parsedItem;

        if (!islocalStorage) {
            localStorage.setItem("save_favorite_character", JSON.stringify(INIT_STATE.favorites))
            parsedItem = character
        } else {
            parsedItem = JSON.parse(islocalStorage)
            let newCharacter = { ...character }
            parsedItem.push(newCharacter)
            localStorage.setItem('save_favorite_character', JSON.stringify(parsedItem))
            dispatch({ type: "ADD_FAVORITE", payload: character })
        }
    }

    const handleExistCharacter = (character) => {
        let islocalStorage = localStorage.getItem("save_favorite_character")
        const parsedData = JSON.parse(islocalStorage)
        const getCharacterExist = parsedData === null ? <p>No hay personajes</p> : parsedData.filter(item => item.id === character.id);
        if (getCharacterExist.length !== 1) {
            handleAddFavorite(character)
        } else {
            setExists(true)
        }
    }

    const getCharacters = dataCharacters.filter(character => {
        return character.name.toLocaleLowerCase().includes(result.toLocaleLowerCase())
    })


    return (
        <>
            {loading ? (
                <LoadingComponent />
            ) : (
                <>
                    <Search result={result} handleOnchange={handleOnchange} />
                    <section className={styles.section}>
                        {getCharacters.map((item) => (
                            <div className={styles.sectionDiv}>
                                <div className={styles.characterData}>
                                    <div className={styles.name}>
                                        <span>{item.name}</span>
                                        <span><b>{item.last}</b></span>
                                    </div>
                                    <div className={styles.buttonsContainer}>
                                        <div className={styles.seeContainer}>
                                            <Link href={`character/${item.id}`}>
                                                <span className={styles.seeMore}>
                                                    Ver más...
                                                </span>
                                            </Link>
                                        </div>
                                        <figure alt="Añadir" className={styles.figureAdd}>
                                            <Image alt="añadir a favoritos" onClick={() => handleExistCharacter(item)} src="/add.png" width="40" height="40" />
                                        </figure>
                                    </div>
                                </div>
                                <img className={styles.card} alt={item.name} src={item.image} />
                            </div>
                        ))}
                    </section>
                </>
            )}
            <AlreadyExists exists={exists} setExists={setExists} />
        </>
    );
};

export default Home;
