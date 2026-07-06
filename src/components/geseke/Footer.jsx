import React from "react";
import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#2C3E50] text-white/80">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#7ea82a]">
              <span className="w-4 h-4 rounded-full bg-white/90" />
            </span>
            <span className="font-serif text-lg text-white">Bestattungen Gockel</span>
          </div>
          <p className="text-sm leading-relaxed">
            Ihr Bestatter in Geseke und Umgebung – persönlich, würdevoll und zuverlässig.
          </p>
        </div>

        <div>
          <h3 className="text-white font-medium mb-4 text-sm uppercase tracking-wide">Kontakt</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 mt-0.5 text-[#9bc434] shrink-0" />
              Marktstraße 14, 59590 Geseke
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-[#9bc434] shrink-0" />
              <a href="tel:029426322" className="hover:text-white transition-colors">02942 6322</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#9bc434] shrink-0" />
              <a href="mailto:info@bestattungen-gockel.de" className="hover:text-white transition-colors break-all">
                info@bestattungen-gockel.de
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-[#9bc434] shrink-0" />
              Tag &amp; Nacht erreichbar
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-medium mb-4 text-sm uppercase tracking-wide">Weiterführend</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="https://www.bestattungen-gockel.de/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
              >
                Zur Hauptseite <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </li>
            <li>
              <a href="#trauerfall" className="hover:text-white transition-colors">Was tun im Trauerfall?</a>
            </li>
            <li>
              <a href="#leistungen" className="hover:text-white transition-colors">Leistungen</a>
            </li>
            <li>
              <a href="#faq" className="hover:text-white transition-colors">Häufige Fragen</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Bestattungen Gockel, Geseke</p>
          <div className="flex gap-5">
            <a href="https://www.bestattungen-gockel.de/" target="_blank" rel="noopener noreferrer" className="hover:text-white/80">Impressum</a>
            <a href="https://www.bestattungen-gockel.de/" target="_blank" rel="noopener noreferrer" className="hover:text-white/80">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
}