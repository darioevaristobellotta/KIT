export const metadata = {
  title: "Privacy Policy | Dario Evaristo Bellotta",
  description: "Privacy policy for the darioevaristobellotta.de website and the Next.js Developer Kit.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container" style={{ paddingTop: '3rem', paddingBottom: '4rem', maxWidth: '50rem' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Privacy Policy</h1>
      
      <div className="m3-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <section>
          <h2 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>1. Controller according to GDPR</h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
            Dario Evaristo Bellotta<br />
            Am Bächelchen 8<br />
            60388 Frankfurt am Main, Germany<br />
            Email: <a href="mailto:hello@darioevaristobellotta.de" style={{ textDecoration: 'underline' }}>hello@darioevaristobellotta.de</a>
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>2. Your Rights as a Data Subject</h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
            You have the right to obtain information about your stored personal data (Art. 15 GDPR), the right to rectification (Art. 16 GDPR), erasure (Art. 17 GDPR), restriction of processing (Art. 18 GDPR), data portability (Art. 20 GDPR), and objection (Art. 21 GDPR).
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>3. Data Collection on this Website</h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
            When accessing this website, general technical information (IP address, browser type, request time) is processed automatically by our hosting provider (Vercel / IONOS) to ensure system stability, security, and performance.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>4. Cookies & Consent Management</h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
            This website uses browser localStorage to save user preferences and consent choices (`analytics_consent`). Analytical tracking scripts are executed only after explicit user consent in compliance with Art. 6 (1) a GDPR.
          </p>
        </section>
      </div>
    </div>
  );
}
