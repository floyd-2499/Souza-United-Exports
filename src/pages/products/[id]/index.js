import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import styles from "./styles.module.scss"
import LayoutMain from '@/components/Layout';
import productsList from '@/library/products';
import Image from 'next/image';

const ProductDetails = () => {
    const [relatedProducts, setRelatedProducts] = useState([])

    const router = useRouter();
    const { id: productName } = router.query;

    const product = productsList?.find(item => item?.name === productName)

    console.log(product);

    useEffect(() => {
        setRelatedProducts([])
    }, [])

    return (
        <LayoutMain>
            <div className={styles["details-page"]}>
                <div className={styles["product-details"]}>
                    <div className={styles["images-section"]}>
                        <div className={styles["master-image"]}>
                            <Image alt={product?.name} src={product?.image} width={400} height={400} />
                        </div>
                    </div>
                    <div className={styles["details-section"]}>
                        <div className={styles["basic-details-section"]}>
                            <div className={styles["product-name"]}>{product?.name}</div>
                            <div className={styles["price-section"]}>
                                <div className={styles["currency"]}>Rs</div>
                                <div className={styles["actual-price"]}>{product?.pricing?.actual}</div>
                                <div className={styles["current-price"]}>{product?.pricing?.current}/-</div>
                                <div className={styles["price-description"]}>{product?.pricing?.description}</div>
                            </div>
                            <div className={styles["description-section"]}>{product?.description}</div>
                        </div>
                        <div className={styles["product-usage-section"]}>
                            <div className={styles["usage-card"]}>
                                <div className={styles["usage-image"]}></div>
                                <div className={styles["usage-description"]}></div>
                            </div>
                        </div>
                        <div className={styles["product-stat-section"]}>
                            <div className={styles["section-head"]}>Available sizes</div>
                            <div className={styles["size-section"]}>
                                <div className={styles["size-number"]}></div>
                                <div className={styles["size-description"]}></div>
                                <div className={styles["size-thickness"]}></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className={styles["related-products-section"]}>
                    <div className={styles["related-product-card"]}>
                        <div className={styles["related-product-image"]}></div>
                        <div className={styles["related-product-name"]}></div>
                        <div className={styles["related-product-button"]}>View details</div>
                    </div>
                </div> */}
            </div>
        </LayoutMain>
    )
}

export default ProductDetails