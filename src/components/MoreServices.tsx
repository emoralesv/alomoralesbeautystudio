import { nailServices, pedicureServices, photographyServices } from "../data/content";
import { ServiceSliderSection } from "./ServiceSliderSection";

export function PhotographyServices() {
  return (
    <ServiceSliderSection
      id="fotografia"
      eyebrow="Fotografía profesional"
      title="Fotografía profesional"
      description="Contenido visual para renovar tu imagen, fortalecer tu marca personal o actualizar tus perfiles."
      items={photographyServices}
      tone="warm"
    />
  );
}

export function NailServices() {
  return (
    <ServiceSliderSection
      id="unas"
      eyebrow="Uñas y manos"
      title="Uñas y manos"
      description="Manicura, gel, técnicas de construcción y diseños personalizados para manos cuidadas."
      items={nailServices}
      tone="warm"
    />
  );
}

export function PedicureServices() {
  return (
    <ServiceSliderSection
      id="pedicura"
      eyebrow="Pedicura y combos"
      title="Pedicura"
      description="Cuidado estético, spa para pies y combos para coordinar manos y pies en una misma visita."
      items={pedicureServices}
    />
  );
}
