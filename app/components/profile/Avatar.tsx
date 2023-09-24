import AvatarBg from "../svg/AvatarBg";
import AmRoLogo from "../svg/Avatar";

const Avatar = (): JSX.Element => {
    return (
        <div className="profile__avatar">
            <AvatarBg />
            <AmRoLogo />
        </div>
    );
};

export default Avatar;
