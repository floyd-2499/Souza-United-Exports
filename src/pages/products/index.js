import { useEffect, useState } from "react";
import { Select } from "antd";

import styles from "./styles.module.scss"
import LayoutMain from "@/components/Layout";
import productsList from "@/library/products";

const ProductsMain = () => {
    const [selectedFilter, setSelectedFilter] = useState(null)
    const [itemsList, setItemsList] = useState([])
    const [filters, setFilters] = useState([])
    const [categories, setCategories] = useState({
        Color: [],
        Demand: [],
        Price: [],
        Type: [],
        Scale: [],
        Thickness: [],
        Description: []
    });

    const handleFilterSelect = (e) => {
        setSelectedFilter(e)
    }

    useEffect(() => {
        const uniqueColors = [...new Set(productsList.map(product => product.category.color))];
        const uniqueDemands = [...new Set(productsList.map(product => product.category.demand))];
        const uniquePrices = [...new Set(productsList.map(product => product.pricing.current))];
        const uniqueTypes = [...new Set(productsList.flatMap(product => product.mesurement.map(m => m.type)))];
        const uniqueScales = [...new Set(productsList.flatMap(product => product.mesurement.map(m => m.scale)))];
        const uniqueThicknesses = [...new Set(productsList.flatMap(product => product.mesurement.map(m => m.thickness)))];
        const uniqueDescriptions = [...new Set(productsList.flatMap(product => product.mesurement.map(m => m.description)))];

        setCategories({
            Color: uniqueColors,
            Demand: uniqueDemands,
            Price: uniquePrices,
            Type: uniqueTypes,
            Scale: uniqueScales,
            Thickness: uniqueThicknesses,
            Description: uniqueDescriptions
        });
    }, [setCategories]);

    useEffect(() => {
        const structuredFilters = Object.keys(categories).map(key => ({
            label: key,
            value: key
        }));

        console.log(structuredFilters);
        setFilters(structuredFilters);
    }, [categories, setFilters])

    useEffect(() => {
        if (selectedFilter) {
            setItemsList(categories[selectedFilter])
        }
    }, [selectedFilter])

    console.log(itemsList);

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
                            />
                        </div>
                    </div>
                    <div className={styles["filter-items-list"]}>
                        {itemsList?.map((item) => item)}
                    </div>
                </div>
            </div>
        </LayoutMain>
    )
}

export default ProductsMain