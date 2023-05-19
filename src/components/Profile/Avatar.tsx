import { ReactComponent as AvatarBg } from "../../assets/svg/avatar-bg.svg";
import { ReactComponent as AmRo } from "../../assets/svg/avatar.svg";

const Avatar = (): JSX.Element => {
    return (
        <div className="profile__avatar">
            <AvatarBg />
            <AmRo />
        </div>
    );
};

export default Avatar;
