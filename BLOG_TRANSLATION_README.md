# Blog Translation System

## How It Works

When you click FR/EN buttons in the navbar, the entire website translates including blog content from your backend.

## Setup Complete ✅

1. **BlogPage.tsx** - Now translates all blog posts when language changes
2. **BlogDetailPage.tsx** - Now translates individual blog when language changes
3. **blogTranslation.ts** - Translation utility
4. **blogTranslationsData.ts** - Where you add translations

## How to Add Translations for New Blogs

### Step 1: Get Blog ID from Backend
When you create a blog in your backend, note its ID (e.g., "1", "abc123", etc.)

### Step 2: Add Translation
Open `src/utils/blogTranslationsData.ts` and add:

```typescript
addBlogTranslation(
  "YOUR_BLOG_ID", // Replace with actual blog ID from backend
  // English version
  {
    title: "Your English Title",
    excerpt: "Your English excerpt...",
    content: `<p>Your full English HTML content...</p>`
  },
  // French version
  {
    title: "Votre titre français",
    excerpt: "Votre extrait français...",
    content: `<p>Votre contenu HTML complet en français...</p>`
  }
);
```

### Step 3: Test
1. Go to `/blog` page
2. Click FR button - should show French
3. Click EN button - should show English
4. Both list and detail pages will translate automatically

## Example

```typescript
// In blogTranslationsData.ts

addBlogTranslation(
  "1",
  {
    title: "Best Bike Routes in Strasbourg",
    excerpt: "Discover the most scenic cycling paths in the city.",
    content: `
      <h2>Top 5 Routes</h2>
      <p>Strasbourg offers amazing bike routes...</p>
    `
  },
  {
    title: "Meilleurs itinéraires vélo à Strasbourg",
    excerpt: "Découvrez les pistes cyclables les plus pittoresques de la ville.",
    content: `
      <h2>Top 5 des itinéraires</h2>
      <p>Strasbourg offre d'incroyables itinéraires vélo...</p>
    `
  }
);
```

## Important Notes

- **Blog ID**: Must match exactly with your backend blog ID
- **HTML Content**: You can include full HTML in the content field
- **Automatic**: Once added, translation happens automatically when users switch languages
- **Fallback**: If no translation exists, shows original English content from backend

## Workflow

1. Create blog in backend (English)
2. Get blog ID
3. Add translation in `blogTranslationsData.ts`
4. Done! Blog now translates automatically
