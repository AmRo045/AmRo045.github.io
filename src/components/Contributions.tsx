import nProgress from "nprogress";
import { Contribution, GitHub } from "../services/github";
import { useEffect, useState } from "react";
import Card from "./Card";
import ContributionCmp from "./Contribution";

const Contributions = (): JSX.Element => {
    const [contributions, setContributions] = useState<Contribution[] | []>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const abortController = new AbortController();

        nProgress.start();

        GitHub.getContributions("AmRo045", abortController.signal)
            .then((data: Contribution[]) => {
                setContributions(data);
                nProgress.done();
            })
            .catch((error) => {
                if (error.name !== "CanceledError") {
                    nProgress.done();
                    setError(error.message);
                }
            });

        return () => abortController.abort();
    }, []);

    return (
        <Card type="contributions" header="Contributions">
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
