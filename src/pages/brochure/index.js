import styles from "./styles.module.scss"
import LayoutMain from "@/components/Layout"

const BrochureMain = () => {
    return (
        <LayoutMain>
            <div className={styles["brochure-page-main"]}>
                <iframe
                    src="https://drive.google.com/file/d/17Bn9c65DlOy0nzQNrBsgz-QjqXOwXvMk/view?usp=drive_link"
                    className={styles["brouchure-frame"]}
                />
            </div>
        </LayoutMain>
    )
}

export default BrochureMain