import React, { useState } from "react";
import lazyLoad from "../components/LazyLoad";
import LoadingComponent from "../components/LoadingComponent";
import Search from "../components/Search";
import AlreadyExists from "../components/AlreadyExists";
import Character from "../components/Character";
import styles from "../styles/Home.module.css";
import useLazy from "../hooks/useLazy";

const INIT_STATE = {
    favorites: [],
}

const Home = ({ dataCharacters }) => {
    

    const [result, setResult] = useState("");
    const [exists, setExists] = useState(false)
    const handleOnchange = (event) => {
        setResult(event.target.value)
    }
    const { loading } = lazyLoad();

    const handleAddFavorite = (character) => {
        let islocalStorage = localStorage.getItem("save_favorite_character")
        let parsedItem;

        if (!islocalStorage) {
            localStorage.setItem("save_favorite_character", JSON.stringify(INIT_STATE.favorites))
            parsedItem = character
            saveCharacter(character)
        } else {
            saveCharacter(character)
        }
    }

    const saveCharacter = (character) => {
        let islocalStorage = localStorage.getItem("save_favorite_character")
        const parsedItem = JSON.parse(islocalStorage)
        let newCharacter = { ...character }
        parsedItem.push(newCharacter)
        localStorage.setItem('save_favorite_character', JSON.stringify(parsedItem))
        
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
                            <Character key={item.id} item={item} handleExistCharacter={handleExistCharacter} />
                        ))}
                    </section>
                </>
            )}
            <AlreadyExists exists={exists} setExists={setExists} />
        </>
    );
};

export default Home;
