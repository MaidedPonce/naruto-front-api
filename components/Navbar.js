import React from "react";
import Link from "next/link";
import styles from "../styles/Nav.module.css";
import Image from "next/image";

const Navbar = () => {
    return (
        <header className={styles.nav}>
          <input className={styles.input} placeholder="Buscar..." /> 
          <figure className={styles.figureNav}>
              <Image width="80" height="50" src="/naruto.png" />
          </figure>
        </header>
    );
};

export default Navbar;
