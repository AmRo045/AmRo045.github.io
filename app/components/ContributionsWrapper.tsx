import dynamic from "next/dynamic";
import { useIsInViewPort } from "@/app/hooks/useIsInViewPort";

const Contributions = dynamic(() => import("@/app/components/Contributions"), {
    ssr: false,
});

const ContributionsWrapper = () => {
    const isInViewPort = useIsInViewPort("activities");

    if (!isInViewPort) return <></>;

    return <Contributions />;
};

export default ContributionsWrapper;
