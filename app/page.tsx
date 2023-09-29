"use client";

import Activities from "@/app/components/Activities";
import BasicInfo from "@/app/components/BasicInfo";
import ContactInfo from "@/app/components/ContactInfo";
import Languages from "@/app/components/Languages";
import Profile from "@/app/components/profile";
import Skills from "@/app/components/Skills";
import ContributionsWrapper from "./components/ContributionsWrapper";

export default function HomePage() {
    return (
        <main className="container">
            <Profile />
            <BasicInfo />
            <ContactInfo />
            <Languages />
            <Skills />
            <Activities />
            <ContributionsWrapper />
        </main>
    );
}
