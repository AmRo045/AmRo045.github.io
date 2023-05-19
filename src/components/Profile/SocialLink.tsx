import { ReactNode } from "react";

interface Props {
    url: string;
    icon: ReactNode;
}

const SocialLink = ({ url, icon }: Props): JSX.Element => {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer">
            {icon}
        </a>
    );
};

export default SocialLink;
