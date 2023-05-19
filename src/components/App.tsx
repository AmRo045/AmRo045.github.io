import { useEffect } from "react";
import ReactGA from "react-ga4";
import Activities from "./Activities";
import BasicInfo from "./BasicInfo";
import ContactInfo from "./ContactInfo";
import Contributions from "./Contributions";
import Languages from "./Languages";
import Profile from "./Profile";
import Skills from "./Skills";

const App = (): JSX.Element => {
    useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: "/", title: "Home Page" });
    }, []);

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
