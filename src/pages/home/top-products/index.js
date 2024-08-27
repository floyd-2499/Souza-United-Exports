import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import Link from "next/link";

import styles from "./styles.module.scss";
import productsList from "../../../library/products";
import Image from "next/image";

const TopProductsMain = () => {
    const [topProducts, setTopProducts] = useState([]);

    const router = useRouter();

    const handleRedirect = ({ id }) => {
        router.push(`/products/${id}`);
    };

    useEffect(() => {
        const topList = productsList?.filter((item) => item?.category?.demand === 5);
        setTopProducts(topList);
    }, []);

    return (
        <div className={styles["top-products-contents"]}>
            <div className={styles["products-header-container"]}>
                <div className={styles["section-title"]}>TOP PRODUCTS</div>
                <Link href={"/products"} className={styles["section-redirection-button"]}>View all products</Link>
            </div>
            <div className={styles["animation-container"]}>
                <div className={styles["cards-container"]} id="cardsContainer">
                    {topProducts.map((item, index) => (
                        <div className={styles["card"]} key={index} onClick={() => handleRedirect({ id: item?.name })}>
                            <div className={styles["image-section"]}><Image alt={item.name} src={item?.image} width={250} height={250} /></div>
                            <div className={styles["description-section"]}>
                                <div className={styles["product-name"]}>
                                    {item.name}
                                </div>
                                <div className={styles["view-details-button"]}>
                                    View Details
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopProductsMain;
