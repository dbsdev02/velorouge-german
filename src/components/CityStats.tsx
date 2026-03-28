import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { Users, Clock, Award, Gift } from "lucide-react";

const CityStats = () => {
  const { t } = useTranslation();
  const [counts, setCounts] = useState([0, 0, 0, 0]);

  const stats = [
    {
      icon: Users,
      target: 4000000,
      label: t('cityStats.stat1')
    },
    {
      icon: Clock,
      target: 1000,
      suffix: " " + (t('cityStats.stat2').includes('ans') ? 'ans' : 'years'),
      label: t('cityStats.stat2').replace(/\d+\s*(ans|years)\s*[—-]?\s*/i, '')
    },
    {
      icon: Award,
      text: t('cityStats.stat3Number'),
      label: t('cityStats.stat3Label')
    },
    {
      icon: Gift,
      text: t('cityStats.stat4Number'),
      label: t('cityStats.stat4Label')
    }
  ];

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setCounts(stats.map(stat => stat.target ? Math.floor((stat.target / steps) * currentStep) : 0));
      
      if (currentStep >= steps) {
        clearInterval(timer);
        setCounts(stats.map(stat => stat.target || 0));
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => {
    return num.toLocaleString('fr-FR');
  };

  return (
    <section className="py-16 bg-dark">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-3" style={{backgroundColor: '#D52519'}}>
                  <stat.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>
                <div className="font-display text-xl md:text-2xl font-bold text-white mb-2 text-center min-h-[2.5rem] flex items-center justify-center whitespace-nowrap">
                  {stat.target ? `${formatNumber(counts[index])}${stat.suffix || ''}` : stat.text}
                </div>
                <p className="text-gray-400 text-sm leading-snug text-center">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CityStats;
