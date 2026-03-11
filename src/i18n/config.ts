import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About",
        visitors: "Visitors",
        residents: "Residents",
        safeSmart: "Safety & Tech",
        contact: "Contact"
      },
      hero: {
        title: "Strasbourg reveals itself",
        titleHighlight: "at dusk.",
        subtitle: "Discover the city differently. Our electric bike tours take you where guides don't dare to go.",
        bookRide: "BOOK A RIDE",
        discoverBikes: "DISCOVER OUR BIKES"
      },
      about: {
        title: "Much more than a",
        titleHighlight: "simple rental.",
        subtitle: "VeloRouge is the Strasbourg experience reinvented. Each route tells a story. Each pedal stroke brings you closer to the soul of the city.",
        stat1: "bikes available",
        stat2: "secret routes",
        stat3: "conquered explorers"
      },
      rides: {
        title: "Four ways",
        titleLine2: "to vibe in",
        titleHighlight: "Strasbourg.",
        ride1: "Strasbourg Sundowner",
        ride2: "Bar Hop Petite France",
        ride3: "Unusual Strasbourg",
        ride4: "Franco-German Escape",
        from: "From",
        favorite: "FAVORITE",
        popular: "POPULAR"
      },
      pricing: {
        title: "One city.",
        titleLine2: "Three ways to",
        titleHighlight: "live it.",
        visitors: "Visitors & Tourists",
        residents: "Residents & Students",
        delivery: "Delivery & Couriers",
        perRide: "/ride",
        perWeek: "/week",
        perMonth: "/month",
        ownerIn12: "owner in 12 months",
        visitorsFeature1: "Guided tour by a passionate local",
        visitorsFeature2: "Secret routes, away from crowds",
        visitorsFeature3: "Photo stops at the most instagrammable spots",
        visitorsFeature4: "Accessible to all, even beginners",
        residentsFeature1: "Your daily bike, without the hassles",
        residentsFeature2: "Flexible weekly plans",
        residentsFeature3: "Reliable and economical",
        residentsFeature4: "Priority assistance",
        deliveryFeature1: "Rent-to-own: the bike becomes yours",
        deliveryFeature2: "Unlimited weekday trips",
        deliveryFeature3: "Maintenance included, zero surprises",
        deliveryFeature4: "The work tool that belongs to you",
        bookNow: "Book now",
        subscribe: "Subscribe",
        startJourney: "Start my journey"
      },
      gigHero: {
        tag: "FOR DELIVERY RIDERS",
        title1: "Deliver faster.",
        title2: "Become an owner.",
        title3: "Change your life.",
        subtitle: "Rent-to-own for only 150€/month. After 12 months, the bike is yours. Zero hidden fees, full maintenance included.",
        price: "125 Euros/Month* excl. VAT",
        subscription: "12-month subscription",
        availability: "availability (vs 71% elsewhere)",
        cta: "Rent to own"
      },
      features: {
        title1: "Everything you need",
        title2: "to ride",
        title3: "with peace of",
        titleHighlight: "mind.",
        feature1Title: "GPS Location",
        feature1Desc: "Real-time tracking for your peace of mind. Never lose your bike.",
        feature2Title: "Premium Bikes & Segways",
        feature2Desc: "Suitable for all levels. Choose your ideal ride to explore the city.",
        feature3Title: "Anti-theft Protection",
        feature3Desc: "Every bike insured against theft and damage. Ride with peace of mind.",
        feature4Title: "Custom Routes",
        feature4Desc: "Routes designed by passionate Strasbourg locals. Discover the city's secrets.",
        feature5Title: "Free Maintenance",
        feature5Desc: "Revisions and repairs at no cost. Always ready to ride.",
        feature6Title: "Guaranteed Savings",
        feature6Desc: "Up to €23,700 over 5 years. A smart investment for your mobility."
      },
      cta: {
        title: "Strasbourg",
        titleLine2: "is waiting for",
        titleHighlight: "you.",
        subtitle: "Join thousands of explorers cruising the city on two wheels.",
        letsGo: "LET'S GO",
        learnMore: "LEARN MORE"
      },
      footer: {
        tagline: "Premium electric bike experiences in Strasbourg, France.",
        company: "Company",
        about: "About",
        careers: "Careers",
        contact: "Contact",
        product: "Product",
        rides: "Rides",
        pricing: "Pricing",
        faq: "FAQ",
        social: "Social",
        rights: "All rights reserved."
      }
    }
  },
  fr: {
    translation: {
      nav: {
        home: "Accueil",
        about: "À propos",
        visitors: "Visiteurs",
        residents: "Résidents",
        safeSmart: "Sécurité & Tech",
        contact: "Contact"
      },
      hero: {
        title: "Strasbourg se révèle",
        titleHighlight: "au crépuscule.",
        subtitle: "Découvrez la ville autrement. Nos balades en vélo électrique vous emmènent là où les guides n'osent pas aller.",
        bookRide: "RÉSERVER UNE BALADE",
        discoverBikes: "DÉCOUVRIR NOS VÉLOS"
      },
      about: {
        title: "Bien plus qu'une",
        titleHighlight: "simple location.",
        subtitle: "VéloRouge, c'est l'expérience Strasbourg réinventée. Chaque parcours raconte une histoire. Chaque coup de pédale vous rapproche de l'âme de la ville.",
        stat1: "vélos disponibles",
        stat2: "itinéraires secrets",
        stat3: "explorateurs conquis"
      },
      rides: {
        title: "Quatre façons",
        titleLine2: "de vibrer à",
        titleHighlight: "Strasbourg.",
        ride1: "Strasbourg Sundowner",
        ride2: "Bar Hop Petite France",
        ride3: "Strasbourg Insolite",
        ride4: "Échappée Franco-Allemande",
        from: "À partir de",
        favorite: "COUP DE CŒUR",
        popular: "POPULAIRE"
      },
      pricing: {
        title: "Une ville.",
        titleLine2: "Trois façons de la",
        titleHighlight: "vivre.",
        visitors: "Visiteurs & Touristes",
        residents: "Résidents & Étudiants",
        delivery: "Livreurs & Coursiers",
        perRide: "/balade",
        perWeek: "/semaine",
        perMonth: "/mois",
        ownerIn12: "propriétaire en 12 mois",
        visitorsFeature1: "Parcours guidé par un local passionné",
        visitorsFeature2: "Itinéraires secrets, loin des foules",
        visitorsFeature3: "Pauses photo aux spots les plus instagrammables",
        visitorsFeature4: "Accessible à tous, même débutants",
        residentsFeature1: "Votre vélo du quotidien, sans les contraintes",
        residentsFeature2: "Formules souples à la semaine",
        residentsFeature3: "Fiable et économique",
        residentsFeature4: "Assistance prioritaire",
        deliveryFeature1: "Location-vente : le vélo devient le vôtre",
        deliveryFeature2: "Trajets illimités en semaine",
        deliveryFeature3: "Entretien inclus, zéro surprise",
        deliveryFeature4: "L'outil de travail qui vous appartient",
        bookNow: "Réserver maintenant",
        subscribe: "Je m'abonne",
        startJourney: "Démarrer mon parcours"
      },
      gigHero: {
        tag: "POUR LES LIVREURS",
        title1: "Livrez plus vite.",
        title2: "Devenez proprio.",
        title3: "Changez de vie.",
        subtitle: "Location-vente à seulement 150€/mois. Après 12 mois, le vélo est à vous. Zéro frais cachés, entretien complet inclus.",
        price: "125 Euros/Mois* HT",
        subscription: "Abonnement de 12 mois",
        availability: "de disponibilité (vs 71% ailleurs)",
        cta: "Louer pour posséder"
      },
      features: {
        title1: "Tout ce qu'il faut",
        title2: "pour rouler",
        title3: "l'esprit",
        titleHighlight: "libre.",
        feature1Title: "Localisation GPS",
        feature1Desc: "Suivi en temps réel pour votre tranquillité. Ne perdez jamais votre vélo.",
        feature2Title: "Vélos & Segways premium",
        feature2Desc: "Adapté à tous les niveaux. Choisissez votre monture idéale pour explorer la ville.",
        feature3Title: "Protection antivol",
        feature3Desc: "Chaque vélo assuré contre vol et dommages. Roulez l'esprit tranquille.",
        feature4Title: "Parcours sur mesure",
        feature4Desc: "Itinéraires conçus par des Strasbourgeois passionnés. Découvrez les secrets de la ville.",
        feature5Title: "Entretien offert",
        feature5Desc: "Révisions et réparations sans frais. Toujours prêt à rouler.",
        feature6Title: "Économies garanties",
        feature6Desc: "Jusqu'à 23 700€ sur 5 ans. Un investissement intelligent pour votre mobilité."
      },
      cta: {
        title: "Strasbourg",
        titleLine2: "n'attend que",
        titleHighlight: "vous.",
        subtitle: "Rejoignez les milliers d'explorateurs qui sillonnent la ville sur deux roues.",
        letsGo: "C'EST PARTI",
        learnMore: "EN SAVOIR PLUS"
      },
      footer: {
        tagline: "Expériences vélo électrique premium à Strasbourg, France.",
        company: "Entreprise",
        about: "À propos",
        careers: "Carrières",
        contact: "Contact",
        product: "Produit",
        rides: "Balades",
        pricing: "Tarifs",
        faq: "FAQ",
        social: "Réseaux",
        rights: "Tous droits réservés."
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
