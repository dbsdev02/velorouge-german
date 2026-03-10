import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import smartHelmet from "@/assets/smart-helmet.jpg";
import smartGps from "@/assets/gps.png";
import { Shield, MapPin, Bell, Smartphone, Lock, Eye, Zap, Wifi } from "lucide-react";

const safetyFeatures = [
  { icon: Shield, title: "Protection antivol", desc: "Chaque vélo électrique VéloRouge est assuré contre le vol. Suivi GPS 24h/24 et 7j/7 avec alertes instantanées en cas de déplacement non autorisé." },
  { icon: Lock, title: "Verrouillage intelligent", desc: "Verrouillez et déverrouillez votre vélo électrique depuis votre téléphone. Sans clés ni codes : un simple geste suffit." },
  { icon: Bell, title: "Détection d'accidents", desc: "Des capteurs intégrés détectent les chutes et les impacts. Vos contacts d'urgence sont automatiquement prévenus si vous ne répondez pas." },
  { icon: Eye, title: "Visibilité nocturne", desc: "Éclairage LED intégré avec luminosité automatique. Soyez visible à plus de 200 mètres, quelles que soient les conditions." },
];

const smartFeatures = [
  { icon: MapPin, title: "Suivi GPS en direct", desc: "Sachez où se trouve votre vélo électrique à tout moment. Position en temps réel visible dans l'application VéloRouge." },
  { icon: Smartphone, title: "Contrôle via l'application", desc: "Gérez votre vélo électrique, suivez vos trajets, vérifiez l'état de l'entretien et réservez des itinéraires, le tout depuis une seule application." },
  { icon: Zap, title: "Surveillance de la batterie", desc: "Pour les abonnés, surveillez le niveau de la batterie et trouvez la borne de recharge la plus proche." },
  { icon: Wifi, title: "Mises à jour OTA", desc: "Votre vélo électrique devient plus intelligent au fil du temps. Les mises à jour du micrologiciel sont déployées sans fil, améliorant automatiquement ses performances." },
];

const SafeSmartPage = () => (
  <main>
    <Navbar />

    {/* Hero */}
    <section className="pt-32 pb-16 bg-dark text-dark-foreground">
      <div className="container">
        <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-4">Sécurité et intelligence</p>
        <h1 className="font-display text-5xl md:text-7xl font-black leading-[0.95] max-w-3xl">
          Roulez en toute sécurité.
          <br />
          Roulez <em className="text-primary">intelligemment.</em>
        </h1>
        <p className="mt-6 text-dark-foreground/60 max-w-lg text-lg">
          Chaque vélo électrique VéloRouge est équipé de technologies de pointe en matière de sécurité et d'intelligence.
        </p>
      </div>
    </section>

    {/* Safety */}
    <section className="py-24 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-black leading-tight">
              La sécurité est
              <br />
              une <em className="text-primary">priorité.</em>
            </h2>
            <div className="mt-10 space-y-8">
              {safetyFeatures.map((f) => (
                <div key={f.title} className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <f.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold">{f.title}</h3>
                    <p className="text-base text-muted-foreground mt-1">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="aspect-square overflow-hidden">
            <img src={smartHelmet} alt="Smart helmet" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    {/* Smart */}
    <section className="py-24 bg-dark text-dark-foreground">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="aspect-square overflow-hidden md:order-1">
            <img src={smartGps} alt="GPS navigation on bike" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="md:order-2">
            <h2 className="font-display text-4xl md:text-5xl font-black leading-tight">
              Plus intelligent
              <br />
              à chaque <em className="text-primary">trajet.</em>
            </h2>
            <div className="mt-10 space-y-8">
              {smartFeatures.map((f) => (
                <div key={f.title} className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <f.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold">{f.title}</h3>
                    <p className="text-base text-dark-foreground/60 mt-1">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="py-24 bg-background">
      <div className="container text-center">
        <h2 className="font-display text-4xl md:text-5xl font-black leading-tight">
          Les chiffres parlent <em className="text-primary">d'eux-mêmes.</em>
        </h2>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "0", label: "Accidents en 2025" },
            { value: "99,8 %", label: "Fiabilité" },
            { value: "< 2 min", label: "Temps de réponse moyen" },
            { value: "24/7", label: "Surveillance en direct 24 h/24 et 7 j/7" },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-display text-4xl font-black text-primary">{s.value}</div>
              <div className="text-sm text-muted-foreground mt-2">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </main>
);

export default SafeSmartPage;
