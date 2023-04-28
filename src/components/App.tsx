import Profile from "./Profile";
import BasicInfo from "./BasicInfo";
import ContactInfo from "./ContactInfo";
import Languages from "./Languages";
import Skills from "./Skills";
import Activities from "./Activities";
import Contributions from "./Contributions";

const App = (): JSX.Element => {
    return (
        <div className="container">
            <Profile />
            <BasicInfo />
            <ContactInfo />
            <Languages />
            <Skills />
            <Activities />
            <Contributions />
        </div>
    );
};

export default App;
