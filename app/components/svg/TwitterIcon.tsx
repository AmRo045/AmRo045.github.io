import { SVGProps } from "react";

export default function TwitterIcon(props: SVGProps<SVGSVGElement>) {
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
                d="M19.8906 7.34375C19.7969 7.67188 19.4001 8.50548 18.7219 9.29669C18.2698 17.9717 9.84907 20.7974 4.08456 17.8869C3.29335 16.8414 6.93856 17.2653 8.26666 15.259C3.23684 12.6876 3.63244 5.82103 4.64971 6.1036C7.02333 9.29669 10.8381 9.57926 11.4597 9.29669C11.4597 8.562 11.1489 6.97958 12.8726 5.65148C13.8616 4.94505 15.9297 4.3125 17.8047 6.34375C18.125 6.55469 18.5859 6.64844 19.2734 6.49219C19.6797 6.28125 20.2262 6.427 19.9453 7.15625"
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
