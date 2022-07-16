import React from 'react'
import styles from "../../styles/Home.module.css";

const LazyLoadingCard = () => {
  return (
    <div className={styles.sectionDivLoading}>
        <div className={styles.loader}></div>
    </div>
  )
}

export default LazyLoadingCard