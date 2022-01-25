import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../styles/Nav.module.css";
import Image from "next/image";

const Navbar = () => {
    const [favorites, setFavorites] = useState()

    const showFavorite = () => {
        const getFavorites = localStorage.getItem('save_favorite_character')
        const getParseFavorites = JSON.parse(getFavorites)
        setFavorites(getParseFavorites)
    }

    useEffect(() => {
        showFavorite()
    }, [])
    console.log(favorites)
    return (
        <header className={styles.nav}>
            <div>
                <input type="checkbox" className={styles.inputCheck} />
                <figure className={styles.figureMenu}>
                    <Image width="35" height="50" src="/menuFavorites.png" />
                </figure>

                <div className={styles.divMenu}>

                    <figure className={styles.figure}>
                        <Image src="/equis.png" height="30" width="30" />
                    </figure>

                    <div className={styles.character}>
                        {
                            favorites === false ? "Cargando..." :
                                favorites.map(i =>
                                    <div className={styles.containerFav}>

                                        <img className={styles.imagen} src={i.image} />
                                        <p className={styles.nombre}>{i.name}</p>

                                    </div>)
                        }
                    </div>
                </div>
            </div>
            <figure className={styles.figureNav}>
                <Image width="80" height="50" src="/naruto.png" />
            </figure>
        </header>
    );
};

export default Navbar;
