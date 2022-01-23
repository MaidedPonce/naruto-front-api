import React from 'react';

const Search = ({result, handleOnchange}) => {
    return (
        <div>
            <input value={result} onChange={handleOnchange} />
        </div>);
};

export default Search;
