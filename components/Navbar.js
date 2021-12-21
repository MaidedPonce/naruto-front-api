import React from "react";
import Link from "next/link";
import styles from "../styles/Nav.module.css";
import Image from "next/image";

const Navbar = () => {
    return (
        <header className={styles.nav}>
          <span>API - Naruto</span>  
          <figure className={styles.figureNav}>
              <Image width="80" height="50" src="/naruto.png" />
          </figure>
        </header>
    );
};

export default Navbar;
