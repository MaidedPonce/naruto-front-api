import React, { useState, useEffect } from "react";

function LazyLoad() {
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

export default LazyLoad;
