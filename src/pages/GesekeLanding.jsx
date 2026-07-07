import React from "react";
import { Phone, ExternalLink } from "lucide-react";

const LOGO = "https://media.base44.com/images/public/6a4c0d376a0db0e3894ae785/e141cafe4_Logo_cmyk.png";
const BG_IMG = "https://media.base44.com/images/public/6a4c0d376a0db0e3894ae785/3b9bcceb2_generated_749d867d.png";

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
      {/* Main */}
      <main className="flex-1 flex items-center relative">
        <div className="absolute inset-0">
          <img
            src={BG_IMG}
            alt="Ruhige Landschaft bei Geseke im Morgenlicht"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#F4F1EA]/85 backdrop-blur-[2px]" />
        </div>
        <div className="relative max-w-3xl mx-auto px-5 py-16 sm:py-24 text-center w-full">
          <p className="text-[#7ea82a] font-medium tracking-wide uppercase text-xs sm:text-sm mb-4">
            Bestattungen in Geseke &amp; Umgebung
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

          {/* Search terms – dezent */}
          <div className="mt-14">
            <div className="flex flex-wrap justify-center gap-x-3 gap-y-1.5 max-w-2xl mx-auto">
              {SEARCH_TERMS.map((term) => (
                <span key={term} className="text-xs text-stone-400">
                  {term}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-12 text-sm text-[#888]">
            <a
              href="https://www.bestattungen-gockel.de/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img
                src={LOGO}
                alt="Logo Bestattungen Gockel – www.bestatter-geseke.de"
                className="h-10 w-auto object-contain mx-auto"
                style={{ mixBlendMode: "screen" }}
              />
            </a>
            <p className="text-[#2C3E50] font-medium mt-3">www.bestatter-geseke.de</p>
            <p className="mt-2">Bestattungen Gockel · Marktstraße 14 · 59590 Geseke</p>
            <p className="mt-1">
              Tag &amp; Nacht erreichbar ·{" "}
              <a href="mailto:info@bestattungen-gockel.de" className="hover:text-[#7ea82a]">
                info@bestattungen-gockel.de
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}