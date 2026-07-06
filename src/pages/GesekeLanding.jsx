import React from "react";
import { Phone, ExternalLink } from "lucide-react";

const SEARCH_TERMS = [
  "Bestatter Geseke",
  "Bestattung Geseke",
  "Beerdigung Geseke",
  "Bestattungen Geseke",
  "Bestattungshaus Geseke",
  "Bestatter in der Nähe Geseke",
  "Bestattungsvorsorge Geseke",
  "Trauerfall Geseke",
  "Erdbestattung Geseke",
  "Feuerbestattung Geseke",
  "Trauerfeier Geseke",
  "Bestatter Störmede",
  "Bestatter Ehringhausen",
  "Bestatter Langeneicke",
  "Bestatter Mönninghausen",
  "Bestatter Eringerfeld",
  "Bestatter Bönninghausen",
  "Bestatter Ermsinghausen",
];

export default function GesekeLanding() {
  return (
    <div className="min-h-screen bg-[#F4F1EA] font-body flex flex-col">
      {/* Header */}
      <header className="border-b border-stone-200/60 bg-white/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-5 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#7ea82a]">
              <span className="w-3.5 h-3.5 rounded-full bg-white/90" />
            </span>
            <span className="font-serif text-lg text-[#2C3E50]">Bestattungen Gockel</span>
          </div>
          <a href="tel:029426322" className="flex items-center gap-1.5 text-sm font-medium text-[#2C3E50]">
            <Phone className="w-4 h-4 text-[#7ea82a]" /> 02942 6322
          </a>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 flex items-center">
        <div className="max-w-3xl mx-auto px-5 py-16 sm:py-24 text-center w-full">
          <p className="text-[#7ea82a] font-medium tracking-wide uppercase text-xs sm:text-sm mb-4">
            Bestattungen in Geseke & Umgebung
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2C3E50] tracking-tight leading-tight">
            Bestatter in Geseke
          </h1>
          <p className="mt-5 text-[#555] text-lg leading-relaxed max-w-xl mx-auto">
            Bestattungen Gockel begleitet Angehörige in Geseke würdevoll und persönlich –
            Tag &amp; Nacht erreichbar.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://www.bestattungen-gockel.de/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#7ea82a] text-white font-medium hover:bg-[#6d9424] transition-colors"
            >
              Zur Webseite von Bestattungen Gockel <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href="tel:029426322"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-[#2C3E50]/20 text-[#2C3E50] font-medium hover:bg-white transition-colors"
            >
              <Phone className="w-4 h-4" /> 02942 6322 anrufen
            </a>
          </div>

          {/* Search terms */}
          <div className="mt-16">
            <h2 className="font-serif text-xl text-[#2C3E50] mb-6">Suchbegriffe</h2>
            <div className="flex flex-wrap justify-center gap-2.5">
              {SEARCH_TERMS.map((term) => (
                <span
                  key={term}
                  className="px-4 py-2 rounded-full bg-white border border-stone-200 text-sm text-[#444]"
                >
                  {term}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-12 text-sm text-[#888]">
            <p>Bestattungen Gockel · Marktstraße 14 · 59590 Geseke</p>
            <p className="mt-1">Tag &amp; Nacht erreichbar · <a href="mailto:info@bestattungen-gockel.de" className="hover:text-[#7ea82a]">info@bestattungen-gockel.de</a></p>
          </div>
        </div>
      </main>
    </div>
  );
}