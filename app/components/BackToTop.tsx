import styles from "@/app/components/css/BackToTop.module.css";
import RocketLaunch from "./svg/RocketLaunch";

type Props = {
    className?: string;
};

const BackToTop = ({ className }: Props): JSX.Element => {
    const handleClick = () => {
        if (typeof window === "undefined") return;

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div className={[styles.backToTop, className].join(" ")}>
            <div onClick={handleClick} className={styles.button}>
                <RocketLaunch className={styles.svg} />
                <div className={styles.label}>BACK TO TOP</div>
            </div>
        </div>
    );
};

export default BackToTop;
