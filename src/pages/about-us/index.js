import Image from "next/image";

import styles from "./styles.module.scss"
import LayoutMain from "@/components/Layout"
import Floyd from "../../assets/Floyd.png";
import Vijesh from "../../assets/Vijesh.png";

const AboutUsPage = () => {
    return (
        <LayoutMain>
            <div className={styles["about-page-main"]}>
                <div className={styles["about-section"]}>
                    <div className={styles["section-title"]}>Who Are We...?</div>
                    <div className={styles["section-details"]}>
                        <div className={styles["section-description"]}>
                            Welcome to Souza United Exports, your premier destination for exquisite granite exports. Nestled in the picturesque town of Karkala, amidst the lush greenery of the Western Ghats in India, our journey began in 2023 with
                            a vision to bring the timeless beauty of natural stone to the world.
                        </div>
                        <div className={styles["section-description"]}>
                            At Souza United Exports, we take pride in offering a curated
                            selection of the finest quality granites sourced directly from our
                            own quarry. With uncompromising dedication to craftsmanship and sustainability, each slab tells a story of nature&apos;s artistry, ready to enhance any architectural masterpiece.
                        </div>
                        <div className={styles["section-description"]}>
                            Our commitment to excellence extends beyond mere exports. We specialize in providing customizable granite solutions tailored to your unique vision. Whether it&apos;s transforming granite into elegant benches, durable footpaths, or majestic monument bases, our skilled artisans ensure every cut reflects your distinct style and purpose.
                        </div>
                        <div className={styles["section-description"]}>
                            Step into a world of possibilities with Souza United Exports. Experience the beauty, durability, and versatility of our granites, meticulously crafted to elevate your projects to new heights of sophistication.
                        </div>
                    </div>
                </div>
                <div className={styles["about-section"]}>
                    <div className={styles["section-title"]}>Our Mission</div>
                    <div className={styles["section-details"]}>
                        <div className={styles["section-description"]}>
                            At Souza United Exports, our mission is to transform the natural beauty of granite into enduring products that enhance spaces around the world. As a startup, we strive to become a trusted source for high-quality granite by leveraging our commitment to innovation, sustainability, and customer satisfaction. We aim to build lasting relationships with our clients by delivering exceptional value and service, ensuring our granite solutions meet the unique needs of every project.
                        </div>
                    </div>
                </div>
                <div className={styles["about-section"]}>
                    <div className={styles["section-title"]}>Our Vision</div>
                    <div className={styles["section-details"]}>
                        <div className={styles["section-description"]}>
                            Our vision at Souza United Exports is to become a leading global supplier of premium granite, recognized for our commitment to quality, innovation, and sustainability. We aspire to set new industry standards by continuously enhancing our product offerings and expanding our reach into emerging markets. By fostering a culture of excellence and integrity, we aim to inspire confidence in our partners and customers, contributing to the aesthetic and functional transformation of spaces worldwide.
                        </div>
                    </div>
                </div>
                <div className={styles["about-section"]}>
                    <div className={styles["section-title"]}>Our Team</div>
                    <div className={styles["people-section"]}>
                        <div className={styles["people-section-card"]}>
                            <Image className={styles["people-image"]} alt="Vijesh Sharvin Dsouza" src={Vijesh} width={400} height={400} />
                            <div className={styles["user-name"]}>Vijesh Sharvin Dsouza</div>
                            <div className={styles["user-title"]}>CEO</div>
                        </div>
                        <div className={styles["people-section-card"]}>
                            <Image className={styles["people-image"]} alt="Floyd Manuel Dsouza" src={Floyd} width={400} height={400} />
                            <div className={styles["user-name"]}>Floyd Manuel Dsouza</div>
                            <div className={styles["user-title"]}>CTO</div>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutMain>
    )
}

export default AboutUsPage