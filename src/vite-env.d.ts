/// <reference types="vite/client" />

declare module "*&as=picture" {
  const asPicture: {
    sources: Record<string, string>;
    img: { src: string; w: number; h: number };
  };
  export default asPicture;
}

declare module "*&as=url" {
  const asUrl: string;
  export default asUrl;
}
