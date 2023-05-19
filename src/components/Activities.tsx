import ReactGA from "react-ga4";
import Card from "./Card";
import DataRow from "./DataRow";

const Activities = (): JSX.Element => {
    const reportClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
        const label = e.currentTarget.href;

        ReactGA.event({
            category: "Activity",
            label,
            action: "click",
        });
    };

    return (
        <Card type="activities" header="Activities">
            <DataRow label="School Enrollment Website">
                <a href="http://kherad-reyhan.com/" onClick={reportClick}>
                    Old Version (Plain PHP)
                </a>
                {" -> "}
                <a
                    href="https://www.dropbox.com/s/irbiv7tz6l04f1l/kherad-reyhan.test.mp4?dl=0"
                    onClick={reportClick}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    New Version (Laravel)
                </a>
            </DataRow>
            <DataRow label="Material Hub">
                <p>
                    A material management system for{" "}
                    <a
                        href="https://arcogroup.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={reportClick}
                    >
                        Acro
                    </a>{" "}
                    company.{" "}
                    <a
                        href="https://www.dropbox.com/s/zhrvf3qdyt5813f/MaterialHub.mp4?dl=0"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={reportClick}
                    >
                        Checkout
                    </a>
                </p>
            </DataRow>
            <DataRow label="Shecan Desktop">
                <p>
                    Simple Windows application for Shecan service.{" "}
                    <a
                        href="https://github.com/AmRo045/ShecanDesktop"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={reportClick}
                    >
                        Checkout
                    </a>
                </p>
            </DataRow>
            <DataRow label="Messenger">
                <p>
                    I have created a simple messenger app (for tutorial
                    purposes).{" "}
                    <a
                        href="https://sourcesara.com/c-sharp-messenger-application/"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={reportClick}
                    >
                        Checkout
                    </a>
                </p>
            </DataRow>
            <DataRow label="Shop Management">
                <p>
                    A shop management system.{" "}
                    <a
                        href="https://www.dropbox.com/scl/fo/ezf7lifprsl7gwrsj99b4/h?dl=0&rlkey=n2t8dcztquj47nxk9o8888or9"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={reportClick}
                    >
                        Checkout
                    </a>
                </p>
            </DataRow>
            <DataRow label="Posts & Articles">
                <p>
                    I have created lots of post and tutorials for
                    SourceSara.Com.{" "}
                    <a
                        href="https://sourcesara.com/tutorials-library/"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={reportClick}
                    >
                        Tutorials
                    </a>
                    ,{" "}
                    <a
                        href="https://sourcesara.com/category/all-category/?cat_id=5"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={reportClick}
                    >
                        Articles
                    </a>{" "}
                    and{" "}
                    <a
                        href="https://virgool.io/@sourcesara.info"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={reportClick}
                    >
                        Other articles
                    </a>
                </p>
            </DataRow>
        </Card>
    );
};

export default Activities;
