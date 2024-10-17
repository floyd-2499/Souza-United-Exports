import { useRouter } from 'next/router';
import Image from "next/image";
import { useEffect, useState } from "react";
import Select from "react-select"

import styles from "./styles.module.scss"
import LayoutMain from "@/components/Layout";
import productsList from "@/library/products";

const ProductsMain = () => {
    const [itemsList, setItemsList] = useState([])
    const [filters, setFilters] = useState([])
    const [selectedFilter, setSelectedFilter] = useState(null)
    const [selectdFilterValue, setSelectedFilterValue] = useState("")
    const [filteredProducts, setFilteredProducts] = useState([])
    const [categories, setCategories] = useState({
        Color: [],
        Demand: [],
        Price: [],
        Type: [],
        Scale: [],
        Thickness: [],
        Description: []
    });

    const router = useRouter();

    const handleFilterSelect = (e) => {
        setSelectedFilter(e)
        setSelectedFilterValue("")
    }

    const handleSelectFilterValue = (e) => {
        setSelectedFilterValue(e)
    }

    const handleRedirect = ({ id }) => {
        router.push(`/products/${id}`);
    };

    useEffect(() => {
        const uniqueColors = [...new Set(productsList.map(product => product.category.color))];
        const uniqueDemands = [...new Set(productsList.map(product => product.category.demand))];
        const uniquePrices = [...new Set(productsList.map(product => product.pricing.current))];

        setCategories({
            Color: uniqueColors,
            Demand: uniqueDemands,
            Price: uniquePrices,
        });
    }, [setCategories]);

    useEffect(() => {
        const structuredFilters = Object.keys(categories).map(key => ({
            label: key,
            value: key
        }));

        setFilters(structuredFilters);
    }, [categories, setFilters])

    useEffect(() => {
        if (selectedFilter) {
            setItemsList(categories[selectedFilter?.value])
        } else {
            setItemsList([])
        }
    }, [selectedFilter])

    useEffect(() => {
        if (selectdFilterValue) {
            const products = productsList?.filter((item) =>
                (item?.category[selectedFilter?.value?.toLowerCase()] === selectdFilterValue) || (item?.pricing?.current === selectdFilterValue)
            )

            setFilteredProducts(products);
        } else {
            setFilteredProducts(productsList)
        }
    }, [selectdFilterValue])

    return (
        <LayoutMain>
            <div className={styles["products-page-main"]}>
                <div className={styles["products-filters"]}>
                    <div className={styles["filter-container"]}>
                        <div className={styles['filter-label']}>Select Filter</div>
                        <div className={styles['filter-dropdown']}>
                            <Select
                                className={styles["filter-select"]}
                                options={filters}
                                value={selectedFilter}
                                onChange={(e) => handleFilterSelect(e)}
                                placeholder="Filter By"
                                isClearable
                            />
                        </div>
                    </div>
                    <div className={styles["filter-items-list"]}>
                        {itemsList?.map((item, index) => {
                            return (
                                <div className={styles["filter-item"]} key={index} onClick={() => handleSelectFilterValue(item)}>{item}</div>
                            )
                        })}
                    </div>
                </div>
                <div className={styles["products-list"]}>
                    {filteredProducts?.map((item) => {
                        return (
                            <div className={styles["product-card"]} key={item.id}>
                                <div className={styles["product-card-contents"]}>
                                    <div className={styles["product-image"]}>
                                        <Image alt={item.name} src={item?.image} width={1400} height={1400} />
                                    </div>
                                    <div className={styles["product-details"]}>
                                        <div className={styles["product-name"]}>{item?.name}</div>
                                        <div className={styles["product-description"]}>{item?.description}</div>
                                    </div>
                                </div>
                                <div className={styles["product-detail-button"]} onClick={() => handleRedirect({ id: item?.name })}>View Details {">>"}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </LayoutMain>
    )
}

export default ProductsMain