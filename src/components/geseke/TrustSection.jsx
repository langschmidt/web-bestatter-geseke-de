import React from "react";
import { ExternalLink } from "lucide-react";

const ROOM_IMG = "https://media.base44.com/images/public/6a4c0d376a0db0e3894ae785/26b832be1_generated_ff372ebe.png";

export default function TrustSection() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#2C3E50] mb-6 tracking-tight">
            Würdevolle Begleitung in schweren Momenten
          </h2>
          <div className="space-y-4 text-[#333] text-lg leading-relaxed">
            <p>
              Jede Familie ist anders, und jeder Abschied verdarf eine eigene Form. Manche Menschen
              wünschen sich eine ruhige, kleine Feier im engsten Kreis, andere einen großen
              Abschied mit vielen Trauergästen. Manche entscheiden sich für eine Erdbestattung,
              andere für eine Feuerbestattung oder Seebestattung.
            </p>
            <p>
              Wir hören zu, beraten ehrlich und ohne Druck, und gestalten gemeinsam mit Ihnen einen
              Abschied, der zum Verstorbenen und zu Ihnen passt. Denn in schweren Momenten ist es
              nicht die große Geste, die zählt, sondern die Nähe, das Verständnis und das Gefühl,
              in guten Händen zu sein.
            </p>
          </div>
          <a
            href="https://www.bestattungen-gockel.de/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#7ea82a] text-white font-medium hover:bg-[#6d9424] transition-colors"
          >
            Mehr über Bestattungen Gockel erfahren <ExternalLink className="w-4 h-4" />
          </a>
        </div>
        <div className="order-1 md:order-2">
          <img
            src={ROOM_IMG}
            alt="Warmes Beratungszimmer von Bestattungen Gockel in Geseke"
            className="w-full rounded-2xl object-cover shadow-md aspect-[4/3]"
          />
        </div>
      </div>
    </section>
  );
}