export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [],
      },
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'ClaudeBot',
          'Claude-Web',
          'PerplexityBot',
          'Google-Extended',
          'Applebot-Extended',
          'AnthropicAI',
          'CCBot',
          'cohere-ai',
          'Omgilibot',
          'FacebookBot',
          'ByteSpider'
        ],
        allow: '/',
        disallow: [],
      }
    ],
    sitemap: 'https://www.kit.darioevaristobellotta.de/sitemap.xml',
  };
}
