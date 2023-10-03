import { SVGProps } from "react";

export default function DarkThemeIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" {...props}>
            <g
                fill="none"
                stroke="currentColor"
                strokeDasharray="4"
                strokeDashoffset="4"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M13 4h1.5M13 4h-1.5M13 4v1.5M13 4v-1.5">
                    <animate
                        id="lineMdMoonTwotoneAltLoop0"
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="0.7s;lineMdMoonTwotoneAltLoop0.begin+6s"
                        dur="0.4s"
                        values="4;0"
                    />
                    <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="lineMdMoonTwotoneAltLoop0.begin+2s;lineMdMoonTwotoneAltLoop0.begin+4s"
                        dur="0.4s"
                        values="4;0"
                    />
                    <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="lineMdMoonTwotoneAltLoop0.begin+1.2s;lineMdMoonTwotoneAltLoop0.begin+3.2s;lineMdMoonTwotoneAltLoop0.begin+5.2s"
                        dur="0.4s"
                        values="0;4"
                    />
                </path>
                <path d="M19 11h1.5M19 11h-1.5M19 11v1.5M19 11v-1.5">
                    <animate
                        id="lineMdMoonTwotoneAltLoop1"
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="1.1s;lineMdMoonTwotoneAltLoop1.begin+6s"
                        dur="0.4s"
                        values="4;0"
                    />
                    <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="lineMdMoonTwotoneAltLoop1.begin+2s;lineMdMoonTwotoneAltLoop1.begin+4s"
                        dur="0.4s"
                        values="4;0"
                    />
                    <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="lineMdMoonTwotoneAltLoop1.begin+1.2s;lineMdMoonTwotoneAltLoop1.begin+3.2s;lineMdMoonTwotoneAltLoop1.begin+5.2s"
                        dur="0.4s"
                        values="0;4"
                    />
                </path>
                <path d="M19 4h1.5M19 4h-1.5M19 4v1.5M19 4v-1.5">
                    <animate
                        id="lineMdMoonTwotoneAltLoop2"
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="2.9s;lineMdMoonTwotoneAltLoop2.begin+6s"
                        dur="0.4s"
                        values="4;0"
                    />
                    <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="lineMdMoonTwotoneAltLoop2.begin+2s"
                        dur="0.4s"
                        values="4;0"
                    />
                    <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="lineMdMoonTwotoneAltLoop2.begin+1.2s;lineMdMoonTwotoneAltLoop2.begin+3.2s"
                        dur="0.4s"
                        values="0;4"
                    />
                </path>
            </g>
            <g
                fillOpacity="0"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
            >
                <path
                    fill="currentColor"
                    strokeDasharray="56"
                    strokeDashoffset="56"
                    d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
                >
                    <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        dur="0.6s"
                        values="56;0"
                    />
                    <animate
                        fill="freeze"
                        attributeName="fill-opacity"
                        begin="1.5s"
                        dur="0.15s"
                        values="0;0.3"
                    />
                </path>
            </g>
        </svg>
    );
}