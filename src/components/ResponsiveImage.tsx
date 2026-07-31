import { Helmet } from "react-helmet-async";

export interface PictureData {
  sources: Record<string, string>;
  img: { src: string; w: number; h: number };
}

interface ResponsiveImageProps {
  image: PictureData;
  alt: string;
  className?: string;
  sizes?: string;
  /** Mark THE LCP image for this route: renders eagerly, high fetch priority, and <link rel="preload">s it. */
  priority?: boolean;
  /** Render eagerly (no lazy-loading observer) without claiming the page's single preload slot. Use for small always-visible chrome like a nav logo. */
  eager?: boolean;
}

/**
 * Renders an art-directed <picture> (AVIF -> WebP -> original format) with
 * explicit width/height (prevents CLS) and lazy-loading by default.
 * The <picture> wrapper uses `display: contents` (Tailwind `contents`) so it
 * never affects the surrounding layout/flex/absolute positioning of the <img>.
 */
const ResponsiveImage = ({ image, alt, className, sizes = "100vw", priority = false, eager = false }: ResponsiveImageProps) => {
  const preloadSrcSet = image.sources.avif ?? image.sources.webp;
  const loadEagerly = priority || eager;

  return (
    <picture className="contents">
      {priority && (
        <Helmet>
          <link
            rel="preload"
            as="image"
            href={image.img.src}
            imageSrcSet={preloadSrcSet}
            imageSizes={sizes}
            fetchPriority="high"
          />
        </Helmet>
      )}
      {Object.entries(image.sources).map(([format, srcSet]) => (
        <source key={format} type={`image/${format}`} srcSet={srcSet} sizes={sizes} />
      ))}
      <img
        src={image.img.src}
        width={image.img.w}
        height={image.img.h}
        alt={alt}
        className={className}
        loading={loadEagerly ? "eager" : "lazy"}
        decoding={loadEagerly ? "sync" : "async"}
        fetchPriority={priority ? "high" : "auto"}
      />
    </picture>
  );
};

export default ResponsiveImage;
