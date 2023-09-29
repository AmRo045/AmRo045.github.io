import Link from "next/link";
import Card from "./common/Card";
import DataRow from "./common/DataRow";

const Activities = (): JSX.Element => {
    return (
        <Card type="activities" header="Activities">
            <DataRow label="Online Compiler">
                <Link href={"/activities/online-compiler"}>Read more</Link>
            </DataRow>
            <DataRow label="Kherad-Rayhan.Com">
                <Link href={"/activities/kherad-reyhan-com"}>Read more</Link>
            </DataRow>
            <DataRow label="Material Hub">
                <Link href={"/activities/material-hub"}>Read more</Link>
            </DataRow>
            <DataRow label="Shecan Desktop">
                <Link href={"/activities/shecan-desktop"}>Read more</Link>
            </DataRow>
            <DataRow label="Messenger">
                <Link href={"/activities/c-sharp-messenger"}>Read more</Link>
            </DataRow>
            <DataRow label="Shop Management">
                <Link href={"/activities/shop-management"}>Read more</Link>
            </DataRow>
        </Card>
    );
};

export default Activities;
