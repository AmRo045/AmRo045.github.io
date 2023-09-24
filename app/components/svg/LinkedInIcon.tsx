import { SVGProps } from "react";

export default function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 256 256" {...props}>
            <g fill="currentColor">
                <path
                    d="M224 40v176a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8V40a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8Z"
                    fillOpacity="0"
                >
                    <animate
                        fill="freeze"
                        attributeName="fill-opacity"
                        begin="0.6s"
                        dur="0.15s"
                        values="0;0.3"
                    />
                </path>
                <path
                    d="M216 24H40a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16Zm0 192H40V40h176v176ZM96 112v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Zm88 28v36a8 8 0 0 1-16 0v-36a20 20 0 0 0-40 0v36a8 8 0 0 1-16 0v-64a8 8 0 0 1 15.79-1.78A36 36 0 0 1 184 140Zm-84-56a12 12 0 1 1-12-12a12 12 0 0 1 12 12Z"
                    fill="currentColor"
                    fillOpacity="0"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                >
                    <animate
                        fill="freeze"
                        attributeName="fill-opacity"
                        begin="0.6s"
                        dur="0.15s"
                        values="0;1"
                    />
                </path>
            </g>
        </svg>
    );
}
