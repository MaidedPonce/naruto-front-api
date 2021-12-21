import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

const Product = () => {
    const [product, setProduct] = useState({});
    const { query: {id} } = useRouter();

    useEffect(() => {
            window
              .fetch(`/api/avo/${id}`)
              .then((res) => res.json())
              .then((data) => setProduct(data))
        }, [id])

    return (
        <section>
            <div className={styles.card} key={product.id}>
                    <figure className={styles.figure}>
                        <Image width="190" height="190" src={product.image || "/naruto.jpg"} />
                    </figure>
                    <div className={styles.details}>
                        <span>{product.name}</span>
                        <span>
                            <b>{product.last}</b>
                        </span>
                        <span>{product.aldea}</span>
                    </div>
                </div>
        </section>
    );
};

export default Product;
