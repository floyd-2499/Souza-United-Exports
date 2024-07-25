
import LayoutMain from "../../components/Layout"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import Image from "next/image"

import styles from "./styles.module.scss"
import LogoIcon from "../../assets/Logo-Icon.svg"
import TopProductsMain from "./top-products"
import HeroSectionMain from "./hero-section"

const HomePage = () => {
    return (
        <LayoutMain>
            <div className={styles["home-page-main"]}>
                <div className={styles["hero-section"]}>
                    <HeroSectionMain />
                </div>
                <div className={styles["details-section"]}>
                    <div className={styles["details-section-container"]}>
                        <div className={styles["image-area"]}>
                            <Image src={LogoIcon} alt="Logo Souza United Export" width={100} height={100} />
                        </div>
                        <div className={styles["details-area"]}>
                            <div className={styles["details-area-content"]}>
                                Welcome to Souza United Exports, your premier destination for exquisite granite exports. Nestled in the picturesque town of Karkala, amidst the lush greenery of the Western Ghats in India, we offer a curated selection of the finest quality granites. Established in 2023, our journey began with a vision to bring the timeless beauty of natural stone to the world. We specialize in premium granite slabs, sourced both from our own quarry and trusted partners, ensuring a diverse range of options to suit your needs.                            </div>
                            <div className={styles["details-area-content"]}>
                                Our commitment to craftsmanship and sustainability means that each product, from elegant benches to durable footpaths and majestic monument bases, is meticulously crafted to enhance your architectural projects. Discover the beauty, durability, and versatility of our granites, and elevate your designs to new heights of sophistication.
                            </div>
                            <div className={styles["redirect-button"]}>
                                Read more <div className={styles["button-icon"]}><HiOutlineArrowNarrowRight /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles["top-products-section"]}>
                    <div className={styles["products-container"]}>
                        <div className={styles["products-card"]}>
                            <TopProductsMain />
                        </div>
                    </div>
                </div>
                <div className={styles["connect-section"]}></div>
                <div className={styles["maps-section"]}></div>
            </div>
        </LayoutMain>
    )
}

export default HomePage