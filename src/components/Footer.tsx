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
      {/* Newsletter Section */}
      <div className="mb-12 pb-12 border-b border-dark-surface">
        <h3 className="font-display text-2xl md:text-3xl font-black text-dark-foreground mb-4">
          {t('footer.newsletterTitle')}
        </h3>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md">
          <input
            type="email"
            placeholder={t('footer.emailPlaceholder')}
            className="flex-1 bg-dark-surface border border-dark-surface rounded-none px-4 py-3 text-sm text-dark-foreground placeholder:text-dark-foreground/40 focus:outline-none focus:border-primary transition-colors"
          />
          <button className="bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:bg-primary/90 transition-colors whitespace-nowrap">
            {t('footer.subscribe')}
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        <div>
          <Link to="/" className="flex items-center">
            <img src={logo} alt="VeloRouge" className="h-10" />
          </Link>
          <p className="mt-2 text-base max-w-xs">{t('footer.tagline')}</p>
        </div>
        <div className="flex gap-12 text-base">
          <div className="space-y-2">
            <div className="text-dark-foreground font-semibold mb-3">{t('footer.company')}</div>
            <Link to="/about" className="block hover:text-dark-foreground transition-colors">{t('footer.about')}</Link>
            <Link to="/visitors" className="block hover:text-dark-foreground transition-colors">{t('footer.rides')}</Link>
            <Link to="/residents" className="block hover:text-dark-foreground transition-colors">{t('footer.residents')}</Link>
            <Link to="/contact" className="block hover:text-dark-foreground transition-colors">{t('footer.contact')}</Link>
            <Link to="/blog" className="block hover:text-dark-foreground transition-colors">Blog</Link>
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
      <div className="mt-12 pt-8 border-t border-dark-surface text-sm">
        © 2026 VéloRouge. {t('footer.rights')}
      </div>
    </div>
  </footer>
  );
};

export default Footer;
