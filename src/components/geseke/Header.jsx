import React from "react";
import { Phone, ExternalLink } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-white/85 border-b border-stone-200/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
        <a href="/" className="flex items-center gap-2.5 shrink-0">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#7ea82a]">
            <span className="w-4 h-4 rounded-full bg-white/90" />
          </span>
          <span className="font-serif text-lg sm:text-xl text-[#2C3E50] tracking-tight">
            Bestattungen Gockel
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7 text-sm text-[#333]">
          <a href="#trauerfall" className="hover:text-[#7ea82a] transition-colors">Trauerfall</a>
          <a href="#leistungen" className="hover:text-[#7ea82a] transition-colors">Leistungen</a>
          <a href="#orte" className="hover:text-[#7ea82a] transition-colors">Ortsteile</a>
          <a href="#faq" className="hover:text-[#7ea82a] transition-colors">FAQ</a>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="tel:029426322"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#2C3E50] hover:text-[#7ea82a] transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">02942 6322</span>
          </a>
          <a
            href="https://www.bestattungen-gockel.de/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#7ea82a] text-white text-sm font-medium hover:bg-[#6d9424] transition-colors"
          >
            Hauptseite <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}