enum PullRequestState {
    OPEN = "open",
    CLOSED = "closed",
}

export enum AuthorAssociationType {
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

export interface PullRequestQueryResult {
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
