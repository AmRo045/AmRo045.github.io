import Link from "next/link";
import Card from "@/app/components/common/Card";
import DataRow from "@/app/components/common/DataRow";

const Activities = (): JSX.Element => {
    return (
        <Card type="activities" header="Activities" id="activities">
            <DataRow label="Online Compiler">
                <Link href={"/online-compiler"} scroll={true}>
                    Read more
                </Link>
            </DataRow>
            <DataRow label="Kherad-Rayhan.Com">
                <Link href={"/kherad-reyhan-com"} scroll={true}>
                    Read more
                </Link>
            </DataRow>
            <DataRow label="Material Hub">
                <Link href={"/material-hub"} scroll={true}>
                    Read more
                </Link>
            </DataRow>
            <DataRow label="Shecan Desktop">
                <Link href={"/shecan-desktop"} scroll={true}>
                    Read more
                </Link>
            </DataRow>
            <DataRow label="Messenger">
                <Link href={"/c-sharp-messenger"} scroll={true}>
                    Read more
                </Link>
            </DataRow>
            <DataRow label="Shop Management">
                <Link href={"/shop-management"} scroll={true}>
                    Read more
                </Link>
            </DataRow>
        </Card>
    );
};

export default Activities;
