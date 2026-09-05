import React from "react";
import { Phone, ExternalLink } from "lucide-react";
import ReviewsSection from "@/components/ReviewsSection";

const LOGO = "https://media.base44.com/images/public/6a4c0d376a0db0e3894ae785/e141cafe4_Logo_cmyk.png";
const BG_IMG = "https://media.base44.com/images/public/6a4c0d376a0db0e3894ae785/3b9bcceb2_generated_749d867d.png";

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
            bei Bestattung, Beerdigung, Trauerfeier, Formalitäten und Vorsorge.
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

          <ReviewsSection />

          <p className="mt-14 text-sm text-[#666] leading-relaxed max-w-2xl mx-auto">
            Als <strong className="font-medium text-[#2C3E50]">Bestattungshaus in Geseke</strong> stehen
            wir Angehörigen im <strong className="font-medium text-[#2C3E50]">Trauerfall</strong> zur
            Seite – ob <strong className="font-medium text-[#2C3E50]">Erdbestattung</strong>,{" "}
            <strong className="font-medium text-[#2C3E50]">Feuerbestattung</strong> oder individuelle{" "}
            <strong className="font-medium text-[#2C3E50]">Trauerfeier</strong>. Von der{" "}
            <strong className="font-medium text-[#2C3E50]">Bestattungsvorsorge</strong> bis zur{" "}
            <strong className="font-medium text-[#2C3E50]">Beerdigung</strong> begleiten wir Sie
            persönlich und würdevoll. Wer einen{" "}
            <strong className="font-medium text-[#2C3E50]">Bestatter in der Nähe von Geseke</strong>{" "}
            sucht, findet bei Bestattungen Gockel einen verlässlichen Partner – für Familien in
            Geseke sowie in Störmede, Ehringhausen, Langeneicke, Mönninghausen, Eringerfeld,
            Bönninghausen und Ermsinghausen.
          </p>

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