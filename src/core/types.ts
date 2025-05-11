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
