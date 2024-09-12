import Link from "next/link"

import { AiOutlineMedium } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

import styles from "./styles.module.scss"
import LayoutMain from "@/components/Layout"
import QRCode from "../../assets/QR-Code.svg"
import Image from "next/image"

export const socialMediaDetails = [
    {
        id: 1,
        name: "Facebook",
        icon: <FaFacebook />,
        link: "https://www.facebook.com/profile.php?id=61563545483353&mibextid=ZbWKwL",
        active: true
    },
    {
        id: 2,
        name: "Instagram",
        icon: <FaInstagram />,
        link: "https://www.instagram.com/souzaunitedexports/",
        active: true
    },
    {
        id: 3,
        name: "Twitter-X",
        icon: <BsTwitterX />,
        link: "https://x.com/_Souza_United",
        active: true
    },
    {
        id: 4,
        name: "Linkedin",
        icon: <FaLinkedin />,
        link: "https://www.linkedin.com/in/souza-united-exports-47873a27a/",
        active: true
    },
    {
        id: 5,
        name: "Medium",
        icon: <AiOutlineMedium />,
        link: "https://medium.com/@souzaunitedexports",
        active: true
    },
]

const ContactUsMain = () => {
    return (
        <LayoutMain>
            <div className={styles["contact-page-main"]}>
                <div className={styles["contact-card-container"]}>
                    <div className={styles['qr-container']}>
                        <Image alt="Souza United Exports Location" src={QRCode} width={300} height={300} />
                        <div className={styles["support-text"]}>Scan QR for location</div>
                    </div>
                    <div className={styles['contact-details']}>
                        <div className={styles['detail-wrapper']}>
                            <div className={styles["detail-title"]}>Email</div>
                            <div className={styles["detail-item"]}>souzaunitedexports@gmail.com</div>
                        </div>
                        <div className={styles['detail-wrapper']}>
                            <div className={styles["detail-title"]}>Phone</div>
                            <div className={styles["detail-item"]}>+91 8618278339 | +91 9740250911</div>
                        </div>
                        <div className={styles['detail-wrapper']}>
                            <div className={styles["detail-title"]}>Address</div>
                            <div className={styles["detail-item"]}>3-17/19, 1st floor, Konkan Plaza</div>
                            <div className={styles["detail-item"]}>Near Madhuvan Garden, Jodukatte, Karkala</div>
                            <div className={styles["detail-item"]}>Udupi District, Karnataka, India - 574104</div>
                        </div>
                        <div className={styles['social-media-container']}>
                            {socialMediaDetails?.map(media => {
                                return (
                                    <Link key={media?.id} href={media?.active && media?.link} className={styles["media-item"]} target="_blank">
                                        {media?.icon}
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </LayoutMain>
    )
}

export default ContactUsMain