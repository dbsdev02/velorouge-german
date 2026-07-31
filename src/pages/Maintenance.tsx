import logo from "@/assets/logo.png?w=160;320&format=avif;webp;png&as=picture";
import ResponsiveImage from "@/components/ResponsiveImage";

const Maintenance = () => (
  <div className="min-h-screen bg-dark flex flex-col items-center justify-center text-center px-6">
    <ResponsiveImage image={logo} alt="VeloRouge" className="h-14 w-auto mb-8 opacity-90" eager sizes="160px" />
    <h1 className="font-display text-4xl md:text-5xl font-black text-white mb-4">
      🚧 Under Maintenance
    </h1>
    <p className="text-dark-foreground/60 text-lg max-w-md">
      We're working on something great. We'll be back shortly — merci pour votre patience!
    </p>
  </div>
);

export default Maintenance;
