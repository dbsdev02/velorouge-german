import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Calendar, ArrowLeft, User, Clock, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const API_URL = "http://localhost:5000/api";

const BlogDetailPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<any>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return;
    fetch(`${API_URL}/blogs/public/${slug}`)
      .then(r => r.json())
      .then(data => { if (data.blog) setPost(data.blog); else setNotFound(true); })
      .catch(() => setNotFound(true));
  }, [slug]);

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

  if (notFound) {
    return (
      <main>
        <Navbar />
        <div className="container pt-40 pb-24 text-center">
          <h1 className="font-display text-4xl font-black mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
          <Link to="/blog" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold hover:bg-primary/90 transition-colors">
            <ArrowLeft size={16} /> Back to Journal
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  if (!post) {
    return (
      <main>
        <Navbar />
        <div className="container pt-40 pb-24 max-w-3xl animate-pulse space-y-4">
          <div className="h-4 bg-muted rounded w-1/4" />
          <div className="h-10 bg-muted rounded w-3/4" />
          <div className="h-4 bg-muted rounded w-1/3" />
          <div className="aspect-[16/9] bg-muted rounded" />
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <Navbar />

      <article className="pt-32 pb-24">
        <div className="container max-w-3xl">

          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10">
            <ArrowLeft size={15} /> Back to Journal
          </Link>

          {post.category?.name && (
            <span className="text-xs font-semibold text-primary tracking-widest uppercase">{post.category.name}</span>
          )}

          <h1 className="font-display text-4xl md:text-6xl font-black leading-tight mt-3 mb-6">
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">{post.excerpt}</p>
          )}

          <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground border-y border-border py-4 mb-10">
            <span className="flex items-center gap-1.5"><User size={14} /> {post.author?.name}</span>
            <span className="flex items-center gap-1.5"><Calendar size={14} /> {formatDate(post.publishedAt)}</span>
            {post.readingTime && <span className="flex items-center gap-1.5"><Clock size={14} /> {post.readingTime} min read</span>}
          </div>

          {post.featuredImage && (
            <div className="aspect-[16/9] overflow-hidden mb-12">
              <img src={post.featuredImage} alt={post.title} className="w-full h-full object-cover" />
            </div>
          )}

          <div
            className="prose prose-lg max-w-none text-foreground
              prose-headings:font-display prose-headings:font-black
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-img:rounded-none prose-blockquote:border-primary"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {post.tags?.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 mt-12 pt-8 border-t border-border">
              <Tag size={14} className="text-muted-foreground" />
              {post.tags.map((tag: any) => (
                <span key={tag.id} className="text-xs border border-border px-3 py-1 text-muted-foreground">
                  {tag.name}
                </span>
              ))}
            </div>
          )}

          <div className="mt-12 pt-8 border-t border-border">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
              <ArrowLeft size={15} /> All Articles
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
};

export default BlogDetailPage;
