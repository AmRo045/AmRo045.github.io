import nProgress from "nprogress";
import { GitHub } from "../services/github";
import { useEffect, useState } from "react";
import Card from "./common/Card";
import ContributionCmp from "./Contribution";
import ContributionsLoadingSkeleton from "./ContributionsLoadingSkeleton";
import { Contribution } from "../entities/GitHub";

const Contributions = (): JSX.Element => {
    const [contributions, setContributions] = useState<Contribution[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const abortController = new AbortController();

        nProgress.start();
        setIsLoading(true);

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
    }, []);

    return (
        <Card type="contributions" header="Contributions">
            {isLoading && (
                <>
                    <ContributionsLoadingSkeleton speed={2} />
                    <ContributionsLoadingSkeleton speed={4} />
                    <ContributionsLoadingSkeleton speed={3} />
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
