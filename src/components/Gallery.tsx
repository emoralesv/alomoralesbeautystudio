import { Instagram } from "lucide-react";
import { useMemo, useState } from "react";
import { galleryImages } from "../data/content";
import { INSTAGRAM_URL } from "../lib/links";

const MAX_VISIBLE = 9;

function shuffle<T>(items: T[]) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export function Gallery() {
  const shuffledImages = useMemo(() => shuffle(galleryImages), []);
  const categories = useMemo(
    () => ["Todos", ...Array.from(new Set(galleryImages.map((item) => item.category)))],
    [],
  );
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredImages =
    activeCategory === "Todos"
      ? shuffledImages.slice(0, MAX_VISIBLE)
      : shuffledImages.filter((item) => item.category === activeCategory);

  return (
    <section id="galeria" className="bg-ivory py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="eyebrow">Portafolio</p>
        <h2 className="section-title">Galería</h2>
        <p className="section-copy">Cada look se diseña de acuerdo con tu evento, estilo personal, tipo de piel y horario.</p>

        <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filtrar galería por categoría">
          {categories.map((category) => {
            const isActive = category === activeCategory;
            return (
              <button
                key={category}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveCategory(category)}
                className={`inline-flex min-h-11 items-center rounded-full border px-4 py-2 text-sm font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose ${
                  isActive ? "border-ink bg-ink text-ivory" : "border-ink/10 bg-white text-cocoa hover:bg-blush"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="mt-8 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {filteredImages.map((item, index) => (
            <figure key={item.src} className="gallery-item group relative overflow-hidden rounded-[1.75rem] bg-ink shadow-soft">
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
                  index % 3 === 0 ? "aspect-[4/5]" : index % 3 === 1 ? "aspect-[3/4]" : "aspect-square"
                }`}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/0 to-ink/0" />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
                <span className="font-display text-xl leading-none text-ivory sm:text-2xl">{item.title}</span>
                <span className="whitespace-nowrap rounded-full bg-ivory/90 px-3 py-1 text-xs font-bold text-ink">
                  {item.category}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center gap-4 rounded-[1.75rem] bg-blush/70 p-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-sm leading-6 text-cocoa">Descubre los trabajos más recientes en nuestro Instagram.</p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-ivory shadow-soft transition-colors transition-transform hover:-translate-y-0.5 hover:bg-cocoa focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose sm:w-auto"
          >
            <Instagram aria-hidden="true" size={16} /> Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
