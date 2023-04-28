import {
    Contribution as ContributionType,
    PullRequest as PullRequestType,
} from "../services/github";
import { abbreviateNumber } from "../utils";
import PullRequest from "./PullRequest";

interface Props {
    contribution: ContributionType;
}

const Contribution = ({
    contribution: { repo, pullRequests },
}: Props): JSX.Element => {
    return (
        <div className="contribution">
            <div className="contribution__repo">
                <div className="contribution__repo--title">
                    {repo.full_name}
                </div>

                <div className="contribution__repo--description">
                    {repo.description}
                </div>

                <div className="contribution__repo--stats">
                    <div className="contribution__repo--stars">
                        ⭐{abbreviateNumber(repo.stargazers_count)}
                    </div>

                    <div className="contribution__repo--forks">
                        🍴{abbreviateNumber(repo.forks_count)}
                    </div>
                </div>
            </div>

            {pullRequests.map((pr: PullRequestType, index: number) => (
                <PullRequest
                    key={index}
                    title={pr.title}
                    url={pr.pull_request.html_url}
                    creationDate={pr.created_at}
                />
            ))}
        </div>
    );
};

export default Contribution;
