import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import FoundersPreview from "@/components/FoundersPreview";
import Stack from "@/components/Stack";
import Events from "@/components/Events";
import Recommendations from "@/components/Recommendations";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { motion, useScroll, useSpring } from "framer-motion";

const Index = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="bg-background text-foreground selection:bg-indigo-500/30 selection:text-white">
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-indigo-500 origin-[0%] z-[100]"
                style={{ scaleX }}
            />
            <Navigation />
            <main>
                <Hero />
                <Mission />
                <Experience />
                <Projects />
                <FoundersPreview />
                <Stack />
                <Events />
                <Recommendations />
                <ContactForm />
            </main>
            <Footer />
        </div>
    );
};

export default Index;
