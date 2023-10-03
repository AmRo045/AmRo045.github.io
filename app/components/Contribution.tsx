import styles from "@/app/components/css/Contribution.module.css";

import { ReactNode } from "react";
import {
    Contribution as ContributionType,
    PullRequest as PullRequestType,
} from "@/app/entities/GitHub";
import PullRequest from "@/app/components/PullRequest";
import RepoInfo from "@/app/components/RepoInfo";

interface Props {
    contribution: ContributionType;
}

const Contribution = ({
    contribution: { repo, pullRequests },
}: Props): JSX.Element => {
    return (
        <div className={styles.contribution}>
            <RepoInfo repo={repo} />

            {pullRequests.map(
                (pr: PullRequestType, index: number): ReactNode => (
                    <PullRequest
                        key={index}
                        title={pr.title}
                        url={pr.pull_request.html_url}
                        creationDate={pr.created_at}
                    />
                )
            )}
        </div>
    );
};

export default Contribution;
