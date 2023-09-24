import { SVGProps } from "react";

export default function StackOverFlowIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" {...props}>
            <path
                fill="currentColor"
                fillOpacity="0"
                stroke="currentColor"
                strokeDasharray="62"
                strokeDashoffset="62"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 17v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1M8 16h8m-7.678-3.418l7.956.836m-7.491-4.25l7.826 1.664m-6.517-5.068l7.608 2.472"
            >
                <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    dur="0.6s"
                    values="62;0"
                />
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="0.6s"
                    dur="0.15s"
                    values="0;0.3"
                />
            </path>
        </svg>
    );
}
