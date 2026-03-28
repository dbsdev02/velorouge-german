import { useTranslation } from "react-i18next";

const Marquee = () => {
  const { t } = useTranslation();
  const text = t('marquee.text');

  return (
    <div className="bg-primary text-primary-foreground py-[60px] overflow-hidden relative">
      <div className="flex animate-marquee whitespace-nowrap">
        <span className="font-display text-2xl italic font-normal tracking-wide inline-block" style={{color: 'rgba(245, 240, 232, 0.9)'}}>
          {text}{text}{text}{text}
        </span>
        <span className="font-display text-2xl italic font-normal tracking-wide inline-block" style={{color: 'rgba(245, 240, 232, 0.9)'}}>
          {text}{text}{text}{text}
        </span>
      </div>
    </div>
  );
};

export default Marquee;
