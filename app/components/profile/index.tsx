import styles from "@/app/components/css/Profile.module.css";

import { ReactNode } from "react";
import ThemeSwitcher from "@/app/components/ThemeSwitcher";
import GitHubIcon from "@/app/components/svg/GitHubIcon";
import InstagramIcon from "@/app/components/svg/InstagramIcon";
import LeetCodeIcon from "@/app/components/svg/LeetCodeIcon";
import LinkedInIcon from "@/app/components/svg/LinkedInIcon";
import StackOverFlowIcon from "@/app/components/svg/StackOverFlowIcon";
import TwitterIcon from "@/app/components/svg/TwitterIcon";
import Avatar from "@/app/components/profile/Avatar";
import Bio from "@/app/components/profile/Bio";
import SocialLink from "@/app/components/profile/SocialLink";

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
        <div className={styles.profile}>
            <div className={styles.themeSwitch}>
                <ThemeSwitcher />
            </div>

            <Avatar />
            <Bio />

            <div className={styles.links}>
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
