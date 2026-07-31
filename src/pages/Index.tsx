import { lazy, Suspense } from "react";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Rides from "@/components/Rides";

const GigHero = lazy(() => import("@/components/GigHero"));
const Marquee = lazy(() => import("@/components/Marquee"));
const HowItWorks = lazy(() => import("@/components/HowItWorks"));
const Pricing = lazy(() => import("@/components/Pricing"));
const Showcase = lazy(() => import("@/components/Showcase"));
const FounderStory = lazy(() => import("@/components/FounderStory"));
const CityStats = lazy(() => import("@/components/CityStats"));
const Gallery = lazy(() => import("@/components/Gallery"));
const ReliableSection = lazy(() => import("@/components/ReliableSection"));
const Features = lazy(() => import("@/components/Features"));
const CTA = lazy(() => import("@/components/CTA"));
const Footer = lazy(() => import("@/components/Footer"));

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

    <Suspense fallback={null}>
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
    </Suspense>
  </main>
);

export default Index;
