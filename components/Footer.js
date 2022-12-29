import Image from "next/image";
import React from "react";
import styles from "../styles/Footer.module.scss";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerSM}>
                <span className={styles.spanSM}>Social Media:</span>
                <div className={styles.containerSM}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-codepen" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 15l9 6l9 -6l-9 -6l-9 6" />
                        <path d="M3 9l9 6l9 -6l-9 -6l-9 6" />
                        <line x1="3" y1="9" x2="3" y2="15" />
                        <line x1="21" y1="9" x2="21" y2="15" />
                        <line x1="12" y1="3" x2="12" y2="9" />
                        <line x1="12" y1="15" x2="12" y2="21" />
                    </svg>
                    <a href="https://www.codewars.com/users/maidedhp">
                        <figure className={styles.figureCodepen}>
                            <Image src="/codewar.svg" height="50" width="50" alt='Mi codewar' />
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
