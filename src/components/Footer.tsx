import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Instagram } from "lucide-react";
import { Music2 } from "lucide-react";

const Footer = () => {
  const { t } = useTranslation();
  
  return (
  <footer className="bg-dark border-t border-dark-surface text-dark-foreground/60 py-12">
    <div className="container">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        <div>
          <Link to="/" className="flex items-center">
            <img src={logo} alt="VeloRouge" className="h-10" />
          </Link>
          <p className="mt-2 text-sm max-w-xs">{t('footer.tagline')}</p>
        </div>
        <div className="flex gap-12 text-sm">
          <div className="space-y-2">
            <div className="text-dark-foreground font-semibold mb-3">{t('footer.company')}</div>
            <Link to="/about" className="block hover:text-dark-foreground transition-colors">{t('footer.about')}</Link>
            <Link to="/visitors" className="block hover:text-dark-foreground transition-colors">{t('footer.rides')}</Link>
            <Link to="/residents" className="block hover:text-dark-foreground transition-colors">{t('footer.residents')}</Link>
            <Link to="/contact" className="block hover:text-dark-foreground transition-colors">{t('footer.contact')}</Link>
          </div>
          <div className="space-y-2">
            <div className="text-dark-foreground font-semibold mb-3">{t('footer.quickLinks')}</div>
            <Link to="/" className="block hover:text-dark-foreground transition-colors">{t('footer.home')}</Link>
            <a href="/#pricing" className="block hover:text-dark-foreground transition-colors">{t('footer.pricing')}</a>
            <Link to="/about" className="block hover:text-dark-foreground transition-colors">{t('footer.faq')}</Link>
            <Link to="/safe-smart" className="block hover:text-dark-foreground transition-colors">{t('footer.safeSmart')}</Link>
          </div>
          <div className="space-y-2">
            <div className="text-dark-foreground font-semibold mb-3">{t('footer.social')}</div>
            <a href="http://instagram.com/velorougefrance" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-dark-foreground transition-colors">
              <Instagram className="w-4 h-4" />
              Instagram
            </a>
            <a href="http://tiktok.com/@velorougefrance" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-dark-foreground transition-colors">
              <Music2 className="w-4 h-4" />
              TikTok
            </a>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-dark-surface text-xs">
        © 2026 VéloRouge. {t('footer.rights')}
      </div>
    </div>
  </footer>
  );
};

export default Footer;
