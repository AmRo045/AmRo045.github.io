import { convertBacktickToCodeTag } from "../utils";

interface Props {
    title: string;
    url: string;
    creationDate: string;
}

const PullRequest = ({ title, url, creationDate }: Props): JSX.Element => {
    return (
        <div className="contribution__pull-request">
            <span className="contribution__pull-request--creation-date">
                {new Date(creationDate).toDateString()}
            </span>

            <a
                className="contribution__pull-request--title styled-link"
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
