import React from 'react';

export default function SchemaOrg({
  url = "https://www.kit.darioevaristobellotta.de",
  title = "Next.js Developer Kit by Dario Evaristo Bellotta",
  description = "Minimalistisches Next.js Grundgerüst von Dario Evaristo Bellotta für schnelle, moderne Webanwendungen.",
}) {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${url}/#website`,
        "url": url,
        "name": title,
        "description": description,
        "inLanguage": "de-DE",
        "publisher": {
          "@id": `${url}/#organization`
        }
      },
      {
        "@type": "Organization",
        "@id": `${url}/#organization`,
        "name": "Dario Evaristo Bellotta",
        "url": "https://darioevaristobellotta.de",
        "logo": `${url}/favicons/favicon-96x96.png`,
        "founder": {
          "@id": `${url}/#author`
        },
        "sameAs": [
          "https://darioevaristobellotta.de",
          "https://learnquizdb.com"
        ]
      },
      {
        "@type": "Person",
        "@id": `${url}/#author`,
        "name": "Dario Evaristo Bellotta",
        "url": "https://darioevaristobellotta.de",
        "jobTitle": "Webdeveloper & Designer",
        "sameAs": [
          "https://darioevaristobellotta.de",
          "https://www.instagram.com/darioevaristobellotta",
          "https://www.youtube.com/@DarioEvaristoBellotta",
          "https://www.linkedin.com/in/dario-evaristo-bellotta-a5a6361b0/"
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
