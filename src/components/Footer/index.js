import Link from "next/link"
import Image from "next/image"

import styles from "./styles.module.scss"
import LogoIcon from "../../assets/Logo-Icon.svg"
import classNames from "classnames"

const FooterMain = () => {
    return (
        <div className={styles["footer-main"]}>
            <div className={styles["footer-contents"]}>
                <div className={styles["footer-column"]}>
                    <div className={styles["column-section"]}>
                        <div className={styles["logo-section"]}><Image src={LogoIcon} alt="Souza United Exports logo" /></div>
                        <div className={styles["name-section"]}>Souza United Exports</div>
                        <div className={styles["contact-section"]}>
                            <div className={classNames(styles["contact-line"], styles["email"])}>souzaunitedexports@gmail.com</div>
                            <div className={styles["contact-line"]}>+91 8618278339  |  +91 9740250911</div>
                        </div>
                        <div className={styles["address-section"]}>
                            <div className={styles["address-line"]}>3-17/19, 1st floor, Konkan Plaza</div>
                            <div className={styles["address-line"]}>near Madhuvan Garden, Jodukatte</div>
                            <div className={styles["address-line"]}>Karkala, Udupi District, Karnataka</div>
                            <div className={styles["address-line"]}>India - 574104</div>
                        </div>
                    </div>
                    <div className={styles["column-section"]}>
                        <div className={styles["section-title"]}>Certifications</div>
                        <div className={styles["section-sub-title"]}>Import Export Code (IEC)</div>
                        <div className={styles["section-text"]}>Certifications</div>
                        <div className={styles["section-sub-title"]}>Goods & Service Tax</div>
                        <div className={styles["section-text"]}>29AFDFS0085F1ZY</div>
                    </div>
                </div>
                <div className={styles["footer-column"]}>
                    <div className={styles["column-section"]}>
                        <div className={styles["section-title"]}>Quick links</div>
                        <Link href={"/"} className={styles["section-link"]}>Home</Link>
                        <Link href={"/products"} className={styles["section-link"]}>Products</Link>
                        <Link href={"/gallery"} className={styles["section-link"]}>Gallery</Link>
                        <Link href={"/about-us"} className={styles["section-link"]}>About Us</Link>
                    </div>
                    <div className={styles["column-section"]}>
                        <div className={styles["section-title"]}>Documents</div>
                        <Link href={"/"} className={styles["section-link"]}>Brouchure</Link>
                        <Link href={"/"} className={styles["section-link"]}>Catologue</Link>
                    </div>
                </div>
                <div className={styles["footer-column"]}>
                    <div className={styles["column-section"]}>
                        <div className={styles["section-title"]}>Blog</div>
                        <Link href={"/"} className={styles["section-link"]}>Blog1......</Link>
                    </div>
                    <div className={styles["column-section"]}>
                        <div className={styles["section-title"]}>Connect Us</div>
                        <div className={styles["social-media-section"]}>
                            <Link href={"/"} className={styles["media-icon"]}>F</Link>
                            <Link href={"/"} className={styles["media-icon"]}>I</Link>
                            <Link href={"/"} className={styles["media-icon"]}>L</Link>
                            <Link href={"/"} className={styles["media-icon"]}>X</Link>
                            <Link target="_blank" href={"https://medium.com/@souzaunitedexports/why-south-indian-granites-are-better-3f28a669ffa1"} className={styles["media-icon"]}>M</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles["footer-bottom-section"]}>
                <div className={styles["copyright-section"]}>Copyright</div>
                <div className={styles["terms-section"]}>
                    <Link href={"/"} className={styles["term-text"]}>Terms & Condition</Link>
                    <Link href={"/"} className={styles["term-text"]}>Privacy Policy</Link>
                </div>
            </div>
        </div>
    )
}

export default FooterMain