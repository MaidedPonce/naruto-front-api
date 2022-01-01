import React, { useContext } from "react";
import Image from "next/image";
import styles from "../styles/lazyload.module.css";
import lazyLoad from "./LazyLoad";

const LoadingComponent = () => {
     const { loading } = lazyLoad()
    /* const loading = useContext(loadingContext); */
    return (
        <div
            className={loading ? `${styles.modalActive}` : `${styles.modalOf}`}
        >
            <Image src="/kuramaXnaruto.gif" height="100" width="100" />
        </div>
    );
};

export default LoadingComponent;
