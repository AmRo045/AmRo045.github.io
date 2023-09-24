import { ReactNode } from "react";
import ThemeSwitcher from "../ThemeSwitcher";
import GitHubIcon from "../svg/GitHubIcon";
import InstagramIcon from "../svg/InstagramIcon";
import LeetCodeIcon from "../svg/LeetCodeIcon";
import LinkedInIcon from "../svg/LinkedInIcon";
import StackOverFlowIcon from "../svg/StackOverFlowIcon";
import TwitterIcon from "../svg/TwitterIcon";
import Avatar from "./Avatar";
import Bio from "./Bio";
import SocialLink from "./SocialLink";

type SocialLinkItem = {
    url: string;
    icon: ReactNode;
};

const socialLinks: SocialLinkItem[] = [
    {
        url: "https://github.com/AmRo045",
        icon: <GitHubIcon />,
    },
    {
        url: "https://instagram.com/AmRo045",
        icon: <InstagramIcon />,
    },
    {
        url: "https://stackoverflow.com/users/11219312/amro",
        icon: <StackOverFlowIcon />,
    },
    {
        url: "https://twitter.com/AmRo045",
        icon: <TwitterIcon />,
    },
    {
        url: "https://www.linkedin.com/in/amin-rostami-50a606133",
        icon: <LinkedInIcon />,
    },
    {
        url: "https://leetcode.com/AmRo045",
        icon: <LeetCodeIcon />,
    },
];

const Profile = (): JSX.Element => {
    return (
        <div className="card profile">
            <div className="profile__theme-switch">
                <ThemeSwitcher />
            </div>

            <Avatar />
            <Bio />

            <div className="profile__links">
                {socialLinks.map(
                    (item: SocialLinkItem, index: number): ReactNode => (
                        <SocialLink
                            key={index}
                            url={item.url}
                            icon={item.icon}
                        />
                    )
                )}
            </div>
        </div>
    );
};

export default Profile;
