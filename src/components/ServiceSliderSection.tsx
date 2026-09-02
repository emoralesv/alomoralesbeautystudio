import { MessageCircle, Star } from "lucide-react";
import type { SliderService } from "../data/content";
import { whatsappMessage } from "../lib/links";

type ServiceSliderSectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  items: SliderService[];
  tone?: "light" | "warm";
};

export function ServiceSliderSection({
  id,
  eyebrow,
  title,
  description,
  items,
  tone = "light",
}: ServiceSliderSectionProps) {
  const isWarm = tone === "warm";

  return (
    <section id={id} className={`${isWarm ? "bg-blush" : "bg-white"} py-16 sm:py-24`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="section-title">{title}</h2>
          <p className="section-copy">{description}</p>
        </div>

        <div className="relative">
          <div
            className="mt-8 flex snap-x gap-5 overflow-x-auto pb-4"
            aria-label={`${title}: opciones disponibles`}
          >
            {items.map((item) => (
              <article
                key={item.title}
                className="flex min-w-[84vw] snap-start flex-col overflow-hidden rounded-[2rem] bg-ivory shadow-soft sm:min-w-[390px] lg:min-w-[410px]"
              >
                <img
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-rosewood">{item.eyebrow}</p>
                  <div className="mt-3 flex min-h-24 items-start justify-between gap-3">
                    <h3 className="font-display text-3xl leading-tight text-ink">{item.title}</h3>
                    {item.price ? (
                      <span
                        className="min-h-9 min-w-24 shrink-0 rounded-full bg-ink px-4 py-2 text-right text-sm font-bold leading-tight text-ivory shadow-sm"
                        aria-label={`Precio: ${item.price}`}
                      >
                        {item.price}
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-cocoa">{item.description}</p>

                  <ul className="mt-5 space-y-2 text-sm leading-6 text-cocoa">
                    {item.includes.map((include) => (
                      <li key={include} className="flex gap-2">
                        <Star aria-hidden="true" className="mt-1 shrink-0 text-champagne" size={14} />
                        <span>{include}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}

            <div className="flex min-w-[70vw] snap-start items-center rounded-[2rem] border border-ink/10 bg-white/75 p-6 sm:min-w-[320px]">
              <div>
                <p className="eyebrow">Agenda</p>
                <h3 className="font-display text-3xl leading-tight text-ink">Cuéntanos tu fecha</h3>
                <p className="mt-3 text-sm leading-6 text-cocoa">
                  Te ayudamos a elegir el servicio ideal según horario, evento y estilo.
                </p>
                <a
                  href={whatsappMessage()}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-ivory transition-colors hover:bg-cocoa focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose"
                >
                  Preguntar por WhatsApp <MessageCircle aria-hidden="true" size={16} />
                </a>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className={`pointer-events-none absolute inset-y-0 right-0 top-8 hidden w-16 bg-gradient-to-l to-transparent sm:block lg:hidden ${
              isWarm ? "from-blush" : "from-white"
            }`}
          />
        </div>
      </div>
    </section>
  );
}
