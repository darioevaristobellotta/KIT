import React from 'react';

export const metadata = {
  title: 'Impressum',
  description: 'Impressum und Anbieterkennzeichnung von Dario Evaristo Bellotta',
};

export default function ImpressumPage() {
  return (
    <div className="container" style={{ paddingTop: '3rem', paddingBottom: '4rem', maxWidth: '50rem' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Impressum</h1>
      
      <div className="m3-card">
        <h2 style={{ fontSize: '1.2rem', marginBottom: '0.75rem' }}>Angaben gemäß § 5 TMG</h2>
        <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-muted)' }}>
          Dario Evaristo Bellotta<br />
          Webdesign & Development<br />
          Am Bächelchen 8<br />
          60388 Frankfurt am Main
        </p>

        <h2 style={{ fontSize: '1.2rem', marginBottom: '0.75rem' }}>Kontakt</h2>
        <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-muted)' }}>
          E-Mail: hello@darioevaristobellotta.de<br />
          Website: https://darioevaristobellotta.de
        </p>

        <h2 style={{ fontSize: '1.2rem', marginBottom: '0.75rem' }}>Redaktionell verantwortlich</h2>
        <p style={{ color: 'var(--color-text-muted)' }}>
          Dario Evaristo Bellotta<br />
          Am Bächelchen 8<br />
          60388 Frankfurt am Main
        </p>
      </div>
    </div>
  );
}
