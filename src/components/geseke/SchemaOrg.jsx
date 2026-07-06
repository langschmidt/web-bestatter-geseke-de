import React from "react";

const SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FuneralHome",
      name: "Bestattungen Gockel",
      image: "https://www.bestattungen-gockel.de/images/logo.png",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Marktstraße 14",
        addressLocality: "Geseke",
        postalCode: "59590",
        addressCountry: "DE",
      },
      telephone: "+4929426322",
      email: "info@bestattungen-gockel.de",
      url: "https://www.bestattungen-gockel.de/",
      areaServed: [
        "Geseke",
        "Störmede",
        "Ehringhausen",
        "Langeneicke",
        "Mönninghausen",
        "Eringerfeld",
        "Bönninghausen",
        "Ermsinghausen",
        "Mittelhausen",
      ],
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Was macht ein Bestatter in Geseke im Trauerfall?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Als Ihr Bestatter in Geseke übernehmen wir die Überführung, kümmern uns um alle behördlichen Formalitäten und organisieren die Trauerfeier sowie die Beisetzung nach Ihren Wünschen. Wir stehen Ihnen von der ersten Stunde an persönlich zur Seite.",
          },
        },
        {
          "@type": "Question",
          name: "Wen rufe ich zuerst an, wenn jemand verstorben ist?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Zunächst sollte ein Arzt den Tod feststellen. Danach können Sie uns jederzeit unter 02942 6322 kontaktieren. Wir übernehmen dann die weiteren Schritte gemeinsam mit Ihnen.",
          },
        },
        {
          "@type": "Question",
          name: "Ist Bestattungen Gockel Tag und Nacht erreichbar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, wir sind im Trauerfall jederzeit – auch an Wochenenden und Feiertagen – Tag und Nacht unter der Nummer 02942 6322 für Sie erreichbar.",
          },
        },
        {
          "@type": "Question",
          name: "Welche Bestattungsarten sind in Geseke möglich?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In Geseke und Umgebung sind Erdbestattung, Feuerbestattung und Seebestattung möglich. Gemeinsam finden wir die Bestattungsart, die zu Ihren Wünschen und denen des Verstorbenen passt.",
          },
        },
        {
          "@type": "Question",
          name: "Kann ich eine Bestattungsvorsorge in Geseke planen?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, mit einer Bestattungsvorsorge legen Sie Ihre Wünsche frühzeitig fest und entlasten Ihre Angehörigen. Wir beraten Sie gerne persönlich in unseren Räumlichkeiten oder bei Ihnen zu Hause.",
          },
        },
        {
          "@type": "Question",
          name: "Unterstützt Bestattungen Gockel auch bei Formalitäten?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, wir übernehmen für Sie den Umgang mit Standesamt, Behörden, Versicherungen und Trauerdruck, damit Sie sich auf das Wesentliche konzentrieren können.",
          },
        },
        {
          "@type": "Question",
          name: "Ist eine persönliche Beratung zu Hause möglich?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, wir beraten Sie gerne in unseren Räumlichkeiten in Geseke oder kommen zu Ihnen nach Hause. So lässt sich in vertrauter Umgebung und ohne Zeitdruck alles besprechen.",
          },
        },
        {
          "@type": "Question",
          name: "Wie komme ich zur Hauptseite von Bestattungen Gockel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sie finden alle weiteren Informationen unter www.bestattungen-gockel.de. Dort erreichen Sie auch unser Kontaktformular und weitere Details zu unseren Leistungen.",
          },
        },
      ],
    },
  ],
};

export default function SchemaOrg() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
    />
  );
}