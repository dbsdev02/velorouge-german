import { useTranslation } from "react-i18next";
import founderImg from "@/assets/hero2.jpg";

const FounderStory = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        <h2 className="font-display text-4xl md:text-5xl font-black leading-tight mb-16">
          {t('founderStory.title').split(' ').slice(0, -1).join(' ')} <em className="text-primary">{t('founderStory.title').split(' ').slice(-1)}</em>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="aspect-[4/5] overflow-hidden rounded-lg">
            <img 
              src={founderImg} 
              alt="Founder of VéloRouge"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <p className="text-lg md:text-xl leading-relaxed text-foreground">
              {t('founderStory.quote')}
            </p>
            <p className="mt-6 text-base font-semibold text-muted-foreground">
              {t('founderStory.signature')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderStory;
