import DataRow from './DataRow';
import Card from './Card';
import {
    GithubIcon,
    InstagramIcon,
    Avatar,
    StackOverFlowIcon,
    TwitterIcon,
} from './common/svg';

const App = (): JSX.Element => {
    return (
        <div className="container">
            <div className="card profile">
                <div className="profile__avatar">
                    <Avatar />
                </div>

                <div className="profile__name">Amin Rostami</div>
                <div className="profile__description">
                    Love to learn, Love to find solution for the problems.
                </div>
                <div className="profile__links">
                    <a href="https://github.com/AmRo045" target="_blank">
                        <GithubIcon />
                    </a>
                    <a href="https://instagram.com/AmRo045" target="_blank">
                        <InstagramIcon />
                    </a>
                    <a
                        href="https://stackoverflow.com/users/11219312/amro"
                        target="_blank"
                    >
                        <StackOverFlowIcon />
                    </a>
                    <a href="https://twitter.com/AmRo045" target="_blank">
                        <TwitterIcon />
                    </a>
                </div>
            </div>

            <Card type="basic-info" header="Basic Information">
                <DataRow label="🎂 Date of Birth" value="1997-8-14" />
                <DataRow label="♀️ Gender" value="Male" />
                <DataRow label="💍 Marital Status" value="Single" />
                <DataRow
                    label="👮‍♂️ Military Service Status"
                    value="😭 Not Served Yet"
                />
                <DataRow
                    label="📚 Education Level"
                    value="Bachelor Software Engineering"
                />
                <DataRow
                    label="📍 Location"
                    value="Iran ➡ Tehran ➡ Eslamshahr"
                />
            </Card>

            <Card type="contact-info" header="Contact Information">
                <DataRow
                    label="📧 E-Mail Address"
                    value="MyEmailBox045@Gmail.Com"
                />
                <DataRow label="📞 Phone Number" value="0914-619-0965" />
            </Card>

            <Card type="languages" header="Languages">
                <DataRow label="Turkish (Azari)" value="😎 Native" />
                <DataRow label="Persian" value="🧐 Advanced" />
                <DataRow label="English" value="🤓 Intermediate" />
            </Card>

            <Card type="skills" header="Technical Skills">
                <DataRow label="⏱ Git" value="Advanced" />
                <DataRow label="🔪 C# & .NET" value="Advanced" />
                <DataRow label="🖌 WPF" value="Advanced" />
                <DataRow label="PHP/Laravel" value="Advanced" />
                <DataRow
                    label="JavaScript & TypeScript & NodeJS"
                    value="Advanced"
                />
                <DataRow label="HTML, CSS" value="Advanced" />
                <DataRow label="📐 Design Patterns" value="Intermediate" />
                <DataRow
                    label="🧪 Unit & Integrated Testing & TDD"
                    value="Intermediate"
                />
                <DataRow label="🖇 CI/CD" value="Intermediate" />
                <DataRow label="🚢 Docker" value="Intermediate" />
                <DataRow label="☕ Java" value="Intermediate" />
                <DataRow label="🗡 C/C++" value="Intermediate" />
                <DataRow label="🐍 Python" value="Intermediate" />
                <DataRow label="🗄 SQL Server & MySQL" value="Intermediate" />
                <DataRow
                    label="✒ Adobe XD & Adobe Illustrator & Adobe Photoshop"
                    value="Intermediate"
                />
                <DataRow label="⚛ React" value="Intermediate" />
            </Card>

            <Card type="activities" header="Activities">
                <DataRow label="Open Source Contributions">
                    <a href="https://github.com/MaterialDesignInXAML/MaterialDesignInXamlToolkit">
                        Material Design in XAML
                    </a>
                    {' & '}
                    <a href="https://ohmyposh.dev/docs/themes#amro">
                        Oh My Posh
                    </a>
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
                    <a href="http://kherad-reyhan.com/">
                        Old Version (Plain PHP)
                    </a>
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
                        I have created lots of post and tutorial for
                        SourceSara.Com.{' '}
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
        </div>
    );
};

export default App;
