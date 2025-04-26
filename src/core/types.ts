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
