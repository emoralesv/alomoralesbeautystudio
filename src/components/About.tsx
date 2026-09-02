import { image } from "../lib/links";

export function About() {
  return (
    <section id="sobre" className="section grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
      <div>
        <p className="eyebrow">Sobre Alo Morales</p>
        <h2 className="section-title">Belleza profesional con una experiencia cálida y delicada</h2>
        <p className="section-copy">
          ALO MORALES BEAUTY STUDIO es un espacio creado para realzar tu belleza y acompañarte en tus momentos especiales. Somos expertos en belleza social, maquillaje profesional, peinado, novias y XV años.
        </p>
        <p className="mt-5 rounded-[2rem] bg-blush/70 p-5 text-cocoa">
          Nos encontramos en Acapulco Diamante, entrando por Boulevard de las Naciones o Colosio, a 5 minutos de Princess Mundo Imperial.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <img className="image-card mt-10 aspect-[4/5]" src={image("Copia de Copia de 4.webp")} alt="Maquillista aplicando maquillaje profesional frente a espejo en Alo Morales Beauty Studio" loading="lazy" />
        <img className="image-card aspect-[4/5]" src={image("Copia de Copia de Copia de 4(1).webp")} alt="Estación de maquillaje profesional con espejo iluminado y productos organizados" loading="lazy" />
      </div>
    </section>
  );
}
