import { SVGProps } from "react";

export default function PreferredThemeIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" {...props}>
            <path
                fill="currentColor"
                fillOpacity="0"
                d="M6 15C6 9 12 4 12 4C12 4 14.9522 6.46019 16.715 10L6.8347 18C6.31173 17.2671 6 16.2894 6 15Z"
            >
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="0.4s"
                    dur="0.5s"
                    values="0;1"
                />
            </path>
            <path
                fill="none"
                className="no-fill"
                stroke="currentColor"
                strokeDasharray="28"
                strokeDashoffset="28"
                strokeLinecap="round"
                strokeWidth="2"
                d="M12 3C12 3 19 9 19 15C19 17 18 21 12 21M12 3C12 3 5 9 5 15C5 17 6 21 12 21"
            >
                <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    dur="0.4s"
                    values="28;0"
                />
            </path>
        </svg>
    );
}
