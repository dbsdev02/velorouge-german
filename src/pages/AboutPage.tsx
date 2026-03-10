import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import aboutHero from "@/assets/about-hero.jpg";
import teamPhoto from "@/assets/7.png";
import travelersPhoto from "@/assets/gallery-1.jpg";
import ctaBg from "@/assets/hero-bg.jpg";
import { Bike, Heart, Users, Globe, ChevronDown } from "lucide-react";
import { useState } from "react";

const values = [
  { icon: Bike, title: "La liberté avant tout", desc: "Se déplacer devrait être un plaisir. Pas de files, pas de casse-tête — explorez la ville à votre rythme." },
  { icon: Heart, title: "L'amour du local", desc: "Chaque parcours est imaginé par des gens qui vivent à Strasbourg. Les visiteurs découvrent les incontournables et les pépites secrètes." },
  { icon: Users, title: "Porté par la communauté", desc: "Nos voyageurs et cyclistes façonnent les nouvelles expériences. Des suggestions d'itinéraires aux demandes de fonctionnalités — on écoute." },
  { icon: Globe, title: "Engagé pour la planète", desc: "Chaque balade remplace un trajet en voiture et soutient le voyage durable. Nous rendons Strasbourg plus verte, un coup de pédale à la fois." },
];

const faqs = [
  { q: "Do I need experience to ride a Segway?", a: "Not at all. Before every guided tour, our team provides a short training session to make sure you feel comfortable and confident. Most riders get the hang of it within minutes." },
  { q: "Is it safe to ride?", a: "Yes. Safety is our top priority. All rides include basic instructions, and our vehicles are regularly inspected and maintained. Guided tours are led by trained staff to ensure a smooth and safe experience." },
  { q: "How do I book a tour or ride?", a: "You can book directly through our website or via the VéloRouge app. Simply choose your preferred date, time, and experience, then confirm your booking in just a few clicks." },
  { q: "Where do the tours take place?", a: "Our tours operate in Strasbourg and selected nearby areas in Alsace. Routes include historic streets, scenic canals, and key landmarks." },
  { q: "What should I wear for the ride?", a: "We recommend comfortable clothing and flat shoes. In colder or rainy weather, a light jacket is a good idea. Please avoid very loose items that could interfere with riding." },
  { q: "Is there an age or weight limit?", a: "Yes. Riders usually need to be at least 12–14 years old (depending on the tour type) and fall within the standard safety weight limits for Segways or e-bikes. Exact requirements are shown during booking." },
  { q: "Do you offer student discounts?", a: "Yes! We offer special student-friendly pricing and subscription options. Student status may need to be verified through the app or during booking." },
  { q: "How does the app-based ride work?", a: "Download the VéloRouge app, find a nearby vehicle, scan the QR code, and start your ride. Payment is handled directly in the app, and you can end your ride at designated parking zones." },
  { q: "What happens if it rains?", a: "Light rain usually doesn't stop tours. However, for safety reasons, tours may be rescheduled in case of severe weather. If that happens, we'll help you choose a new time." },
  { q: "Can I cancel or reschedule my booking?", a: "Yes. Cancellations or rescheduling are possible within the timeframe stated in our booking policy. Full details are provided at checkout." },
];

const timeline = [
  { year: "2021", event: "Founded in a garage in Petite France with 5 e-bikes." },
  { year: "2022", event: "Grew to 40 e-bikes and launched our first curated routes." },
  { year: "2023", event: "Subscription model launched — 500 members and growing tourist bookings." },
  { year: "2024", event: "Expanded fleet and introduced guided city experiences for visitors." },
  { year: "2025", event: "4,500+ happy riders from over 30 countries." },
];

const AboutPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
  <main>
    <Navbar />

    {/* Hero */}
    <section className="relative min-h-[60vh] flex items-end pb-20 bg-dark overflow-hidden pt-20">
      <img src={aboutHero} alt="Strasbourg aerial view" className="absolute inset-0 w-full h-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-transparent" />
      <div className="container relative z-10">
        <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-4">À propos</p>
        <h1 className="font-display text-5xl md:text-7xl font-black text-dark-foreground leading-[0.95] max-w-3xl">
          Né à
          <br />
          <em className="text-primary">Strasbourg.</em>
          <br />
          Conçu pour les curieux.
        </h1>
      </div>
    </section>

    {/* Mission */}
    <section className="py-24 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-black leading-tight">
              Tout a commencé
              <br />
              par une <em className="text-primary">question.</em>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg max-w-md">
              Pourquoi découvrir une ville devrait-il être lent, bondé et compliqué ?
            </p>
            <p className="mt-4 text-muted-foreground max-w-md">
              Plus d'attente. Plus d'itinéraires confus. Plus de trésors cachés ratés.
            </p>
            <p className="mt-4 text-muted-foreground max-w-md">
              VéloRouge est né pour réinventer la façon dont on explore Strasbourg — que vous soyez de passage pour une journée ou résident depuis toujours.
            </p>
            <p className="mt-4 text-muted-foreground max-w-md">
              Aujourd'hui, nous accompagnons des milliers de voyageurs et de Strasbourgeois à travers des parcours sur mesure, des visites guidées et une mobilité premium conçue pour vivre de vraies expériences.
            </p>
          </div>
          <div className="aspect-video overflow-hidden">
            <img src={teamPhoto} alt="VeloRouge team" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    {/* Built for travelers */}
    <section className="py-24 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="aspect-[4/5] overflow-hidden">
            <img src={travelersPhoto} alt="Travelers exploring Strasbourg" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-black leading-tight mb-8">
              Pensé pour les voyageurs.
              <br />
              Adopté par les <em className="text-primary">locaux.</em>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mb-12">
              Du premier visiteur à l'explorateur chevronné, VéloRouge vous permet de voir plus de Strasbourg en moins de temps.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2" />
                <span className="text-muted-foreground">Visites guidées par des experts locaux</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2" />
                <span className="text-muted-foreground">Itinéraires panoramiques à travers les quartiers historiques</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2" />
                <span className="text-muted-foreground">Pauses photo devant les monuments emblématiques</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2" />
                <span className="text-muted-foreground">Accessible aux débutants, aucune expérience requise</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2" />
                <span className="text-muted-foreground">Formules flexibles pour les courts séjours et excursions</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-24 bg-dark text-dark-foreground">
      <div className="container">
        <h2 className="font-display text-4xl md:text-5xl font-black leading-tight mb-16">
          Ce en quoi
          <br />
          nous <em className="text-primary">croyons.</em>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v) => (
            <div key={v.title}>
              <v.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-display text-xl font-bold mb-2">{v.title}</h3>
              <p className="text-base text-dark-foreground/60">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Trust Section */}
    <section className="py-24 bg-background">
      <div className="container">
        <h2 className="font-display text-4xl md:text-5xl font-black leading-tight mb-12 text-center">
          Pourquoi les voyageurs choisissent
          <br />
          <em className="text-primary">VéloRouge</em>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-primary text-3xl font-bold mb-2">★★★★★</div>
            <p className="text-muted-foreground">Élu parmi les meilleures façons de découvrir Strasbourg</p>
          </div>
          <div className="text-center">
            <div className="text-primary text-3xl font-bold mb-2">30+</div>
            <p className="text-muted-foreground">pays représentés</p>
          </div>
          <div className="text-center">
            <div className="text-primary text-3xl font-bold mb-2">100%</div>
            <p className="text-muted-foreground">accessible aux débutants</p>
          </div>
        </div>
      </div>
    </section>

    {/* Trust Marquee - Full Width */}
    <div className="w-full bg-primary text-primary-foreground py-6 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        <span className="font-display text-xl italic font-normal tracking-wide mx-4" style={{color: 'rgba(245, 240, 232, 0.9)'}}>Sécurisé et parfait pour les débutants  •  E-bikes et Segways premium  •  Réservation flexible et accès via l'application  •  Support multilingue  •  Sécurisé et parfait pour les débutants  •  E-bikes et Segways premium  •  Réservation flexible et accès via l'application  •  Support multilingue  •  </span>
      </div>
    </div>

    {/* FAQ */}
    <section className="py-24 bg-background">
      <div className="container max-w-3xl">
        <h2 className="font-display text-4xl md:text-5xl font-black leading-tight mb-16 text-center">
          Frequently asked
          <br />
          <em className="text-primary">questions.</em>
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-border rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors"
              >
                <h3 className="font-display text-lg font-bold pr-4">{faq.q}</h3>
                <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === i && (
                <div className="px-6 pb-6">
                  <p className="text-base text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Tourist CTA */}
    <section className="relative py-24 text-dark-foreground text-center overflow-hidden">
      <img src={ctaBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-dark/80" />
      <div className="container max-w-2xl relative z-10">
        <h2 className="font-display text-4xl md:text-5xl font-black leading-tight">
          Prêt à explorer
          <br />
          <em className="text-primary">Strasbourg ?</em>
        </h2>
        <p className="mt-6 text-dark-foreground/70 text-lg">
          Réservez votre balade guidée aujourd'hui et voyez plus en moins de temps.
        </p>
        <a
          href="#"
          className="inline-block mt-8 bg-primary text-primary-foreground px-10 py-4 font-semibold text-sm hover:bg-primary/90 transition-colors"
        >
          Réserver mon expérience
        </a>
      </div>
    </section>

    <Footer />
  </main>
  );
};

export default AboutPage;
