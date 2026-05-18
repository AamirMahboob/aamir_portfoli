import BgBlobs from "@/components/BgBlobs";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PageWithSplash from "@/components/PageWithSplash";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <PageWithSplash>
      <main className="relative">
        <BgBlobs />
        <Navbar />
        <Hero />
        <Stats />
        <Projects />
        <Skills />
        <Services />
        <Testimonials />
        <CTA />
        <Contact />
        <Footer />
      </main>
    </PageWithSplash>
  );
}
