import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import productsList from "../../../library/products";
import Link from "next/link";

const TopProductsMain = () => {
    const [topProducts, setTopProducts] = useState([]);

    console.log(productsList);


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
                        <div className={styles["card"]} key={index}>
                            <div className={styles["image-section"]}>image</div>
                            <div className={styles["description-section"]}>
                                <div className={styles["product-name"]}>
                                    {item.name}
                                </div>
                            </div>
                            <div className={styles["view-details-button"]}>
                                View Details
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopProductsMain;
