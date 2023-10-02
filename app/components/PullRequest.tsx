import styles from "@/app/components/css/PullRequest.module.css";

import { convertBacktickToCodeTag } from "@/app/utils";

interface Props {
    title: string;
    url: string;
    creationDate: string;
}

const PullRequest = ({ title, url, creationDate }: Props): JSX.Element => {
    return (
        <div className={styles.pullRequest}>
            <span className={styles.creationDate}>
                {new Date(creationDate).toDateString()}
            </span>

            <a
                className={styles.title}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                dangerouslySetInnerHTML={{
                    __html: convertBacktickToCodeTag(title),
                }}
            ></a>
        </div>
    );
};

export default PullRequest;
