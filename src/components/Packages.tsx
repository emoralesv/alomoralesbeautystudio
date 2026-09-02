import { bridalSliderPackages, xvSliderPackages } from "../data/content";
import { ServiceSliderSection } from "./ServiceSliderSection";

export function XVPackages() {
  return (
    <ServiceSliderSection
      id="xv"
      eyebrow="XVañeras"
      title="Paquetes para XV años"
      description="Elige el paquete para tu sesión, prueba o día del evento. Las fechas se apartan con el 50% del paquete."
      items={xvSliderPackages}
      tone="warm"
    />
  );
}

export function BridalPackages() {
  return (
    <ServiceSliderSection
      id="novias"
      eyebrow="Novias"
      title="Paquetes para novias"
      description="Preparación completa, detalles nupciales y una experiencia pensada para que vivas el día con calma."
      items={bridalSliderPackages}
    />
  );
}
