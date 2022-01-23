import React from 'react';
import styles from "../styles/alreadyExists.module.css"

const AlreadyExists = ({ exists }) => {
    return (
        <div className={exists === false ? `${styles.alertHide}` : `${styles.alertShow}`}>
            <p>
                Ese personaje ya lo tienes guardado en favoritos
            </p>
        </div>);
};

export default AlreadyExists;
