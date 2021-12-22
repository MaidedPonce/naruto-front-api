import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerSM}>
                <span className={styles.spanSM}>Social Media:</span>
                <div className={styles.containerSM}>
                    <a href="https://codepen.io/maidedhp">
                        <figure className={styles.figureCodepen}>
                            <img src="/codepen.jpg"></img>
                        </figure>
                    </a>
                    <a href="https://www.codewars.com/users/maidedhp">
                        <figure className={styles.figureCodepen}>
                            <img src="/codewar.svg"></img>
                        </figure>
                    </a>
                </div>
            </div>
            <span className={styles.spanDerec}>Fuentes: WikiFandom</span>
            <span className={styles.spanDerec}>Todos los derechos reservados</span>
        </footer>
    );
};

export default Footer;
