import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number;
};

export type Project = {
    id: string;
    name: string;
    description: string;
    links?: {
        title: string;
        url: string;
    }[];
    images: string[];
    videos?: string[];
    featuredImageIndex: number;
    tags?: string[];
};

export interface BlogPostMetaData {
    title: string;
    date: string;
    image: string;
    metaDescription?: string;

    [key: string]: any;
}

export interface BlogPost extends BlogPostMetaData {
    contentHtml: string;
}

export interface PostSummary {
    title: string;
    slug: string;
    image: string;
    date: string;
}

enum PullRequestState {
    OPEN = "open",
    CLOSED = "closed"
}

export enum AuthorAssociationType {
    NONE = "NONE",
    OWNER = "OWNER",
    CONTRIBUTOR = "CONTRIBUTOR"
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
