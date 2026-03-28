import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Mail } from "lucide-react";

const Newsletter = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="py-16 bg-primary">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6">
            <Mail className="w-8 h-8 text-white" strokeWidth={1.5} />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            {t('newsletter.title')}
          </h2>
          <p className="text-white/80 text-lg mb-8">
            {t('newsletter.subtitle')}
          </p>
          
          {submitted ? (
            <div className="bg-white/10 border border-white/20 rounded-lg p-4 text-white">
              {t('newsletter.success')}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('newsletter.placeholder')}
                required
                className="flex-1 px-6 py-4 rounded-lg border-2 border-white/20 bg-white/10 text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors whitespace-nowrap"
              >
                {t('newsletter.button')}
              </button>
            </form>
          )}
          
          <p className="text-white/60 text-sm mt-4">
            {t('newsletter.privacy')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
