import styles from "./styles.module.scss"
import LayoutMain from "@/components/Layout"

const GalleryMain = () => {
    return (
        <LayoutMain>
            <div className={styles["gallery-page-main"]}>
                Gallery
            </div>
        </LayoutMain>
    )
}

export default GalleryMain