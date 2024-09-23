import { useEffect, useState } from "react";
import Link from "next/link"
import Image from "next/image"

import { TbMenuDeep } from "react-icons/tb";
import { FaXmark } from "react-icons/fa6";

import styles from "./styles.module.scss";
import LogoIcon from "../../assets/Logo-Icon.svg";
import classNames from "classnames";

const HeaderMain = () => {
    const [showMenus, setShowMenus] = useState(true)
    const [showMobileHeaders, setShowMobileHeaders] = useState(false)

    const handleMobileMenus = () => {
        setShowMenus(!showMenus)
    }

    const handleResize = () => {
        if (window.innerWidth <= 1150) {
            setShowMenus(false)
            setShowMobileHeaders(true)
        } else {
            setShowMenus(true)
            setShowMobileHeaders(false)
        }
    }

    useEffect(() => {
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize) //Clean up
        }
    }, [])

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
                {showMenus && (
                    <div className={classNames(styles["menu-wrapper"], showMobileHeaders ? styles["menu-wrapper-mobile"] : styles["menu-wrapper-desktop"])}>
                        <div className={styles["menu-contents"]}>
                            <Link href={"/"} className={styles["menu-item"]}>Home</Link>
                            <Link href={"/products"} className={styles["menu-item"]}>Products</Link>
                            <Link href={"/gallery"} className={styles["menu-item"]}>Gallery</Link>
                            <Link href={"/about-us"} className={styles["menu-item"]}>About Us</Link>
                        </div>
                        <div className={styles["action-items"]}>
                            <Link href="/docs/brochure.pdf" target="_blank" className={styles["menu-item"]} passHref>
                                <div className={styles["brouchure-button"]}>Get Brochure</div>
                            </Link>
                            <Link href={"/contact-us"} className={styles["menu-item"]}>
                                <div className={styles["contact-button"]}>Contact Us</div>
                            </Link>
                        </div>
                    </div>
                )}
                {showMobileHeaders && (
                    <div className={styles["mobile-menu-icon-container"]} onClick={() => handleMobileMenus()}>
                        {!showMenus ? <TbMenuDeep className={styles["mobile-menu-icon"]} /> : <FaXmark className={styles["mobile-menu-icon"]} />}
                    </div>
                )}
            </div>
        </div>
    )
}

export default HeaderMain