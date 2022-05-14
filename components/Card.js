import React from 'react'
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";


const Card = ({ item, handleExistCharacter }) => {


    if (typeof window !== 'undefined') {
        const root = document.getElementById("root")

        const config = {
            root: root,
            rootMargin: '0px',
            threshold: '0.5',
        }

        const observer = new IntersectionObserver(function (entries) {
            //console.log("Entries:", entries)
            entries.forEach(entry => {
                if(entry.isIntersecting == true){
                    console.log(target)
                }
            })
        }, config)
        
        const target = document.getElementById("card")
        observer.observe(target)
    }

    return (
        <div id="card" className={styles.sectionDiv}>
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
}

export default Card