import styles from "./styles.module.scss";
import HeaderMain from "../Header";
import FooterMain from "../Footer";
import LoaderMain from "../Loader";
import { useEffect, useState } from "react";

const LayoutMain = ({ children }) => {
    const [showLoader, setShowLoader] = useState(true)

    useEffect(() => {
        if (showLoader) {
            setTimeout(() => {
                setShowLoader(false)
            }, 3000)
        }
    }, [showLoader])

    return (
        <div className={styles["layout-main"]}>
            <HeaderMain />
            {showLoader ? <LoaderMain /> : children}
            <FooterMain />
        </div>
    )
}

export default LayoutMain