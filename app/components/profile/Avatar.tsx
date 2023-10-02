import styles from "@/app/components/css/Profile.module.css";

import AvatarBg from "@/app/components/svg/AvatarBg";
import AmRoLogo from "@/app/components/svg/Avatar";

const Avatar = (): JSX.Element => {
    return (
        <div className={styles.avatar}>
            <AvatarBg />
            <AmRoLogo />
        </div>
    );
};

export default Avatar;
