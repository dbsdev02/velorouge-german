import { useParams, Link } from "react-router-dom";
import { Calendar, ArrowLeft, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useLanguage } from "@/hooks/useLanguage";
import { blogPosts, CategoryTag } from "./BlogPage";

const BlogDetailPage = () => {
  const { slug } = useParams();
  const { currentLanguage } = useLanguage();
  const isFr = currentLanguage?.startsWith("fr");
  const isDe = currentLanguage?.startsWith("de");

  const post = blogPosts.find((p) => p.slug === slug);

  const backLabel = isFr ? "Retour au Journal" : isDe ? "Zurück zum Journal" : "Back to Journal";

  if (!post) {
    return (
      <main>
        <Navbar />
        <div className="container pt-40 pb-24 text-center">
          <h1 className="font-display text-4xl font-black mb-4">
            {isFr ? "Article introuvable" : isDe ? "Artikel nicht gefunden" : "Article Not Found"}
          </h1>
          <p className="text-muted-foreground mb-8">
            {isFr
              ? "L'article que vous cherchez n'existe pas."
              : isDe ? "Der gesuchte Artikel existiert nicht."
              : "The article you're looking for doesn't exist."}
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            <ArrowLeft size={16} /> {backLabel}
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const lang = isFr ? "fr" : isDe ? "de" : "en";

  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  // ISO date map for structured data
  const isoDateMap: Record<string, string> = {
    "strasbourg-ebike-where-to-ride": "2025-04-05",
    "strasbourg-with-kids-ebike": "2025-04-12",
    "alsace-wine-route-ebike": "2025-04-20",
    "cross-border-ebike-strasbourg-germany": "2025-04-28",
    "strasbourg-port-of-call-e-bike-half-day": "2025-05-15",
    "strasbourg-christmas-market-e-bike": "2025-11-20",
    "e-bike-or-segway-strasbourg": "2025-12-05",
    "connected-e-bike-safety-strasbourg": "2026-01-15",
  };

  return (
    <main className="bg-background">
      <SEO
        title={`${post.title[lang]} | VéloRouge Journal`}
        description={post.excerpt[lang]}
        canonical={`/blog/${post.slug}`}
        ogType="article"
        lang={lang}
        author={post.author}
        publishedTime={isoDateMap[post.slug]}
      />
      <Navbar />

      {/* ── Article Hero ── */}
      <section className="bg-dark pt-28 pb-0">
        <div className="container max-w-4xl pt-8 pb-12">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs font-semibold text-dark-foreground/40 hover:text-primary tracking-[0.15em] uppercase transition-colors mb-10"
          >
            <ArrowLeft size={13} /> {backLabel}
          </Link>
          <CategoryTag category={post.category} className="mb-4" />
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-dark-foreground leading-[0.95] mb-6">
            {post.title[lang]}
          </h1>
          <p className="text-dark-foreground/50 text-lg leading-relaxed max-w-2xl mb-8">
            {post.excerpt[lang]}
          </p>
          <div className="flex flex-wrap items-center gap-6 text-xs text-dark-foreground/40 border-t border-white/10 pt-6">
            <span className="flex items-center gap-1.5"><User size={12} /> {post.author}</span>
            <span className="flex items-center gap-1.5"><Calendar size={12} /> {post.date[lang]}</span>
          </div>
        </div>
        <div className="aspect-[21/9] overflow-hidden">
          <img src={post.image} alt={post.title[lang]} className="w-full h-full object-cover opacity-80" />
        </div>
      </section>

      {/* ── Article Body ── */}
      <article className="py-24">
        <div className="container max-w-2xl">
          <div
            className="blog-content prose prose-base max-w-none text-foreground
              prose-headings:font-display prose-headings:font-black prose-headings:leading-tight
              prose-h2:text-2xl prose-h2:border-l-2 prose-h2:border-primary prose-h2:pl-4 prose-h2:mt-24 prose-h2:mb-8 prose-h2:pt-8 prose-h2:border-t prose-h2:border-t-border
              prose-h3:text-lg prose-h3:mt-14 prose-h3:mb-5
              prose-p:mb-8 prose-p:mt-0 prose-p:leading-[1.85] prose-p:text-foreground/80
              prose-li:my-3 prose-li:leading-relaxed
              prose-ul:my-8 prose-ol:my-8
              prose-strong:text-foreground prose-strong:font-semibold
              prose-a:text-primary prose-a:font-semibold prose-a:underline prose-a:decoration-primary prose-a:underline-offset-4 hover:prose-a:text-primary/80 hover:prose-a:decoration-primary/60
              prose-img:rounded-none prose-img:my-10
              prose-blockquote:border-l-2 prose-blockquote:border-primary prose-blockquote:pl-4 prose-blockquote:not-italic prose-blockquote:my-10"
            dangerouslySetInnerHTML={{ __html: post.content[lang] }}
          />
        </div>
      </article>

      {/* ── More Articles ── */}
      {otherPosts.length > 0 && (
        <section className="border-t border-border py-20">
          <div className="container">
            <p className="text-xs font-semibold text-primary tracking-[0.2em] uppercase mb-10">
              {isFr ? "Autres articles" : isDe ? "Weitere Artikel" : "More Articles"}
            </p>
            <div className="grid md:grid-cols-3 gap-x-8 gap-y-12">
              {otherPosts.map((p) => (
                <Link key={p.slug} to={`/blog/${p.slug}`} className="group block">
                  <div className="aspect-[3/2] overflow-hidden bg-muted mb-4 relative">
                    <img
                      src={p.image}
                      alt={p.title[lang]}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3">
                      <CategoryTag category={p.category} />
                    </div>
                  </div>
                  <h3 className="font-display text-lg font-black mt-1 leading-tight group-hover:text-primary transition-colors line-clamp-2">
                    {p.title[lang]}
                  </h3>
                </Link>
              ))}
            </div>
            <div className="mt-12 pt-8 border-t border-border">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-xs font-semibold text-primary tracking-[0.15em] uppercase hover:gap-3 transition-all"
              >
                <ArrowLeft size={13} /> {isFr ? "Tous les articles" : isDe ? "Alle Artikel" : "All Articles"}
              </Link>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
};

export default BlogDetailPage;
