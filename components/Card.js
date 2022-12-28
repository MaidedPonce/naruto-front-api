import React, { useLayoutEffect, useState } from 'react'
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import LazyLoadingCard from './LazyLoadings/LazyLoadingCard';


const Card = ({ item, handleExistCharacter }) => {

    const [isIntersectingCharacter, setIsIntersecting] = useState(false)

    useLayoutEffect(() => {

        const config = {
            root: null,
            rootMargin: '0px',
            threshold: '0.3',
        }

        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting == true) {
                    setIsIntersecting(true)
                }
            })
        }, config)
        const target = document.getElementById(item.id)
        observer.observe(target)


    }, [])


    return (

        <div id={item.id} className={styles.sectionDiv}>
            {
                isIntersectingCharacter === true ? (
                    <>
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
                        <img className={styles.card} alt={item.name} src={isIntersectingCharacter == true && item.image} />
                    </>
                ) : <LazyLoadingCard />
            }

        </div>
    )
}

export default Card