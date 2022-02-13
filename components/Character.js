import React, { useEffect } from 'react';
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import useLazy from "../hooks/useLazy";

const Character = ({ item, handleExistCharacter }) => {

    return (
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
    )
};

export default Character;
