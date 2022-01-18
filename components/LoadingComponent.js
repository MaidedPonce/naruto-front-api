import React, { useContext } from "react";
import Image from "next/image";
import styles from "../styles/lazyload.module.css";
import lazyLoad from "./LazyLoad";

const LoadingComponent = () => {
     const { loading } = lazyLoad()
    /* const loading = useContext(loadingContext); */
    /*  : `${styles.modalOf}` */
    return (
        <div
            className={`${styles.modalActive}`}
        >
            <Image src="/kuramaXnaruto.gif" height="100" width="100" />
        </div>
    );
};

export default LoadingComponent;
