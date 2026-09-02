import { ArrowRight, MapPin, MessageCircle, Star } from "lucide-react";
import { image, whatsappMessage } from "../lib/links";
import { ContactLink } from "./ContactLink";
import { QuickActions } from "./QuickActions";

export function Hero() {
  return (
    <section id="hero" className="section grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
      <div>
        <p className="eyebrow">ALO MORALES BEAUTY STUDIO</p>
        <h1 className="text-balance font-display text-5xl leading-none text-ink sm:text-7xl">
          Belleza profesional para tus <span className="text-rosewood">momentos especiales</span>
        </h1>
        <p className="mt-6 max-w-xl text-pretty text-lg leading-8 text-cocoa">
          Maquillaje, peinado, uñas, fotografía y paquetes completos para eventos, novias y XV años en Acapulco Diamante.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold leading-6 text-cocoa shadow-sm">
            <MapPin aria-hidden="true" className="shrink-0 text-rose" size={16} />
            Acapulco Diamante
          </p>
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-ink shadow-sm">
            <span className="flex text-champagne" aria-label="Cinco estrellas">
              {[...Array(5)].map((_, index) => (
                <Star key={index} aria-hidden="true" size={14} fill="currentColor" />
              ))}
            </span>
            +200 clientas atendidas
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ContactLink href={whatsappMessage()} variant="primary">
            <MessageCircle aria-hidden="true" size={17} /> Agendar por WhatsApp
          </ContactLink>
          <a
            href="#servicios"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 bg-white/80 px-5 py-3 text-sm font-semibold text-ink shadow-sm transition-colors transition-transform hover:-translate-y-0.5 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose"
          >
            Ver servicios <ArrowRight aria-hidden="true" size={16} />
          </a>
        </div>

      </div>

      <div className="relative">
        <img
          src={image("Copia de POST IG MARCA AGUA.webp")}
          alt="Maquillaje de novia editorial con velo y guante transparente en Alo Morales Beauty Studio"
          className="hero-image"
          fetchPriority="high"
        />
      </div>

    </section>


  );
}
