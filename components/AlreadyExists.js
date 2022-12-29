import Image from 'next/image';
import React from 'react';
import styles from "@styles/AlreadyExists.module.scss"

const AlreadyExists = ({ exists, setExists }) => {
    return (
        <div className={exists === false ? `${styles.alertHide}` : `${styles.alertShow}`}>
            <p className={styles.text}>
                Ese personaje ya lo tienes guardado en favoritos
            </p>
            <figure onClick={() => setExists(false)} className={styles.figure}>
                <Image src="/equis.png" height="30" width="30" alt='Botón para cerrar alerta' />
            </figure>
        </div>);
};

export default AlreadyExists;
