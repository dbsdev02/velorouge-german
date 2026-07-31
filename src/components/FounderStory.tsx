import { useTranslation } from "react-i18next";
import founderImg from "@/assets/founder2.png?w=400;576&format=avif;webp;jpg&as=picture";
import ResponsiveImage from "@/components/ResponsiveImage";

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
            <ResponsiveImage
              image={founderImg}
              alt="Founder of VéloRouge"
              className="w-full h-full object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
          <div className="space-y-5">
            <p className="text-lg md:text-xl leading-relaxed text-foreground font-medium italic">
              "{t('founderStory.quote')}"
            </p>
            <p className="text-base md:text-lg leading-relaxed text-foreground">
              {t('founderStory.para2')}
            </p>
            <p className="text-base md:text-lg leading-relaxed text-foreground">
              {t('founderStory.para3')}
            </p>
            <p className="text-base md:text-lg leading-relaxed text-foreground">
              {t('founderStory.para4')}
            </p>
            <p className="pt-2 text-base font-semibold text-primary">
              {t('founderStory.signature')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderStory;
