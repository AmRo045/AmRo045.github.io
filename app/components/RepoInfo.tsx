import styles from "@/app/components/css/RepoInfo.module.css";

import { RepositoryInfo } from "@/app/entities/GitHub";
import { abbreviateNumber } from "@/app/utils";

interface Props {
    repo: RepositoryInfo;
}

const RepoInfo = ({ repo }: Props): JSX.Element => {
    return (
        <div>
            <div className={styles.title}>{repo.full_name}</div>

            <div className={styles.description}>{repo.description}</div>

            <div className={styles.stats}>
                <div>⭐{abbreviateNumber(repo.stargazers_count)}</div>

                <div>🍴{abbreviateNumber(repo.forks_count)}</div>
            </div>
        </div>
    );
};

export default RepoInfo;
