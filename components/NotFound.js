import React from "react";
import Image from "next/image";
import styles from "../styles/NotFound.module.css";
import lazyLoad from "./LazyLoad";
import LoadingComponent from "./LoadingComponent";

const NotFound = () => {
    const { loading } = lazyLoad();
    return (
        <>
            {loading ? (
                <LoadingComponent />
            ) : (
                <div className={styles.notCont}>
                    <div className={styles.titlesCont}>
                        <h1 className={styles.four}>
                            <b>404</b>
                        </h1>
                        <h3 className={styles.lost}>
                            ¿¡Acaso te has perdido por el sendero de la vida!?
                        </h3>
                    </div>
                    <Image className={styles.imgNaruto} src="/Naruto.png" height="400" width="300" />
                </div>
            )}
        </>
    );
};

export default NotFound;
