import React from "react";
import { ExternalLink } from "lucide-react";

const CANDLE_IMG = "https://media.base44.com/images/public/6a4c0d376a0db0e3894ae785/248532dd2_generated_cea0bfcd.png";

export default function IntroText() {
  return (
    <section className="py-20 sm:py-28 bg-[#F4F1EA]">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <div className="flex justify-center mb-8">
          <img
            src={CANDLE_IMG}
            alt="Kerzenlicht im warmen Raum – würdevolle Bestattung in Geseke"
            className="w-full max-w-md rounded-2xl object-cover shadow-sm"
          />
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl text-[#2C3E50] text-center mb-8 tracking-tight">
          Ein Bestatter in Geseke, der persönlich zur Seite steht
        </h2>
        <div className="space-y-5 text-[#333] text-lg leading-relaxed">
          <p>
            Wenn ein Mensch stirbt, stehen Angehörige oft plötzlich vor vielen Fragen. In dieser
            Situation ist ein erfahrener Bestatter in Geseke wichtig, der nicht nur organisatorisch
            hilft, sondern auch persönlich begleitet. Bestattungen Gockel steht Familien in Geseke
            zur Seite, wenn es um eine würdevolle Bestattung, die Gestaltung der Trauerfeier,
            Formalitäten, Überführungen, Bestattungsvorsorge und alle Entscheidungen rund um den
            Abschied geht.
          </p>
          <p>
            Eine Bestattung in Geseke bedeutet für uns mehr als die reine Organisation. Wir nehmen
            uns Zeit, Ihre Wünsche und die des Verstorbenen kennenzulernen – denn jede Beerdigung
            in Geseke verdarf es einer eigenen, einfühlsamen Gestaltung. Bestattungen in Geseke
            begleiten wir ebenso zuverlässig wie in den umliegenden Ortsteilen.
          </p>
          <p>
            Ob im Trauerfall oder bei der Bestattungsvorsorge: Sie entscheiden, wie der Abschied
            aussehen soll. Wir sorgen dafür, dass alles ruhig, würdevoll und gemeinsam mit Ihnen
            gestaltet wird.
          </p>
        </div>
        <div className="mt-8 text-center">
          <a
            href="https://www.bestattungen-gockel.de/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#7ea82a] text-white font-medium hover:bg-[#6d9424] transition-colors"
          >
            Mehr über Bestattungen Gockel erfahren <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}