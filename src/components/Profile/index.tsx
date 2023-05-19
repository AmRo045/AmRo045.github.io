import { ReactComponent as GithubIcon } from "../../assets/svg/github.svg";
import { ReactComponent as InstagramIcon } from "../../assets/svg/instagram.svg";
import { ReactComponent as LeetCodeIcon } from "../../assets/svg/leetcode.svg";
import { ReactComponent as LinkedInIcon } from "../../assets/svg/linkedin.svg";
import { ReactComponent as StackOverFlowIcon } from "../../assets/svg/stackoverflow.svg";
import { ReactComponent as TwitterIcon } from "../../assets/svg/twitter.svg";

import { ReactNode } from "react";
import Avatar from "./Avatar";
import Bio from "./Bio";
import SocialLink from "./SocialLink";
import ThemeSwitcher from "../ThemeSwitcher";

type SocialLinkItem = {
    url: string;
    icon: ReactNode;
};

const socialLinks: SocialLinkItem[] = [
    {
        url: "https://github.com/AmRo045",
        icon: <GithubIcon />,
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
