import React from 'react';

const UPDATES = [
  { 
    version: "v1.4", 
    date: "25/07/2026", 
    desc: "UI Overhaul: Integrated official DEB logo, set Libre Baskerville brand font, streamlined hero section, and added permanent open update history log." 
  },
  { 
    version: "v1.3", 
    date: "24/07/2026", 
    desc: "Developer Experience & Vercel: Configured .env.example, @next/bundle-analyzer, and cross-platform npm scripts." 
  },
  { 
    version: "v1.2", 
    date: "24/07/2026", 
    desc: "Analytics & Privacy: Added modular GoogleTagManager (afterInteractive), trackEvent helper, and PrivacyAnalytics component." 
  },
  { 
    version: "v1.1", 
    date: "24/07/2026", 
    desc: "Performance, SEO & Web Vitals: Added dynamic sitemap.js, robots.js (with AI crawler permissions), HTTP security headers, zero-CLS OptimizedImage, and font preconnect." 
  },
  { 
    version: "v1.0", 
    date: "24/07/2026", 
    desc: "Initial release of Next.js Developer Kit by Dario Evaristo Bellotta." 
  }
];

export default function Home() {
  return (
    <div className="container" style={{ paddingTop: '3rem', paddingBottom: '4rem' }}>
      <section style={{ textAlign: 'center', marginBottom: '3.5rem' }} className="animate-slide">
        <span 
          style={{ 
            display: 'inline-block', 
            padding: '0.4rem 1rem', 
            backgroundColor: 'var(--color-green-container)', 
            color: 'hsl(var(--h-green), var(--s-green), 25%)', 
            borderRadius: 'var(--radius-full)', 
            fontSize: '0.85rem', 
            fontWeight: '600', 
            letterSpacing: '1px', 
            marginBottom: '1.25rem' 
          }}
        >
          Dario Evaristo Bellotta
        </span>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-text-dark)' }}>
          Next.js Developer Kit
        </h1>
        <p style={{ fontSize: '1.15rem', color: 'var(--color-text-muted)', maxWidth: '42rem', margin: '0 auto 2rem auto', lineHeight: '1.7' }}>
          Your minimalist starter kit for fast, modern websites. Developed by <strong>Dario Evaristo Bellotta</strong> & Google Antigravity.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="https://github.com/darioevaristobellotta/KIT" target="_blank" rel="noopener noreferrer" className="m3-btn m3-btn-secondary">
            <span>GitHub Repository</span>
            <span className="material-symbols-outlined" style={{ fontSize: '1.2rem' }}>code</span>
          </a>
        </div>
      </section>

      {/* Open Update History List Section (LearnQuizDB Style) */}
      <section className="updates-section">
        <h2 className="updates-title">Update History</h2>
        <ul className="version-list">
          {UPDATES.map((update) => (
            <li key={update.version} className="version-item animate-scale">
              <div className="version-header">
                <span className="version-tag">{update.version}</span>
                <span className="version-date">{update.date}</span>
              </div>
              <p className="version-desc">{update.desc}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
