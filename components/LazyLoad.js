import React, { useState, useEffect } from "react";
import styles from "../styles/lazyload.module.css";

function lazyLoad() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);
    
    return {
        loading,
    };
}

export default lazyLoad;
