import { useTranslation } from 'react-i18next';

export const useLanguage = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(newLang);
  };

  return {
    currentLanguage: i18n.language,
    toggleLanguage,
    isEnglish: i18n.language === 'en',
    isFrench: i18n.language === 'fr'
  };
};
