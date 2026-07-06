import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "Was macht ein Bestatter in Geseke im Trauerfall?",
    a: "Als Ihr Bestatter in Geseke übernehmen wir die Überführung, kümmern uns um alle behördlichen Formalitäten und organisieren die Trauerfeier sowie die Beisetzung nach Ihren Wünschen. Wir stehen Ihnen von der ersten Stunde an persönlich zur Seite.",
  },
  {
    q: "Wen rufe ich zuerst an, wenn jemand verstorben ist?",
    a: "Zunächst sollte ein Arzt den Tod feststellen. Danach können Sie uns jederzeit unter 02942 6322 kontaktieren. Wir übernehmen dann die weiteren Schritte gemeinsam mit Ihnen.",
  },
  {
    q: "Ist Bestattungen Gockel Tag und Nacht erreichbar?",
    a: "Ja, wir sind im Trauerfall jederzeit – auch an Wochenenden und Feiertagen – Tag und Nacht unter der Nummer 02942 6322 für Sie erreichbar.",
  },
  {
    q: "Welche Bestattungsarten sind in Geseke möglich?",
    a: "In Geseke und Umgebung sind Erdbestattung, Feuerbestattung und Seebestattung möglich. Gemeinsam finden wir die Bestattungsart, die zu Ihren Wünschen und denen des Verstorbenen passt.",
  },
  {
    q: "Kann ich eine Bestattungsvorsorge in Geseke planen?",
    a: "Ja, mit einer Bestattungsvorsorge legen Sie Ihre Wünsche frühzeitig fest und entlasten Ihre Angehörigen. Wir beraten Sie gerne persönlich in unseren Räumlichkeiten oder bei Ihnen zu Hause.",
  },
  {
    q: "Unterstützt Bestattungen Gockel auch bei Formalitäten?",
    a: "Ja, wir übernehmen für Sie den Umgang mit Standesamt, Behörden, Versicherungen und Trauerdruck, damit Sie sich auf das Wesentliche konzentrieren können.",
  },
  {
    q: "Ist eine persönliche Beratung zu Hause möglich?",
    a: "Ja, wir beraten Sie gerne in unseren Räumlichkeiten in Geseke oder kommen zu Ihnen nach Hause. So lässt sich in vertrauter Umgebung und ohne Zeitdruck alles besprechen.",
  },
  {
    q: "Wie komme ich zur Hauptseite von Bestattungen Gockel?",
    a: "Sie finden alle weiteren Informationen unter www.bestattungen-gockel.de. Dort erreichen Sie auch unser Kontaktformular und weitere Details zu unseren Leistungen.",
  },
];

function FaqItem({ item }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-stone-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-serif text-lg text-[#2C3E50]">{item.q}</span>
        <ChevronDown
          className={`w-5 h-5 text-[#7ea82a] shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <p className="pb-5 text-[#444] leading-relaxed">{item.a}</p>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#F4F1EA]">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#2C3E50] text-center mb-12 tracking-tight">
          Häufige Fragen
        </h2>
        <div>
          {FAQS.map((f) => (
            <FaqItem key={f.q} item={f} />
          ))}
        </div>
      </div>
    </section>
  );
}