import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../styles/Nav.module.css";
import Image from "next/image";

const Navbar = () => {
    return (
        <header className={styles.nav}>
          <figure className={styles.figureNav}>
              <Image width="80" height="50" src="/naruto.png" />
          </figure>
        </header>
    );
};

export default Navbar;
