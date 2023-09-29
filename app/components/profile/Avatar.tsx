import AvatarBg from "@/app/components/svg/AvatarBg";
import AmRoLogo from "@/app/components/svg/Avatar";

const Avatar = (): JSX.Element => {
    return (
        <div className="profile__avatar">
            <AvatarBg />
            <AmRoLogo />
        </div>
    );
};

export default Avatar;
