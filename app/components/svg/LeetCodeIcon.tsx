import { SVGProps } from "react";

export default function LeetCodeIcon(props: SVGProps<SVGSVGElement>) {
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
                d="M12 13h7.5M9.424 7.268l4.999-4.999m2.21 14.375l-2.402 2.415a3.189 3.189 0 0 1-4.524 0l-3.77-3.787a3.223 3.223 0 0 1 0-4.544l3.77-3.787a3.189 3.189 0 0 1 4.524 0l2.302 2.313"
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
