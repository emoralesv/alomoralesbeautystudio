import { socialServices } from "../data/content";
import { ServiceSliderSection } from "./ServiceSliderSection";

export function Services() {
  return (
    <ServiceSliderSection
      id="servicios"
      eyebrow="Servicios sociales"
      title="Servicios sociales"
      description="Elige entre maquillaje social, paquetes con peinado, alaciado o peinados por tipo."
      items={socialServices}
    />
  );
}
