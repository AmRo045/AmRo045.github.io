import { SVGProps } from "react";

export default function InstagramIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 256 256" {...props}>
            <g fill="currentColor">
                <path
                    d="M176 32H80a48 48 0 0 0-48 48v96a48 48 0 0 0 48 48h96a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48Zm-48 136a40 40 0 1 1 40-40a40 40 0 0 1-40 40Z"
                    fillOpacity="0"
                >
                    <animate
                        fill="freeze"
                        attributeName="fill-opacity"
                        begin="0.6s"
                        dur="0.24s"
                        values="0;0.3"
                    />
                </path>
                <path
                    fillOpacity="0"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    strokeOpacity="0"
                    d="M176 24H80a56.06 56.06 0 0 0-56 56v96a56.06 56.06 0 0 0 56 56h96a56.06 56.06 0 0 0 56-56V80a56.06 56.06 0 0 0-56-56Zm40 152a40 40 0 0 1-40 40H80a40 40 0 0 1-40-40V80a40 40 0 0 1 40-40h96a40 40 0 0 1 40 40Zm-88-96a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48Zm0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32Zm64-84a12 12 0 1 1-12-12a12 12 0 0 1 12 12Z"
                >
                    <animate
                        fill="freeze"
                        attributeName="fill-opacity"
                        begin="0.4s"
                        dur="0.32s"
                        values="0;1"
                    />
                    <animate
                        fill="freeze"
                        attributeName="stroke-opacity"
                        begin="0.2s"
                        dur="0.32s"
                        values="0;1"
                    />
                </path>
            </g>
        </svg>
    );
}
