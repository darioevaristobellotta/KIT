import React from 'react';

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
          STARTER TEMPLATE
        </span>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-text-dark)' }}>
          Next.js Developer Kit
        </h1>
        <p style={{ fontSize: '1.15rem', color: 'var(--color-text-muted)', maxWidth: '42rem', margin: '0 auto 2rem auto', lineHeight: '1.7' }}>
          Dein minimalistisches Grundgerüst für schnelle, moderne Webseiten. Entwickelt von <strong>Dario Evaristo Bellotta</strong> & Google Antigravity.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#features" className="m3-btn m3-btn-primary">
            <span>Features erkunden</span>
            <span className="material-symbols-outlined" style={{ fontSize: '1.2rem' }}>arrow_downward</span>
          </a>
          <a href="https://github.com/darioevaristobellotta/KIT" target="_blank" rel="noopener noreferrer" className="m3-btn m3-btn-secondary">
            <span>GitHub Repository</span>
            <span className="material-symbols-outlined" style={{ fontSize: '1.2rem' }}>code</span>
          </a>
        </div>
      </section>

      {/* Feature Cards Showcase (Google Material Design 3) */}
      <section id="features" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
        <div className="m3-card animate-scale">
          <div style={{ display: 'inline-flex', padding: '0.75rem', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--color-green-container)', marginBottom: '1rem' }}>
            <span className="material-symbols-outlined" style={{ color: 'hsl(var(--h-green), var(--s-green), 25%)' }}>palette</span>
          </div>
          <h2 style={{ fontSize: '1.3rem', marginBottom: '0.75rem' }}>Material 3 & HSL Design</h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
            Vorkonfiguriertes HSL-Farbsystem mit Tailwind-freiem Vanilla CSS, MD3 Shadows, Radii und flüssigen Micro-Animationen.
          </p>
        </div>

        <div className="m3-card animate-scale" style={{ animationDelay: '100ms' }}>
          <div style={{ display: 'inline-flex', padding: '0.75rem', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--color-lila-container)', marginBottom: '1rem' }}>
            <span className="material-symbols-outlined" style={{ color: 'hsl(var(--h-lila), var(--s-lila), 25%)' }}>menu_open</span>
          </div>
          <h2 style={{ fontSize: '1.3rem', marginBottom: '0.75rem' }}>Responsive Nav & Footer</h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
            Clean Navigation aus LearnQuizDB mit Mobile Burger-Menü, Social Icons (Instagram, YouTube, LinkedIn) und Legal-Links.
          </p>
        </div>

        <div className="m3-card animate-scale" style={{ animationDelay: '200ms' }}>
          <div style={{ display: 'inline-flex', padding: '0.75rem', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--color-orange-container)', marginBottom: '1rem' }}>
            <span className="material-symbols-outlined" style={{ color: 'hsl(var(--h-orange), var(--s-orange), 25%)' }}>search_check</span>
          </div>
          <h2 style={{ fontSize: '1.3rem', marginBottom: '0.75rem' }}>SEO & Schema.org</h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
            Integriertes Schema.org JSON-LD (WebSite, Organization, Person), Next.js Metadata API, Google Fonts & Cookie Banner.
          </p>
        </div>
      </section>
    </div>
  );
}
