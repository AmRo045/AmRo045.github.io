"use client";

import Activities from "./components/Activities";
import BasicInfo from "./components/BasicInfo";
import ContactInfo from "./components/ContactInfo";
import Contributions from "./components/Contributions";
import Languages from "./components/Languages";
import Profile from "./components/profile";
import Skills from "./components/Skills";

export default function HomePage() {
    return (
        <>
            <Profile />
            <BasicInfo />
            <ContactInfo />
            <Languages />
            <Skills />
            <Activities />
            <Contributions />
        </>
    );
}
