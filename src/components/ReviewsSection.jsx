import React from "react";
import { Star, ExternalLink } from "lucide-react";

const REVIEWS = [
  {
    text: "Super kompetente Beratung, Erledigung aller wichtigen Angelegenheiten. Sehr einfühlsam und persönlich begleitet.",
    author: "Angehörige",
  },
  {
    text: "Auf Augenhöhe, ruhig und verlässlich – genau die Begleitung, die man in so einer Situation braucht.",
    author: "Familie",
  },
];

export default function ReviewsSection() {
  return (
    <div className="mt-10 max-w-xl mx-auto">
      <a
        href="https://www.google.com/search?q=Bestattungen+Gockel+Geseke+Bewertungen"
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-white/70 backdrop-blur-sm rounded-2xl border border-stone-200/70 p-5 hover:shadow-sm transition-shadow"
      >
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} className="w-4 h-4 fill-[#fbbf24] text-[#fbbf24]" />
            ))}
          </div>
          <span className="font-serif text-lg text-[#2C3E50]">5,0</span>
          <span className="text-sm text-[#888]">auf Google</span>
          <ExternalLink className="w-3.5 h-3.5 text-[#888] ml-auto" />
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {REVIEWS.map((r) => (
            <blockquote key={r.author} className="text-sm text-[#444] leading-relaxed">
              „{r.text}"
              <footer className="mt-1.5 text-xs text-[#999]">– {r.author}</footer>
            </blockquote>
          ))}
        </div>

        <p className="mt-4 text-xs text-[#7ea82a] font-medium">
          Bewertungen auf Google ansehen
        </p>
      </a>
    </div>
  );
}