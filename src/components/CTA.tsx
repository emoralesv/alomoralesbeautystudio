import { MessageCircle } from "lucide-react";
import { image, whatsappMessage } from "../lib/links";
import { ContactLink } from "./ContactLink";

export function CTA() {
  return (
    <section id="contacto" className="bg-blush py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:items-center">
        <div>
          <p className="eyebrow">Tu próxima cita</p>
          <h2 className="section-title">Belleza social con atención personalizada</h2>
          <p className="section-copy">
            Cuéntanos la fecha de tu evento, el servicio que necesitas y el horario aproximado. Te orientaremos para elegir el paquete ideal.
          </p>
          <ContactLink href={whatsappMessage()} variant="primary" className="mt-8 w-full sm:w-auto">
            <MessageCircle aria-hidden="true" size={17} /> Agendar por WhatsApp
          </ContactLink>
        </div>
        <img src={image("Copia de Asset 5@5x.webp")} alt="Variación de logo Alo Morales Beauty Studio" loading="lazy" className="mx-auto max-h-56 w-auto rounded-[2rem] bg-white p-8 shadow-soft" />
      </div>
    </section>
  );
}
