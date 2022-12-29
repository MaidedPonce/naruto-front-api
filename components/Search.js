import React from 'react';
import styles from "../styles/Search.module.scss";

const Search = ({result, handleOnchange}) => {
    return (
        <div className={styles.searchContainer}>
            <input className={styles.search} placeholder='Buscar...' value={result} onChange={handleOnchange} />
        </div>);
};

export default Search;
