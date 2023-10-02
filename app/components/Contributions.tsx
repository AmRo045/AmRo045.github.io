import nProgress from "nprogress";
import { useEffect, useState } from "react";
import { Contribution } from "@/app/entities/GitHub";
import { GitHub } from "@/app/services/github";
import ContributionCmp from "@/app/components/Contribution";
import ContributionsLoadingSkeleton from "@/app/components/ContributionsLoadingSkeleton";
import Card from "@/app/components/common/Card";
import { useIsInViewPort } from "@/app/hooks/useIsInViewPort";

const Contributions = (): JSX.Element => {
    const [contributions, setContributions] = useState<Contribution[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const isInViewPort = useIsInViewPort("activities");

    useEffect(() => {
        if (!isInViewPort) return;

        const abortController = new AbortController();

        nProgress.start();

        GitHub.getContributions("AmRo045", abortController.signal)
            .then((data: Contribution[]) => {
                setContributions(data);
            })
            .catch((error) => {
                if (error.name !== "CanceledError") {
                    setError(error.message);
                }
            })
            .finally(() => {
                nProgress.done();
                setIsLoading(false);
            });

        return () => abortController.abort();
    }, [isInViewPort]);

    return (
        <Card type="contributions" header="Contributions">
            {isLoading && (
                <>
                    <ContributionsLoadingSkeleton speed={2} />
                    <ContributionsLoadingSkeleton speed={4} />
                    <ContributionsLoadingSkeleton speed={3} />
                    <ContributionsLoadingSkeleton speed={1} />
                </>
            )}

            {error && <div>ERROR: {error}</div>}

            {!error &&
                contributions.map(
                    (contribution: Contribution, index: number) => (
                        <ContributionCmp
                            key={index}
                            contribution={contribution}
                        />
                    )
                )}
        </Card>
    );
};

export default Contributions;
