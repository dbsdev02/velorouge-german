import { useLanguage } from "@/hooks/useLanguage";
import { useEffect } from "react";

// Blog translation mapping - add your blog translations here
const blogTranslations: Record<string, { en: any; fr: any }> = {
  // Add translations for each blog by ID
  // Example:
  // "1": {
  //   en: {
  //     title: "Discover Strasbourg by Bike",
  //     excerpt: "The best way to explore the city...",
  //     content: "Full content in English..."
  //   },
  //   fr: {
  //     title: "Découvrir Strasbourg à vélo",
  //     excerpt: "La meilleure façon d'explorer la ville...",
  //     content: "Contenu complet en français..."
  //   }
  // }
};

// Hook to translate blog content
export const useTranslateBlog = () => {
  const { currentLanguage } = useLanguage();

  const translateBlog = (blog: any) => {
    if (!blog) return blog;

    // Use blog.id or blog._id depending on your backend
    const blogId = blog.id || blog._id;
    const translation = blogTranslations[blogId];
    
    if (translation && translation[currentLanguage]) {
      // Return translated version
      return {
        ...blog,
        title: translation[currentLanguage].title,
        excerpt: translation[currentLanguage].excerpt,
        content: translation[currentLanguage].content
      };
    }

    // If no translation exists, return original
    return blog;
  };

  const translateBlogs = (blogs: any[]) => {
    if (!blogs) return [];
    return blogs.map(blog => translateBlog(blog));
  };

  return { translateBlog, translateBlogs, currentLanguage };
};

// Helper to add new blog translation
export const addBlogTranslation = (blogId: string, enContent: any, frContent: any) => {
  blogTranslations[blogId] = {
    en: enContent,
    fr: frContent
  };
};
