import React from "react";
import { Phone, ClipboardList, FileText, Heart, ClipboardCheck } from "lucide-react";

const STEPS = [
  { icon: Heart, title: "Ruhe bewahren & Arzt benachrichtigen", text: "Wenn ein Mensch verstirbt, informieren Sie zunächst einen Arzt, der den Tod feststellt." },
  { icon: Phone, title: "Bestatter kontaktieren", text: "Rufen Sie uns an – wir sind Tag und Nacht unter 02942 6322 für Sie erreichbar." },
  { icon: FileText, title: "Unterlagen bereitlegen", text: "Halten Sie Geburtsurkunde, Personalausweis und Versichertenkarte des Verstorbenen." },
  { icon: ClipboardList, title: "Wünsche besprechen", text: "Gemeinsam klären wir Bestattungsart, Trauerfeier und persönliche Wünsche." },
  { icon: ClipboardCheck, title: "Formalitäten klären", text: "Wir übernehmen behördliche Wege, Standesamt und weitere Formalitäten für Sie." },
];

export default function TrauerfallSteps() {
  return (
    <section id="trauerfall" className="py-20 sm:py-28 bg-[#F4F1EA]">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#2C3E50] text-center mb-4 tracking-tight">
          Was tun im Trauerfall?
        </h2>
        <p className="text-center text-[#555] text-lg mb-14 max-w-2xl mx-auto">
          Ein kurzer Überblick in fünf Schritten – damit Sie in einer schweren Situation wissen,
          was als Nächstes kommt.
        </p>

        <div className="space-y-1">
          {STEPS.map((s, i) => (
            <div key={i} className="relative flex gap-5 sm:gap-7 pb-10">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#7ea82a] text-white shrink-0">
                  <s.icon className="w-5 h-5" />
                </div>
                {i < STEPS.length - 1 && (
                  <div className="w-px flex-1 bg-stone-300 mt-2" />
                )}
              </div>
              <div className="pt-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-[#7ea82a] uppercase tracking-wide">
                    Schritt {i + 1}
                  </span>
                </div>
                <h3 className="font-serif text-lg sm:text-xl text-[#2C3E50] mt-1">{s.title}</h3>
                <p className="text-[#444] mt-1.5 leading-relaxed">{s.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center bg-white rounded-2xl border border-stone-200 p-6 sm:p-8">
          <p className="text-[#2C3E50] text-lg">
            Im Trauerfall erreichen Sie Bestattungen Gockel Tag und Nacht unter{" "}
            <a href="tel:029426322" className="font-semibold text-[#7ea82a] hover:underline">
              02942 6322
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}