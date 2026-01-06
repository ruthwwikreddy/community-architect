import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Experience from "@/components/Experience";
import Stack from "@/components/Stack";
import Projects from "@/components/Projects";
import Events from "@/components/Events";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="bg-background text-foreground">
      <Navigation />
      <Hero />
      <Mission />
      <Experience />
      <Stack />
      <Projects />
      <Events />
      <Footer />
    </main>
  );
};

export default Index;
