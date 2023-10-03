import styles from "@/app/components/css/Contribution.module.css";

import { randomBetween } from "@/app/utils";
import dynamic from "next/dynamic";

const ContentLoader = dynamic(() => import("react-content-loader"), {
    ssr: false,
});

interface Props {
    speed?: number;
}

interface PullRequestInfo {
    y: number;
    width: number;
}

const ContributionsLoadingSkeleton = ({ speed = 1.5 }: Props): JSX.Element => {
    const titleMinLength = 40;
    const titleMaxLength = 70;

    const descriptionMinLength = 50;
    const descriptionMaxLength = 80;

    const pullRequestsMinLength = 36;
    const pullRequestsMaxLength = 80;
    const pullRequestsCount = randomBetween(1, 4);
    const pullRequestsHeight = 12;

    const viewBoxHeight = pullRequestsCount * pullRequestsHeight + 40;

    const createTitle = () => (
        <rect
            x="0"
            y="0"
            rx="4"
            ry="4"
            width={`${randomBetween(titleMinLength, titleMaxLength)}%`}
            height="10"
        />
    );

    const createDescription = () => (
        <rect
            x="0"
            y="14"
            rx="3"
            ry="3"
            width={`${randomBetween(
                descriptionMinLength,
                descriptionMaxLength
            )}%`}
            height="8"
        />
    );

    const createPullRequests = (count: number): PullRequestInfo[] => {
        const pullRequestsBaseY = 46;
        const pullRequests: PullRequestInfo[] = [];
        let y = pullRequestsBaseY;

        for (let i = 0; i < count; ++i) {
            pullRequests.push({
                y,
                width: randomBetween(
                    pullRequestsMinLength,
                    pullRequestsMaxLength
                ),
            });

            y += pullRequestsHeight;
        }

        return pullRequests;
    };

    return (
        <div className={styles.contribution}>
            <ContentLoader
                viewBox={`0 0 380 ${viewBoxHeight}`}
                backgroundColor="var(--loading-skeleton-background)"
                foregroundColor="var(--loading-skeleton-foreground)"
                speed={speed}
            >
                {createTitle()}

                {createDescription()}

                <rect x="2" y="26" rx="3" ry="3" width="16" height="8" />
                <rect x="24" y="26" rx="3" ry="3" width="16" height="8" />

                {createPullRequests(pullRequestsCount).map(
                    ({ y, width }: PullRequestInfo, index: number) => (
                        <rect
                            key={index}
                            x="16"
                            y={y}
                            rx="2"
                            ry="2"
                            width={`${width}%`}
                            height="6"
                        />
                    )
                )}
            </ContentLoader>
        </div>
    );
};

export default ContributionsLoadingSkeleton;
