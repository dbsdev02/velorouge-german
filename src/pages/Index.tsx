import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GigHero from "@/components/GigHero";
import About from "@/components/About";
import Rides from "@/components/Rides";
import Marquee from "@/components/Marquee";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Showcase from "@/components/Showcase";
import FounderStory from "@/components/FounderStory";
import CityStats from "@/components/CityStats";
import Gallery from "@/components/Gallery";
import ReliableSection from "@/components/ReliableSection";
import DeliverSection from "@/components/DeliverSection";
import Difference from "@/components/Difference";
import Features from "@/components/Features";
import Newsletter from "@/components/Newsletter";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => (
  <main>
    <SEO
      title="VéloRouge – Premium E-Bike-Erlebnisse in Straßburg"
      description="Entdecken Sie Straßburg auf einem E-Bike oder Segway – ohne Guide, ohne Gruppe, in Ihrem eigenen Tempo. 4 einzigartige Audioguide-Touren."
      canonical="/"
    />
    <Navbar />
    <Hero />
    
    <About />
    <Rides />

    <Marquee />
    <HowItWorks />
    <Pricing />
    <Showcase />
    <FounderStory />
    <CityStats />
    <Gallery />
    <ReliableSection />
    <GigHero />
    <Features />
    {/* <Newsletter /> */}
    <CTA />
    <Footer />
  </main>
);

export default Index;
