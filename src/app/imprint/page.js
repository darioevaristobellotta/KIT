export const metadata = {
  title: "Imprint | Dario Evaristo Bellotta",
  description: "Legal disclosure and imprint details according to § 5 TMG for Dario Evaristo Bellotta.",
};

export default function ImprintPage() {
  return (
    <div className="container" style={{ paddingTop: '3rem', paddingBottom: '4rem', maxWidth: '50rem' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Imprint</h1>
      
      <div className="m3-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        <section>
          <h2 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Legal Disclosure (Imprint) according to § 5 TMG</h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
            <strong>Information according to § 5 German Telemedia Act (TMG)</strong>
          </p>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', marginTop: '0.5rem' }}>
            Dario Evaristo Bellotta<br />
            Am Bächelchen 8<br />
            60388 Frankfurt am Main<br />
            Germany
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Represented by</h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
            Dario Evaristo Bellotta
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Contact</h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
            Email: <a href="mailto:hello@darioevaristobellotta.de" style={{ textDecoration: 'underline' }}>hello@darioevaristobellotta.de</a><br />
            Website: <a href="https://darioevaristobellotta.de" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>https://darioevaristobellotta.de</a>
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Disclaimer</h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', marginBottom: '0.75rem' }}>
            <strong>Liability for Content</strong><br />
            The contents of these pages were created with the utmost care. However, we cannot guarantee the accuracy, completeness or currentness of the content. As a service provider, we are responsible for our own content on these pages in accordance with § 7 (1) TMG and general laws.
          </p>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
            <strong>Liability for Links</strong><br />
            Our website contains links to external websites of third parties over whose content we have no control. Therefore, we cannot assume any liability for these external contents.
          </p>
        </section>
      </div>
    </div>
  );
}
