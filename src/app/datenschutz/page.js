import React from 'react';

export const metadata = {
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung von Dario Evaristo Bellotta',
};

export default function DatenschutzPage() {
  return (
    <div className="container" style={{ paddingTop: '3rem', paddingBottom: '4rem', maxWidth: '50rem' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Datenschutzerklärung</h1>
      
      <div className="m3-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        <section>
          <h2 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>1. Datenschutz auf einen Blick</h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>2. Verantwortliche Stelle</h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
            Dario Evaristo Bellotta<br />
            Am Bächelchen 8<br />
            60388 Frankfurt am Main<br />
            E-Mail: hello@darioevaristobellotta.de
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>3. Datenerfassung auf dieser Website</h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Server-Log-Files werden vom Hoster (Vercel) automatisch erhoben und gespeichert.
          </p>
        </section>
      </div>
    </div>
  );
}
