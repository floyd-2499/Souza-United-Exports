import styles from "./styles.module.scss"
import LayoutMain from "@/components/Layout"

const ContactUsMain = () => {
    return (
        <LayoutMain>
            <div className={styles["contact-page-main"]}>
                Contact Us
            </div>
        </LayoutMain>
    )
}

export default ContactUsMain