import styles from "@/app/components/css/SkillCard.module.css";

type Props = {
    icon: JSX.Element;
    label: string;
    level: string;
};

const SkillCard = ({ icon, label, level }: Props): JSX.Element => {
    return (
        <div className={styles.skillCard}>
            {icon}
            <div>
                <div className={styles.label}>{label}</div>
                <div className={styles.level}>{level}</div>
            </div>
        </div>
    );
};

export default SkillCard;
