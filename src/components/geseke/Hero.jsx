import React from "react";
import { Phone, ExternalLink, ShieldCheck } from "lucide-react";

const HERO_IMG = "https://media.base44.com/images/public/6a4c0d376a0db0e3894ae785/3b9bcceb2_generated_749d867d.png";

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-center pt-16 sm:pt-20">
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Ruhige Landschaft bei Geseke im Morgenlicht – Bestattungen Gockel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2C3E50]/75 via-[#2C3E50]/45 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 w-full">
        <div className="max-w-2xl text-white">
          <p className="text-[#dfe9c8] font-medium tracking-wide uppercase text-xs sm:text-sm mb-4">
            Bestatter in Geseke & Umgebung
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight">
            Bestatter in Geseke – persönliche Hilfe im Trauerfall
          </h1>
          <p className="mt-6 text-base sm:text-lg text-white/90 leading-relaxed max-w-xl">
            Bestattungen Gockel begleitet Angehörige in Geseke und Umgebung würdevoll,
            persönlich und zuverlässig – Tag und Nacht erreichbar.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="https://www.bestattungen-gockel.de/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#7ea82a] text-white font-medium hover:bg-[#6d9424] transition-colors min-h-[48px]"
            >
              Zur Webseite von Bestattungen Gockel <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href="tel:029426322"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/70 text-white font-medium hover:bg-white/10 transition-colors min-h-[48px]"
            >
              <Phone className="w-4 h-4" /> 02942 6322 anrufen
            </a>
          </div>

          <p className="mt-7 flex items-start gap-2 text-sm text-white/80 max-w-lg">
            <ShieldCheck className="w-4 h-4 mt-0.5 shrink-0 text-[#dfe9c8]" />
            Ihr Ansprechpartner für Bestattung, Trauerfeier, Vorsorge und persönliche Beratung in Geseke.
          </p>
        </div>
      </div>
    </section>
  );
}