import styles from "@/app/components/css/Profile.module.css";

const Bio = (): JSX.Element => {
    return (
        <>
            <div className={styles.name}>Amin Rostami</div>
            <div className={styles.description}>
                Love to learn, Love to find solution for the problems.
            </div>
        </>
    );
};

export default Bio;
