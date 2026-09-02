import { FACEBOOK_URL, INSTAGRAM_URL, image, whatsappMessage } from "../lib/links";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-ivory px-4 py-10 text-ink sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <img src={image("Copia de Asset 3@3x.webp")} alt="Logo Alo Morales Beauty Studio" loading="lazy" className="h-10 w-auto" />
          <p className="mt-3 text-sm text-cocoa">Acapulco Diamante · Un espacio para tratarte con delicadeza.</p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-cocoa">
          <a className="transition hover:text-ink" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">Instagram</a>
          <a className="transition hover:text-ink" href={FACEBOOK_URL} target="_blank" rel="noreferrer">Facebook</a>
          <a className="transition hover:text-ink" href="https://maps.google.com/?q=Acapulco%20Diamante" target="_blank" rel="noreferrer">Ubicación</a>
          <a className="transition hover:text-ink" href={whatsappMessage()} target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
}
