import { Background } from "@/components/Background";
import { Navbar } from "@/components/Navbar";
import { HomeSection } from "@/components/HomeSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer"
import { ExperienceSection } from "@/components/ExperienceSection";
import { Cursor } from "../components/Cursor";

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden"> 

        {/* Custom cursor */}
        <Cursor />

        {/* Background Effects */}
        <Background/>

        {/* Navigation Bar */}
        <Navbar/>

        {/* Main Content */}
        <main>
            <HomeSection/>
            <AboutSection/>
            <ExperienceSection />
            <SkillsSection/>
            <ProjectsSection/>
            <ContactSection/>
        </main>

        {/* Footer */}
        <Footer/>
    </div>;
};