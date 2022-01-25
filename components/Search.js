import React from 'react';
import styles from "../styles/Search.module.css";

const Search = ({result, handleOnchange}) => {
    return (
        <div className={styles.searchContainer}>
            <input className={styles.search} value={result} onChange={handleOnchange} />
        </div>);
};

export default Search;
