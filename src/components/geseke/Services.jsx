import React from "react";
import {
  HeartHandshake,
  Flower2,
  Trees,
  Flame,
  Waves,
  Car,
  FileText,
  Printer,
  ShieldCheck,
  HandHeart,
  ExternalLink,
} from "lucide-react";

const SERVICES = [
  { icon: HeartHandshake, title: "Beratung im Trauerfall", text: "Wir nehmen uns Zeit für ein persönliches Gespräch und helfen Ihnen, in Ruhe die richtigen Entscheidungen zu treffen." },
  { icon: Flower2, title: "Organisation der Trauerfeier", text: "Von der Raumgestaltung bis zur musikalischen Begleitung – wir gestalten die Trauerfeier nach Ihren Wünschen." },
  { icon: Trees, title: "Erdbestattung", text: "Die klassische Bestattungsart mit Beisetzung in einem Erdgrab auf einem Friedhof in Geseke oder Umgebung." },
  { icon: Flame, title: "Feuerbestattung", text: "Eine würdevolle Alternative mit Einäscherung und anschließender Beisetzung der Urne." },
  { icon: Waves, title: "Seebestattung", text: "Wir begleiten Sie bei der Planung einer friedvollen Seebestattung in Nord- oder Ostsee." },
  { icon: Car, title: "Überführungen", text: "Diskrete und zuverlässige Überführung des Verstorbenen – auch überregional." },
  { icon: FileText, title: "Formalitäten", text: "Standesamt, Behörden, Versicherungen – wir übernehmen den administrativen Weg für Sie." },
  { icon: Printer, title: "Trauerdruck", text: "Todesanzeigen, Trauerbriefe und Danksagungen gestalten wir gemeinsam mit Ihnen." },
  { icon: ShieldCheck, title: "Bestattungsvorsorge", text: "Mit einer Vorsorge entlasten Sie Ihre Angehörigen und legen Ihre Wünsche frühzeitig fest." },
  { icon: HandHeart, title: "Persönliche Abschiednahme", text: "Wir ermöglichen Ihnen Zeit und Raum, um in Würde Abschied zu nehmen." },
];

export default function Services() {
  return (
    <section id="leistungen" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#2C3E50] text-center mb-4 tracking-tight">
          Unsere Leistungen in Geseke
        </h2>
        <p className="text-center text-[#555] text-lg mb-14 max-w-2xl mx-auto">
          Von der ersten Beratung bis zur Beisetzung – wir begleiten Sie in allen Schritten des Abschieds.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="group p-7 rounded-2xl bg-[#F4F1EA] border border-stone-200/50 hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white border border-stone-200 mb-5">
                <s.icon className="w-6 h-6 text-[#7ea82a]" />
              </div>
              <h3 className="font-serif text-lg text-[#2C3E50] mb-2">{s.title}</h3>
              <p className="text-[#444] text-sm leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.bestattungen-gockel.de/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2C3E50] text-white font-medium hover:bg-[#243340] transition-colors"
          >
            Mehr über Bestattungen Gockel erfahren <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}