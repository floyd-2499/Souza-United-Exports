import Link from "next/link"
import Image from "next/image"

import styles from "./styles.module.scss"
import LogoIcon from "../../assets/Logo-Icon.svg"

const HeaderMain = () => {
    return (
        <div className={styles["header-main"]}>
            <div className={styles["header-container"]}>
                <div className={styles["logo-section"]}>
                    <Link href={"/"} className={styles["menu-item"]}>
                        <Image src={LogoIcon} alt="Souza United Exports logo" />
                        <div className={styles["animation-section"]}>
                            <div className={styles["top-text"]}>SOUZA UNITED</div>
                            <div className={styles["bottom-text"]}>EXPORTS</div>
                        </div>
                    </Link>
                </div>
                <div className={styles["menu-contents"]}>
                    <Link href={"/"} className={styles["menu-item"]}>Home</Link>
                    <Link href={"/products"} className={styles["menu-item"]}>Products</Link>
                    <Link href={"/gallery"} className={styles["menu-item"]}>Gallery</Link>
                    <Link href={"/about-us"} className={styles["menu-item"]}>About Us</Link>
                </div>
                <div className={styles["action-items"]}>
                    <Link href={"/brochure"} className={styles["menu-item"]}>
                        <div className={styles["brouchure-button"]}>Get Brochure</div>
                    </Link>
                    <Link href={"/contact-us"} className={styles["menu-item"]}>
                        <div className={styles["contact-button"]}>Contact Us</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HeaderMain