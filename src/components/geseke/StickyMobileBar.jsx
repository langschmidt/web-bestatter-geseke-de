import React, { useEffect, useState } from "react";
import { Phone, ExternalLink } from "lucide-react";

export default function StickyMobileBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.2);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`sm:hidden fixed bottom-0 inset-x-0 z-50 flex transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a
        href="tel:029426322"
        className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#7ea82a] text-white font-medium text-sm active:bg-[#6d9424]"
      >
        <Phone className="w-4 h-4" /> Anrufen
      </a>
      <a
        href="https://www.bestattungen-gockel.de/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#2C3E50] text-white font-medium text-sm"
      >
        Hauptseite <ExternalLink className="w-4 h-4" />
      </a>
    </div>
  );
}