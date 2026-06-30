import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  lang?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  keywords?: string;
}

const localeMap: Record<string, string> = {
  de: 'de_DE',
  en: 'en_GB',
  fr: 'fr_FR',
};

const SEO = ({
  title,
  description,
  canonical,
  ogImage = '/logo.png',
  ogType = 'website',
  lang = 'de',
  publishedTime,
  modifiedTime,
  author,
  keywords,
}: SEOProps) => {
  const fullUrl = `https://velorouge.de${canonical}`;
  const ogLocale = localeMap[lang] ?? 'de_DE';
  const ogImageFull = ogImage.startsWith('http') ? ogImage : `https://velorouge.de${ogImage}`;

  const articleSchema = ogType === 'article' ? JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url: fullUrl,
    image: ogImageFull,
    author: { '@type': 'Person', name: author ?? 'VéloRouge' },
    publisher: {
      '@type': 'Organization',
      name: 'VéloRouge',
      logo: { '@type': 'ImageObject', url: 'https://velorouge.de/logo.png' },
    },
    datePublished: publishedTime,
    dateModified: modifiedTime ?? publishedTime,
    inLanguage: lang,
  }) : null;

  return (
    <Helmet>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullUrl} />

      {/* Hreflang */}
      <link rel="alternate" hreflang="de" href={`https://velorouge.de${canonical}`} />
      <link rel="alternate" hreflang="en" href={`https://velorouge.de${canonical}`} />
      <link rel="alternate" hreflang="fr" href={`https://velorouge.de${canonical}`} />
      <link rel="alternate" hreflang="x-default" href={`https://velorouge.de${canonical}`} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={ogImageFull} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:type" content={ogType} />
      <meta property="og:locale" content={ogLocale} />
      <meta property="og:site_name" content="VéloRouge" />
      {ogType === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {ogType === 'article' && (modifiedTime ?? publishedTime) && (
        <meta property="article:modified_time" content={modifiedTime ?? publishedTime} />
      )}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@VeloRouge" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageFull} />

      {/* Article structured data */}
      {articleSchema && (
        <script type="application/ld+json">{articleSchema}</script>
      )}
    </Helmet>
  );
};

export default SEO;
