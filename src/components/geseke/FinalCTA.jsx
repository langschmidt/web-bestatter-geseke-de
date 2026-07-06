import React from "react";
import { Phone, ExternalLink } from "lucide-react";

const FLOWER_IMG = "https://media.base44.com/images/public/6a4c0d376a0db0e3894ae785/41d2369a9_generated_8e2406e3.png";

export default function FinalCTA() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={FLOWER_IMG}
          alt="Weiße Blume auf Holz – würdevoller Abschied in Geseke"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#2C3E50]/85" />
      </div>
      <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center text-white">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight">
          Sie suchen einen Bestatter in Geseke?
        </h2>
        <p className="mt-6 text-lg text-white/90 leading-relaxed">
          Wenn Sie Unterstützung im Trauerfall benötigen oder sich zur Bestattungsvorsorge
          informieren möchten, finden Sie auf der Webseite von Bestattungen Gockel weitere
          Informationen und direkte Kontaktmöglichkeiten.
        </p>
        <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://www.bestattungen-gockel.de/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#7ea82a] text-white font-medium hover:bg-[#6d9424] transition-colors min-h-[48px]"
          >
            Zur Webseite von Bestattungen Gockel <ExternalLink className="w-4 h-4" />
          </a>
          <a
            href="tel:029426322"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-white/70 text-white font-medium hover:bg-white/10 transition-colors min-h-[48px]"
          >
            <Phone className="w-4 h-4" /> Jetzt Kontakt aufnehmen
          </a>
        </div>
        <p className="mt-8 text-white/85">
          <a href="tel:029426322" className="font-semibold text-2xl tracking-wide hover:text-[#dfe9c8]">
            02942 6322
          </a>
          <span className="block mt-1 text-sm text-white/70">Tag &amp; Nacht erreichbar</span>
        </p>
      </div>
    </section>
  );
}