import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/Product.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import lazyLoad from "../components/LazyLoad";
import LoadingComponent from "../components/LoadingComponent";

const Product = ({ dataCharacter }) => {
    const { loading } = lazyLoad();

    /* const observer = new IntersectionObserver(entries => {

    }) */
    return (
        <>
            {loading ? (
                <LoadingComponent />
            ) : (
                <section>
                    <div className={styles.divCont} key={dataCharacter.id}>
                        <figure className={styles.figureCharac}>
                            <Image
                                width="190"
                                height="190"
                                src={dataCharacter.image || "/naruto.jpg"}
                            />
                        </figure>
                        <div className={styles.detailsCharact}>
                            <span>
                                <b>Nombre:</b> {dataCharacter.name}{" "}
                                {dataCharacter.last}
                            </span>
                            <span>
                                <b>Aldea:</b> {dataCharacter.aldea}
                            </span>
                            <span>
                                <b>Nacimiento:</b> {dataCharacter.nacimiento}
                            </span>
                            <span>
                                <b>Clan:</b> {dataCharacter.clan}
                            </span>
                            <span>
                                <b>Habilidades:</b> {dataCharacter.habilidad}
                            </span>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default Product;
