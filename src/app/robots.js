export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [],
    },
    sitemap: 'https://www.kit.darioevaristobellotta.de/sitemap.xml',
  };
}
