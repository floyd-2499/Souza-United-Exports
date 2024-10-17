import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import styles from "./styles.module.scss"
import LayoutMain from '@/components/Layout';
import productsList from '@/library/products';
import Image from 'next/image';
import useCasesData from '@/library/useCase';

const ProductDetails = () => {
    const [relatedProducts, setRelatedProducts] = useState([])
    const [usageDetails, setUsageDetails] = useState([])

    const router = useRouter();
    const { id: productName } = router.query;

    const product = productsList?.find(item => item?.name === productName)


    useEffect(() => {
        const filteredObjects = useCasesData.filter(item => product?.usage?.includes(item.identifier));

        setUsageDetails(filteredObjects)
    }, [])

    return (
        <LayoutMain>
            <div className={styles["details-page"]}>
                <div className={styles["product-details"]}>
                    <div className={styles["images-section"]}>
                        <div className={styles["master-image"]}>
                            <Image alt={product?.name} src={product?.image} width={1000} height={1000} />
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

                        {/* Stats */}
                        <div className={styles["product-stat-section"]}>
                            <div className={styles["section-head"]}>Available sizes</div>
                            {!product?.showSizeDetails && (
                                <div className={styles["section-description"]}>
                                    We provide {product?.name?.toLocaleLowerCase()} based on customer requirements.
                                </div>
                            )}
                            {product?.showSizeDetails && (
                                <div className={styles["section-items-table"]}>
                                    {product?.mesurement?.map((item, index) => {
                                        return (
                                            <div className={styles["size-section"]} key={index}>
                                                <div className={styles["size-number"]}>{item?.type}</div>
                                                <div className={styles["size-length"]}>{item?.scale}{" "}{item?.description}</div>
                                                <div className={styles["size-thickness"]}>{item?.thickness}</div>
                                            </div>
                                        )
                                    })}
                                </div>
                            )}
                        </div>

                        {/* Usage */}
                        <div className={styles["product-usage-section"]}>
                            <div className={styles["section-head"]}>Usages</div>
                            <div className={styles["usage-container"]}>
                                {usageDetails?.map(item => {
                                    return (
                                        <div className={styles["usage-card"]} key={item?.id}>
                                            <Image className={styles["usage-image"]} alt={item?.name} src={item?.image} width={60} height={60} />
                                            <div className={styles["usage-description"]}>{item?.name}</div>
                                        </div>
                                    )
                                })}
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