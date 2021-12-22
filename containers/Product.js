import React, { useEffect, useState } from "react";
import styles from "../styles/Product.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

const Product = () => {
    const [product, setProduct] = useState({});
    const {
        query: { id },
    } = useRouter();

    useEffect(() => {
        window
            .fetch(`/api/avo/${id}`)
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, [id]);

    return (
        <section>
            <div className={styles.divCont} key={product.id}>
                <figure className={styles.figureCharac}>
                    <Image
                        width="190"
                        height="190"
                        src={product.image || "/naruto.jpg"}
                    />
                </figure>
                <div className={styles.detailsCharact}>
                    <span>
                       <b>Nombre:</b> {product.name} {product.last}
                    </span>
                    <span><b>Aldea:</b> {product.aldea}</span>
                    <span><b>Nacimiento:</b> {product.nacimiento}</span>
                    <span><b>Clan:</b> {product.clan}</span>
                    <span><b>Habilidades:</b> {product.habilidad}</span>

                </div>
            </div>
        </section>
    );
};

export default Product;
