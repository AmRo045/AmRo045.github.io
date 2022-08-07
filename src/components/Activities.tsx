import Card from './Card';
import DataRow from './DataRow';

const Activities = (): JSX.Element => {
    return (
        <Card type="activities" header="Activities">
            <DataRow label="Open Source Contributions">
                <a href="https://github.com/MaterialDesignInXAML/MaterialDesignInXamlToolkit">
                    Material Design in XAML
                </a>
                {' & '}
                <a href="https://ohmyposh.dev/docs/themes#amro">Oh My Posh</a>
            </DataRow>
            <DataRow label="Hacktoberfest Badge">
                <a href="https://www.instagram.com/p/CHRzSyljWZqn7sAIuHF2UBXB318CFTCo7kz8Js0/">
                    2020
                </a>
                {' & '}
                <a href="https://www.instagram.com/p/CWQXu91oLQQTVqokO8YqVwkZHdc1Zoixihgazo0/">
                    2021
                </a>
            </DataRow>
            <DataRow label="School Enrollment Website">
                <a href="http://kherad-reyhan.com/">Old Version (Plain PHP)</a>
                {' -> '}
                <a href="https://www.dropbox.com/s/irbiv7tz6l04f1l/kherad-reyhan.test.mp4?dl=0">
                    New Version (Laravel)
                </a>
            </DataRow>
            <DataRow label="Material Hub">
                <p>
                    A material management system for{' '}
                    <a href="https://arcogroup.org">Acro</a> company.{' '}
                    <a href="https://www.dropbox.com/s/zhrvf3qdyt5813f/MaterialHub.mp4?dl=0">
                        Checkout
                    </a>
                </p>
            </DataRow>
            <DataRow label="Shecan Desktop">
                <p>
                    Simple Windows application for Shecan service.{' '}
                    <a href="https://github.com/AmRo045/ShecanDesktop">
                        Checkout
                    </a>
                </p>
            </DataRow>
            <DataRow label="Messenger">
                <p>
                    I have created a simple messenger app (for tutorial
                    purposes).{' '}
                    <a href="https://sourcesara.com/c-sharp-messenger-application/">
                        Checkout
                    </a>
                </p>
            </DataRow>
            <DataRow label="Shop Management">
                <p>
                    A shop management system.{' '}
                    <a href="https://www.dropbox.com/scl/fo/ezf7lifprsl7gwrsj99b4/h?dl=0&rlkey=n2t8dcztquj47nxk9o8888or9">
                        Checkout
                    </a>
                </p>
            </DataRow>
            <DataRow label="Posts & Articles">
                <p>
                    I have created lots of post and tutorial for SourceSara.Com.{' '}
                    <a href="https://sourcesara.com/tutorials-library/">
                        Tutorials
                    </a>
                    ,{' '}
                    <a href="https://sourcesara.com/category/all-category/?cat_id=5">
                        Articles
                    </a>{' '}
                    and{' '}
                    <a href="https://virgool.io/@sourcesara.info">
                        Other articles
                    </a>
                </p>
            </DataRow>
        </Card>
    );
};

export default Activities;
