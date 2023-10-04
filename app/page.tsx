"use client";

import Activities from "@/app/components/Activities";
import BackToTop from "@/app/components/BackToTop";
import BasicInfo from "@/app/components/BasicInfo";
import ContactInfo from "@/app/components/ContactInfo";
import Contributions from "@/app/components/Contributions";
import Languages from "@/app/components/Languages";
import Skills from "@/app/components/Skills";
import Profile from "@/app/components/profile";

export default function HomePage() {
    return (
        <main className="container">
            <Profile />
            <BasicInfo />
            <ContactInfo />
            <Languages />
            <Skills />
            <Activities />
            <Contributions />
            <BackToTop className="back-to-top" />
        </main>
    );
}
