import styles from "./styles.module.scss";
import HeaderMain from "../Header";
import FooterMain from "../Footer";

const LayoutMain = ({ children }) => {
    return (
        <div className={styles["layout-main"]}>
            <HeaderMain />
            {children}
            <FooterMain />
        </div>
    )
}

export default LayoutMain