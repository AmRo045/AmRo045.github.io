import { ReactNode, useEffect, useState } from "react";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { Chip } from "@heroui/chip";

import { GitHub } from "@/src/core/github";
import { Contribution as ContributionType, PullRequest as PullRequestType } from "@/src/core/types";
import PullRequest from "@/src/components/pull-request";
import { ForkIcon, PullRequestIcon, StarIcon } from "@/src/components/icons";
import ContributionsSkeleton from "@/src/components/contributions-skeleton";

export const abbreviateNumber = (value: number): string | number => {
    if (value >= 1000 && value < 1000000) return parseFloat((value / 1000).toFixed(1)) + "K";

    if (value >= 1000000 && value < 1000000000) return parseFloat((value / 1000000).toFixed(1)) + "M";

    if (value >= 1000000000 && value < 1000000000000) return parseFloat((value / 1000000000).toFixed(1)) + "B";

    if (value >= 1000000000000) return parseFloat((value / 1000000000000).toFixed(1)) + "T";

    return value;
};

export default function Contributions() {
    const [contributions, setContributions] = useState<ContributionType[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const abortController = new AbortController();

        GitHub.getContributions("AmRo045", abortController.signal)
            .then((data: ContributionType[]) => {
                setContributions(data);
            })
            .catch((error) => {
                if (error.name !== "CanceledError") {
                    setError(error.message);
                }
            })
            .finally(() => {
                setIsLoading(false);
            });

        return () => abortController.abort();
    }, []);

    return (
        <div>
            {isLoading && <ContributionsSkeleton />}

            {error && <div>ERROR: {error}</div>}

            {!error && (
                <Accordion className="w-[310px] break-words" variant="bordered">
                    {contributions.map((contribution: ContributionType, index: number) => (
                        <AccordionItem
                            key={index}
                            classNames={{
                                title: "text-primary max-w-[246px]"
                            }}
                            subtitle={
                                <div className="grid gap-2">
                                    <span>{contribution.repo.description}</span>
                                    <div className="flex gap-2 items-center">
                                        <Chip
                                            color="primary"
                                            size="sm"
                                            startContent={<StarIcon height={16} width={16} />}
                                            variant="shadow"
                                        >
                                            {abbreviateNumber(contribution.repo.stargazers_count)}
                                        </Chip>

                                        <Chip
                                            color="primary"
                                            size="sm"
                                            startContent={<ForkIcon height={16} width={16} />}
                                            variant="shadow"
                                        >
                                            {abbreviateNumber(contribution.repo.forks_count)}
                                        </Chip>

                                        <Chip
                                            color="primary"
                                            size="sm"
                                            startContent={<PullRequestIcon height={16} width={16} />}
                                            variant="faded"
                                        >
                                            {contribution.pullRequests.length}
                                        </Chip>
                                    </div>
                                </div>
                            }
                            title={contribution.repo.full_name}
                        >
                            <div className="grid gap-6">
                                {contribution.pullRequests.map(
                                    (pr: PullRequestType, index: number): ReactNode => (
                                        <PullRequest
                                            key={index}
                                            creationDate={pr.created_at}
                                            title={pr.title}
                                            url={pr.pull_request.html_url}
                                        />
                                    )
                                )}
                            </div>
                        </AccordionItem>
                    ))}
                </Accordion>
            )}
        </div>
    );
}
