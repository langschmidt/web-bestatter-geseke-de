import React from "react";
import { MapPin } from "lucide-react";

const DISTRICTS = [
  "Geseke Kernstadt",
  "Störmede",
  "Ehringhausen",
  "Langeneicke",
  "Mönninghausen",
  "Eringerfeld",
  "Bönninghausen",
  "Ermsinghausen",
];

export default function Districts() {
  return (
    <section id="orte" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#2C3E50] text-center mb-6 tracking-tight">
          Bestattungen in Geseke und den Ortsteilen
        </h2>
        <p className="max-w-3xl mx-auto text-center text-[#333] text-lg leading-relaxed mb-12">
          Bestattungen Gockel ist für Familien in der Kernstadt Geseke sowie in den Ortsteilen da.
          Ob Störmede, Ehringhausen, Langeneicke, Mönninghausen, Eringerfeld, Bönninghausen oder
          Ermsinghausen – Angehörige finden hier einen zuverlässigen Bestatter in ihrer Nähe.
          Auch in der Umgebung von Mittelhausen, Langeneicke und Ermsinghausen sind Angehörige bei
          Fragen zur Bestattung gut aufgehoben.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {DISTRICTS.map((d) => (
            <div
              key={d}
              className="group flex items-center gap-3 px-5 py-4 rounded-xl bg-[#F4F1EA] border border-stone-200/60 hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <MapPin className="w-5 h-5 text-[#7ea82a] shrink-0" />
              <span className="text-[#2C3E50] font-medium text-sm sm:text-base">{d}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}