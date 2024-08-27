import Link from "next/link"

import styles from "./styles.module.scss"
import LayoutMain from "@/components/Layout"
import QRCode from "../../assets/QR-Code.svg"
import Image from "next/image"

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
                            <Link href="" className={styles["media-item"]}>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutMain>
    )
}

export default ContactUsMain