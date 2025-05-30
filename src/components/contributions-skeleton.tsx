import { Accordion, AccordionItem } from "@heroui/accordion";
import { Skeleton } from "@heroui/skeleton";
import { range } from "@heroui/shared-utils";

interface Props {
    count?: number;
}

export default function ContributionsSkeleton({ count = 10 }: Props) {
    return (
        <Accordion className="w-[310px] break-words" variant="bordered">
            {range(1, count).map((item) => (
                <AccordionItem
                    key={item}
                    isDisabled={true}
                    subtitle={
                        <div className="grid gap-2 mt-2">
                            <Skeleton className="h-4 w-full rounded-lg" />
                            <div className="flex gap-2 items-center">
                                <Skeleton className="h-[24px] w-[51px] rounded-full" />
                                <Skeleton className="h-[24px] w-[51px] rounded-full" />
                                <Skeleton className="h-[24px] w-[51px] rounded-full" />
                            </div>
                        </div>
                    }
                    title={<Skeleton className="h-4 w-3/4 rounded-lg" />}
                />
            ))}
        </Accordion>
    );
}
