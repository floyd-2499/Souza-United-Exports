import styles from "./styles.module.scss";

const LoaderMain = () => {
    return (
        <div className={styles["loader-main"]}>
            <div className={styles["bars"]}></div>
        </div>
    )
};

export default LoaderMain;