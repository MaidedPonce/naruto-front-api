import React, { useState } from "react";
import styles from "../styles/Nav.module.scss";
import Image from "next/image";

const Navbar = () => {
    const [favorites, setFavorites] = useState([])

    const showFavorite = () => {
        const getFavorites = localStorage.getItem('save_favorite_character')
        if (getFavorites === null) {
            <p>Aquí no hay nada</p>
        } else {
            const getParseFavorites = JSON.parse(getFavorites)
            setFavorites(getParseFavorites)
        }

    }

    /*  useEffect(() => {
         showFavorite()
     }, [favorites])
  */
    return (
        <header className={styles.nav}>
            <div>
                <input onChange={showFavorite} type="checkbox" className={styles.inputCheck} />
                    <Image width="35" height="50" src="/menuFavorites.png" />
                <div className={styles.divMenu}>
                    <figure className={styles.figure} >
                        <Image src="/equis.png" height="30" width="30" />
                    </figure>
                    

                    <div className={styles.character}>
                        {
                            favorites === false ? "Cargando..." :
                                favorites.map(i =>
                                    <div key={i} className={styles.containerFav}>
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
