import axios from "axios";

const baseApiUrl = "https://api.github.com";

enum PullRequestState {
    OPEN = "open",
    CLOSED = "closed",
}

enum AuthorAssociationType {
    NONE = "NONE",
    OWNER = "OWNER",
    CONTRIBUTOR = "CONTRIBUTOR",
}

interface PullRequestInfo {
    html_url: string;
    merged_at: string | null;
}

export interface PullRequest {
    title: string;
    repository_url: string;
    pull_request: PullRequestInfo;
    state: PullRequestState;
    author_association: AuthorAssociationType;
    created_at: string;
}

interface PullRequestQueryResult {
    items: PullRequest[];
}

export interface RepositoryInfo {
    id: number;
    name: string;
    full_name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    forks_count: number;
}

export interface Contribution {
    repo: RepositoryInfo;
    pullRequests: PullRequest[];
}

export class GitHub {
    public static async getPullRequests(
        username: string,
        abortSignal: AbortSignal | undefined = undefined
    ): Promise<PullRequest[]> {
        const apiUrl = `${baseApiUrl}/search/issues?q=author:${username}+is:pr+is:public`;
        const response = await axios.get<PullRequestQueryResult>(apiUrl, {
            signal: abortSignal,
        });

        return response.data?.items;
    }

    public static async getContributions(
        username: string,
        abortSignal: AbortSignal | undefined
    ): Promise<Contribution[]> {
        const pullRequests = await GitHub.getPullRequests(
            username,
            abortSignal
        );

        const contributions = pullRequests.filter(
            (pullRequest: PullRequest): boolean =>
                pullRequest.author_association !== AuthorAssociationType.OWNER
        );

        return await GitHub.groupPullRequestsByRepo(contributions, abortSignal);
    }

    private static async groupPullRequestsByRepo(
        pullRequests: PullRequest[],
        abortSignal: AbortSignal | undefined
    ): Promise<Contribution[]> {
        const contributions: Contribution[] = [];

        for (const pullRequest of pullRequests) {
            const repo = await GitHub.getRepoInfo(
                pullRequest.repository_url,
                abortSignal
            );
            const contribution = contributions.find(
                (con) => con.repo.id === repo.id
            );

            if (contribution) {
                contribution.pullRequests.push(pullRequest);
            } else {
                contributions.push({
                    repo,
                    pullRequests: [pullRequest],
                });
            }
        }

        return contributions;
    }

    private static async getRepoInfo(
        url: string,
        abortSignal: AbortSignal | undefined
    ): Promise<RepositoryInfo> {
        const response = await axios.get<RepositoryInfo>(url, {
            signal: abortSignal,
        });

        return response.data;
    }
}
