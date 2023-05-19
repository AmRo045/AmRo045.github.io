import { ReactNode } from "react";
import ReactGA from "react-ga4";

interface Props {
    url: string;
    icon: ReactNode;
}

const SocialLink = ({ url, icon }: Props): JSX.Element => {
    const reportClick = (): void => {
        ReactGA.event({
            category: "SocialLinks",
            label: url,
            action: "click",
        });
    };

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={reportClick}
        >
            {icon}
        </a>
    );
};

export default SocialLink;
