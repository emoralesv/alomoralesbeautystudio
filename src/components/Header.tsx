import { Bot, Facebook, Instagram, Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { FACEBOOK_URL, INSTAGRAM_URL, image, whatsappMessage } from "../lib/links";
import { ContactLink } from "./ContactLink";
import { NavDropdown } from "./NavDropdown";

export function Header({ onAssistantOpen }: { onAssistantOpen: () => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const serviceLinks = [
    { href: "#servicios", label: "Servicios sociales", detail: "Maquillaje, peinado y alaciado" },
    { href: "#fotografia", label: "Fotografía profesional", detail: "Sesiones, marca personal y redes" },
    { href: "#unas", label: "Uñas y manos", detail: "Gel, acrílico, polygel y nail art" },
    { href: "#pedicura", label: "Pedicura y combos", detail: "Spa, gel y manos + pies" },
    { href: "#xv", label: "XVañeras", detail: "Paquetes Oro y Plata" },
    { href: "#novias", label: "Novias", detail: "Paquetes Oro y Diamante" },
  ];
  const mainLinks = [
    { href: "#galeria", label: "Galería" },
    { href: "#politicas", label: "Políticas" },
    { href: "#contacto", label: "Contacto" },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/60 bg-ivory/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <a
          href="#hero"
          className="flex items-center gap-3 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose"
          aria-label="Ir al inicio"
          onClick={closeMenu}
        >
          <img src={image("Copia de Asset 3@3x.webp")} alt="Logo horizontal Alo Morales Beauty Studio" className="h-9 w-auto" />
        </a>

        <div className="hidden items-center gap-2 md:flex">
          <NavDropdown label="Servicios" href="#servicios" links={serviceLinks} />
          {mainLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a className="icon-link" href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Instagram">
            <Instagram aria-hidden="true" size={18} />
          </a>
          <a className="icon-link" href={FACEBOOK_URL} target="_blank" rel="noreferrer" aria-label="Facebook">
            <Facebook aria-hidden="true" size={18} />
          </a>
          <a
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-ink text-ivory shadow-soft transition-colors transition-transform hover:-translate-y-0.5 hover:bg-cocoa focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose sm:hidden"
            href={whatsappMessage()}
            target="_blank"
            rel="noreferrer"
            aria-label="Agendar por WhatsApp"
          >
            <MessageCircle aria-hidden="true" size={18} />
          </a>
          <ContactLink href={whatsappMessage()} variant="primary" className="hidden sm:inline-flex">
            <MessageCircle aria-hidden="true" size={17} /> WhatsApp
          </ContactLink>
          <button
            type="button"
            onClick={onAssistantOpen}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-rose text-ink shadow-soft transition-colors transition-transform hover:-translate-y-0.5 hover:bg-champagne focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose sm:h-auto sm:w-auto sm:gap-2 sm:px-5 sm:py-3 sm:text-sm sm:font-semibold"
            aria-label="Abrir chat Asistente Alo"
          >
            <Bot aria-hidden="true" size={17} />
            <span className="hidden sm:inline">Asistente Alo</span>
          </button>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink shadow-sm transition-colors hover:bg-blush focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose md:hidden"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            {isMenuOpen ? <X aria-hidden="true" size={19} /> : <Menu aria-hidden="true" size={19} />}
          </button>
        </div>
      </nav>

      {isMenuOpen ? (
        <div className="border-t border-ink/10 bg-ivory px-4 pb-5 pt-2 shadow-soft md:hidden">
          <div className="mx-auto grid max-w-7xl gap-3">
            <a href="#servicios" className="nav-link bg-white/70" onClick={closeMenu}>
              Servicios
            </a>
            <div className="grid gap-2 rounded-2xl bg-white/70 p-2">
              {serviceLinks.map((link) => (
                <a key={link.href} href={link.href} className="rounded-xl px-3 py-2 text-sm font-semibold text-cocoa hover:bg-blush" onClick={closeMenu}>
                  {link.label}
                </a>
              ))}
            </div>
            {mainLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link bg-white/70" onClick={closeMenu}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
