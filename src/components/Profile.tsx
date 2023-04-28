import { ReactComponent as AvatarBg } from "../assets/svg/avatar-bg.svg";
import { ReactComponent as Avatar } from "../assets/svg/avatar.svg";
import { ReactComponent as GithubIcon } from "../assets/svg/github.svg";
import { ReactComponent as InstagramIcon } from "../assets/svg/instagram.svg";
import { ReactComponent as StackOverFlowIcon } from "../assets/svg/stackoverflow.svg";
import { ReactComponent as LinkedInIcon } from "../assets/svg/linkedin.svg";
import { ReactComponent as LeetCodeIcon } from "../assets/svg/leetcode.svg";
import { ReactComponent as TwitterIcon } from "../assets/svg/twitter.svg";

const Profile = (): JSX.Element => {
    return (
        <div className="card profile">
            <div className="profile__avatar">
                <AvatarBg />
                <Avatar />
            </div>

            <div className="profile__name">Amin Rostami</div>
            <div className="profile__description">
                Love to learn, Love to find solution for the problems.
            </div>
            <div className="profile__links">
                <a
                    href="https://github.com/AmRo045"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <GithubIcon />
                </a>
                <a
                    href="https://instagram.com/AmRo045"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <InstagramIcon />
                </a>
                <a
                    href="https://stackoverflow.com/users/11219312/amro"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <StackOverFlowIcon />
                </a>
                <a
                    href="https://twitter.com/AmRo045"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <TwitterIcon />
                </a>
                <a
                    href="https://www.linkedin.com/in/amin-rostami-50a606133"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <LinkedInIcon />
                </a>
                <a
                    href="https://leetcode.com/AmRo045/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <LeetCodeIcon />
                </a>
            </div>
        </div>
    );
};

export default Profile;
