import { image } from "../lib/links";

export type SliderService = {
  eyebrow: string;
  title: string;
  description: string;
  price: string;
  imageSrc: string;
  imageAlt: string;
  includes: string[];
};

const STOCK_MANICURE_TABLE =
  "https://images.pexels.com/photos/4677861/pexels-photo-4677861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const STOCK_MANICURE_DETAIL =
  "https://images.pexels.com/photos/6135670/pexels-photo-6135670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const STOCK_MANICURE_POLISH =
  "https://images.pexels.com/photos/30294770/pexels-photo-30294770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const STOCK_NAIL_ART =
  "https://images.pexels.com/photos/28712961/pexels-photo-28712961/free-photo-of-elegant-nail-art-with-glitter-accent-on-hands.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const STOCK_NAIL_POLISH_HAND =
  "https://images.pexels.com/photos/6429661/pexels-photo-6429661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const STOCK_MANICURE_FILE =
  "https://images.pexels.com/photos/6135685/pexels-photo-6135685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const STOCK_MANICURE_SALON =
  "https://images.pexels.com/photos/34930140/pexels-photo-34930140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const STOCK_PEDICURE_MASSAGE =
  "https://images.pexels.com/photos/6663577/pexels-photo-6663577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const STOCK_PEDICURE_SPA =
  "https://images.pexels.com/photos/34201252/pexels-photo-34201252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const STOCK_PEDICURE_CLEAN =
  "https://images.pexels.com/photos/5619449/pexels-photo-5619449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const STOCK_PEDICURE_DAY =
  "https://images.pexels.com/photos/15949782/pexels-photo-15949782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const STOCK_PEDICURE_DETAIL =
  "https://images.pexels.com/photos/5619459/pexels-photo-5619459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const STOCK_TOE_POLISH =
  "https://images.pexels.com/photos/9789201/pexels-photo-9789201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const STOCK_PEDICURE_POLISH =
  "https://images.pexels.com/photos/34930117/pexels-photo-34930117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const STOCK_CONTENT_CREATION =
  "https://images.pexels.com/photos/5082576/pexels-photo-5082576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

export const socialServices: SliderService[] = [
  {
    eyebrow: "Maquillaje social",
    title: "Maquillaje profesional social",
    description: "Ideal para invitadas, damas de honor, graduadas y sesiones.",
    price: "$1,000 MXN",
    imageSrc: image("IMG_0053.webp"),
    imageAlt: "Maquillaje social glam con piel luminosa y ondas suaves",
    includes: [
      "DiseÃ±o de maquillaje social",
      "PreparaciÃ³n de piel",
      "Limpieza de cejas",
      "PestaÃ±as postizas",
    ],
  },
  {
    eyebrow: "Maquillaje + peinado",
    title: "Paquete Social Beauty",
    description: "Maquillaje profesional social con peinado social de cualquier largo.",
    price: "$1,500 MXN",
    imageSrc: image("Copia de 4.webp"),
    imageAlt: "Servicio social de maquillaje y peinado en Alo Morales Beauty Studio",
    includes: [
      "PreparaciÃ³n de piel e hidrataciÃ³n",
      "Limpieza de cejas",
      "PestaÃ±as postizas",
      "Ondas o peinado social",
    ],
  },
  {
    eyebrow: "Maquillaje + alaciado",
    title: "Paquete maquillaje social y alaciado",
    description: "Una opciÃ³n pulida para eventos donde buscas maquillaje y cabello lacio.",
    price: "$1,400 MXN",
    imageSrc: image("Copia de Copia de 4 (1).webp"),
    imageAlt: "Peinado social pulido con cabello rubio y acabado profesional",
    includes: [
      "PreparaciÃ³n de piel e hidrataciÃ³n",
      "Limpieza de cejas",
      "PestaÃ±as postizas",
      "Alaciado de cabello",
    ],
  },
  {
    eyebrow: "Peinados por tipo",
    title: "Peinado profesional social",
    description: "Peinado social para cualquier largo, con opciones para extensiones y secado.",
    price: "Desde $650 MXN",
    imageSrc: image("Copia de Copia de Copia de 4(1).webp"),
    imageAlt: "Estacion de peinado profesional en el estudio de Alo Morales",
    includes: [
      "Peinado cualquier largo: $650",
      "Con extensiones: $750",
      "Secado de cabello: $150",
      "No incluye extensiones",
    ],
  },
];

export const photographyServices: SliderService[] = [
  {
    eyebrow: "FotografÃ­a profesional",
    title: "SesiÃ³n fotogrÃ¡fica profesional",
    description: "SesiÃ³n pensada para renovar tu imagen con direcciÃ³n de pose y estÃ©tica cuidada.",
    price: "",
    imageSrc: image("Copia de DSC_8095.webp"),
    imageAlt: "SesiÃ³n fotogrÃ¡fica profesional con estilismo y direcciÃ³n visual",
    includes: [
      "DirecciÃ³n durante la sesiÃ³n",
      "Look visual alineado a tu estilo",
      "Fotos para uso personal o profesional",
    ],
  },
  {
    eyebrow: "Marca personal",
    title: "FotografÃ­a para marca personal",
    description: "Contenido para mostrar tu trabajo, personalidad y presencia profesional en redes.",
    price: "",
    imageSrc: image("IMG_8608.webp"),
    imageAlt: "Retrato editorial para marca personal con estilismo glam",
    includes: [
      "PlaneaciÃ³n de concepto visual",
      "FotografÃ­as para perfil y redes",
      "GuÃ­a de poses durante la sesiÃ³n",
    ],
  },
  {
    eyebrow: "Redes sociales",
    title: "Contenido para redes sociales",
    description: "Fotos cuidadas para alimentar Instagram, perfiles profesionales o campaÃ±as personales.",
    price: "",
    imageSrc: STOCK_CONTENT_CREATION,
    imageAlt: "CreaciÃ³n de contenido para redes sociales con celular y material visual",
    includes: [
      "Tomas verticales y horizontales",
      "Contenido para publicaciones",
      "EstÃ©tica acorde a tu marca",
    ],
  },
  {
    eyebrow: "Perfil profesional",
    title: "FotografÃ­a para perfiles profesionales",
    description: "Retratos limpios y actuales para CV, LinkedIn, portafolios o presentaciÃ³n personal.",
    price: "",
    imageSrc: image("Facetune_18-09-2023-23-06-38.webp"),
    imageAlt: "Retrato profesional con acabado pulido para perfil",
    includes: [
      "Retrato individual",
      "DirecciÃ³n de expresiÃ³n y postura",
      "Imagen profesional actualizada",
    ],
  },
  {
    eyebrow: "RenovaciÃ³n de imagen",
    title: "RenovaciÃ³n de imagen personal",
    description: "Una sesiÃ³n para actualizar cÃ³mo te presentas visualmente, con enfoque elegante y natural.",
    price: "",
    imageSrc: image("Copia de Copia de Copia de 4.webp"),
    imageAlt: "PreparaciÃ³n de imagen personal en estudio profesional",
    includes: [
      "AsesorÃ­a visual bÃ¡sica",
      "CoordinaciÃ³n con maquillaje o peinado",
      "Fotos para una nueva etapa personal",
    ],
  },
];

export const nailServices: SliderService[] = [
  {
    eyebrow: "UÃ±as y manos",
    title: "Manicura combinada",
    description: "Limpieza y preparaciÃ³n de la uÃ±a para un acabado prolijo y duradero.",
    price: "",
    imageSrc: STOCK_MANICURE_TABLE,
    imageAlt: "Detalle de servicio de manicura profesional",
    includes: ["PreparaciÃ³n de cutÃ­cula", "Limpieza de manos", "Acabado cuidado"],
  },
  {
    eyebrow: "UÃ±as y manos",
    title: "Gel semipermanente",
    description: "Color en gel para manos con acabado brillante y prÃ¡ctico para el dÃ­a a dÃ­a.",
    price: "",
    imageSrc: STOCK_MANICURE_DETAIL,
    imageAlt: "AplicaciÃ³n de gel semipermanente en uÃ±as",
    includes: ["PreparaciÃ³n de uÃ±a natural", "AplicaciÃ³n de gel", "Sellado final"],
  },
  {
    eyebrow: "UÃ±as y manos",
    title: "Rubber gel",
    description: "Refuerzo flexible para uÃ±as naturales que necesitan estructura ligera.",
    price: "",
    imageSrc: STOCK_MANICURE_POLISH,
    imageAlt: "Servicio de rubber gel para uÃ±as naturales",
    includes: ["NivelaciÃ³n de uÃ±a", "Refuerzo flexible", "Acabado natural"],
  },
  {
    eyebrow: "UÃ±as y manos",
    title: "Builder gel",
    description: "ConstrucciÃ³n y refuerzo con gel para una manicura con mayor resistencia.",
    price: "",
    imageSrc: STOCK_MANICURE_FILE,
    imageAlt: "Mesa de trabajo para servicio profesional de uÃ±as",
    includes: ["Estructura con gel", "CorrecciÃ³n de forma", "Acabado resistente"],
  },
  {
    eyebrow: "UÃ±as y manos",
    title: "Polygel",
    description: "TÃ©cnica para extensiÃ³n o refuerzo con acabado ligero y moldeable.",
    price: "",
    imageSrc: STOCK_NAIL_POLISH_HAND,
    imageAlt: "Servicio de belleza en estudio con tÃ©cnica profesional",
    includes: ["AplicaciÃ³n de polygel", "DiseÃ±o de forma", "Sellado final"],
  },
  {
    eyebrow: "UÃ±as y manos",
    title: "UÃ±as acrÃ­licas",
    description: "ExtensiÃ³n clÃ¡sica para lograr largo, forma y diseÃ±o personalizado.",
    price: "",
    imageSrc: STOCK_NAIL_ART,
    imageAlt: "Servicio de uÃ±as acrÃ­licas en estudio de belleza",
    includes: ["ExtensiÃ³n con acrÃ­lico", "Forma a elecciÃ³n", "Acabado personalizado"],
  },
  {
    eyebrow: "DiseÃ±o",
    title: "DiseÃ±os personalizados / nail art",
    description: "Detalles, colores y diseÃ±os pensados para tu evento o estilo personal.",
    price: "",
    imageSrc: STOCK_MANICURE_SALON,
    imageAlt: "DiseÃ±o personalizado de uÃ±as y nail art",
    includes: ["DiseÃ±o a elecciÃ³n", "Detalles decorativos", "Acabado final"],
  },
];

export const pedicureServices: SliderService[] = [
  {
    eyebrow: "Pedicura",
    title: "Pedicura con hilo",
    description: "Cuidado estÃ©tico de pies con tÃ©cnica detallada para una limpieza precisa.",
    price: "",
    imageSrc: STOCK_PEDICURE_CLEAN,
    imageAlt: "Servicio de pedicura profesional en estudio",
    includes: ["Limpieza de pies", "Trabajo de detalle", "Acabado cuidado"],
  },
  {
    eyebrow: "Pedicura",
    title: "Tratamiento para callosidades e hiperqueratosis",
    description: "Tratamiento enfocado en suavizar zonas endurecidas y mejorar la textura de la piel.",
    price: "",
    imageSrc: STOCK_PEDICURE_DETAIL,
    imageAlt: "Tratamiento estÃ©tico para pies y callosidades",
    includes: ["EvaluaciÃ³n estÃ©tica", "Trabajo en zonas endurecidas", "HidrataciÃ³n final"],
  },
  {
    eyebrow: "Pedicura",
    title: "EliminaciÃ³n de cÃ©lulas muertas",
    description: "ExfoliaciÃ³n y cuidado para dejar los pies mÃ¡s suaves y preparados.",
    price: "",
    imageSrc: STOCK_PEDICURE_DAY,
    imageAlt: "Cuidado de pies con eliminaciÃ³n de cÃ©lulas muertas",
    includes: ["ExfoliaciÃ³n", "Limpieza estÃ©tica", "SensaciÃ³n suave"],
  },
  {
    eyebrow: "Pedicura",
    title: "Pedicura SPA",
    description: "Experiencia de cuidado para pies con enfoque relajante y acabado pulido.",
    price: "",
    imageSrc: STOCK_PEDICURE_SPA,
    imageAlt: "Pedicura spa en ambiente de belleza profesional",
    includes: ["Limpieza de pies", "Cuidado relajante", "HidrataciÃ³n"],
  },
  {
    eyebrow: "Pedicura",
    title: "Gel semipermanente en pies",
    description: "AplicaciÃ³n de gel para pies con acabado brillante y de larga duraciÃ³n.",
    price: "",
    imageSrc: STOCK_TOE_POLISH,
    imageAlt: "AplicaciÃ³n de gel semipermanente en pies",
    includes: ["PreparaciÃ³n de uÃ±as", "AplicaciÃ³n de gel", "Sellado final"],
  },
  {
    eyebrow: "Combo",
    title: "Pedicura SPA + manicura combinada",
    description: "Una opciÃ³n prÃ¡ctica para cuidar manos y pies en una misma visita.",
    price: "",
    imageSrc: STOCK_PEDICURE_MASSAGE,
    imageAlt: "Combo de manicura y pedicura en estudio de belleza",
    includes: ["Manicura combinada", "Pedicura SPA", "Servicio coordinado"],
  },
  {
    eyebrow: "Combo",
    title: "Gel semipermanente en manos y pies",
    description: "Color de un tono en manos y pies para un acabado uniforme.",
    price: "",
    imageSrc: STOCK_PEDICURE_POLISH,
    imageAlt: "Combo de gel semipermanente en manos y pies",
    includes: ["Gel en manos", "Gel en pies", "Un tono a elecciÃ³n"],
  },
];

export const xvSliderPackages: SliderService[] = [
  {
    eyebrow: "XV aÃ±os",
    title: "Paquete Oro",
    description: "Experiencia completa con prueba previa y look del dÃ­a del evento en studio.",
    price: "$5,600 MXN",
    imageSrc: image("Copia de Copia de Copia de POST IG MARCA AGUA (2).webp"),
    imageAlt: "Maquillaje para XV aÃ±os con tiara, ondas marcadas y acabado glam",
    includes: [
      "Prueba de maquillaje y peinado en studio",
      "Maquillaje y peinado dÃ­a del evento en studio",
      "Mascarilla de preparaciÃ³n de piel",
      "Limpieza de cejas y pestaÃ±as postizas",
      "Glow en escote, bronceadores y aplicaciÃ³n de tocado o corona",
    ],
  },
  {
    eyebrow: "XV aÃ±os",
    title: "Paquete Plata",
    description: "Look de maquillaje y peinado para el dÃ­a del evento, con preparaciÃ³n de piel.",
    price: "$4,000 MXN",
    imageSrc: image("Copia de Copia de Copia de POST IG MARCA AGUA (3).webp"),
    imageAlt: "Detalle de maquillaje glam para evento social con sombras rosadas",
    includes: [
      "Maquillaje y peinado para dÃ­a del evento en studio",
      "PreparaciÃ³n de piel",
      "Limpieza de cejas y pestaÃ±as postizas",
      "Glow en escote",
      "AplicaciÃ³n de tocado o corona",
    ],
  },
];

export const galleryImages = [
  {
    src: image("Copia de POST IG MARCA AGUA (1).webp"),
    alt: "Maquillaje de novia con velo y acabado glam elegante en Alo Morales Beauty Studio",
    category: "Novias",
    title: "Bridal glam",
  },
  {
    src: image("Copia de Copia de Copia de POST IG MARCA AGUA (2).webp"),
    alt: "Maquillaje social para XV aÃ±os con tiara y ondas marcadas",
    category: "XV aÃ±os",
    title: "XV aÃ±os glam",
  },
  {
    src: image("IMG_0053.webp"),
    alt: "Maquillaje social glam con ondas y piel luminosa",
    category: "Social",
    title: "Social beauty",
  },
  {
    src: image("Copia de Copia de 4 (1).webp"),
    alt: "Peinado social con ondas definidas en cabello rubio",
    category: "Peinado",
    title: "Ondas glam",
  },
  {
    src: image("Copia de Copia de Copia de 4(1).webp"),
    alt: "EstaciÃ³n profesional de maquillaje con espejo iluminado",
    category: "Studio",
    title: "Nuestro espacio",
  },
  {
    src: image("Copia de 4.webp"),
    alt: "Servicio integral de maquillaje y peinado en studio",
    category: "Experiencia",
    title: "Maquillaje + peinado",
  },
  {
    src: image("Copia de POST IG MARCA AGUA (2).webp"),
    alt: "Novia con velo en pose lateral y maquillaje suave glam",
    category: "Novias",
    title: "Soft bridal",
  },
  {
    src: image("Copia de Copia de Copia de POST IG MARCA AGUA (3).webp"),
    alt: "Detalle de maquillaje glam con sombras rosadas brillantes y delineado definido",
    category: "Social",
    title: "Detalle glam",
  },
  {
    src: image("IMG_8608(1).webp"),
    alt: "Retrato editorial glam con vestido azul brillante y guante negro",
    category: "Editorial",
    title: "Editorial glow",
  },
  {
    src: image("Copia de DSC_8095.webp"),
    alt: "SesiÃ³n editorial backstage con estilismo profesional de cabello",
    category: "Editorial",
    title: "Backstage",
  },
];

export const bridalSliderPackages: SliderService[] = [
  {
    eyebrow: "Novias",
    title: "Paquete Oro",
    description: "Preparacion nupcial completa con prueba previa y look del dia del evento en studio.",
    price: "$6,900 MXN",
    imageSrc: image("Copia de POST IG MARCA AGUA (1).webp"),
    imageAlt: "Maquillaje de novia con velo y acabado glam elegante",
    includes: [
      "Prueba de maquillaje y peinado en studio",
      "Maquillaje y peinado para el día del evento en studio",
      "Preparación de piel completa",
      "Mascarilla y parches de hidratación",
      "Diseño de cejas y pestañas postizas",
      "Brillos o bronceadores en pecho y espalda",
      "Colocación de tocado y velo",
    ],
  },
  {
    eyebrow: "Novias",
    title: "Paquete Diamante",
    description: "El paquete mas completo para novia, con belleza nupcial, extras sociales, unas y pedicura.",
    price: "$9,800 MXN",
    imageSrc: image("Copia de POST IG MARCA AGUA.webp"),
    imageAlt: "Novia editorial con velo y guante transparente",
    includes: [
      "Prueba de maquillaje y peinado en studio",
      "Maquillaje y peinado día del evento",
      "Preparación de piel completa",
      "Mascarilla y parches de hidratación",
      "Diseño de cejas y pestañas postizas",
      "Brillos o bronceadores en pecho y espalda",
      "Colocación de tocado y velo",
      "1 paquete extra de maquillaje y peinado social",
      "Uñas softgel con diseño sencillo nupcial",
      "Pedicura spa con gel semipermanente nupcial",
      "Regalo: matificación e hidratación para el novio",
    ],
  },
];

export const policyGroups = [
  {
    title: "Reservas y anticipos",
    items: [
      "Anticipo no reembolsable.",
      "Los anticipos no son transferibles ni acumulables para otros paquetes o servicios.",
      "Novias y XVaÃ±eras reservan fecha Ãºnicamente con anticipo del 50% del paquete.",
    ],
  },
  {
    title: "Cancelaciones",
    items: ["Cancelaciones con mÃ­nimo 24 horas de anticipaciÃ³n para reagendar."],
  },
  {
    title: "Servicio a domicilio",
    items: [
      "NingÃºn paquete incluye servicio a domicilio.",
      "Para paquetes sociales a domicilio se requieren mÃ­nimo 4 paquetes sociales.",
      "El costo de servicio a domicilio depende de la ubicaciÃ³n: $700 a $1,500 MXN.",
    ],
  },
  {
    title: "Horarios de madrugada",
    items: ["Servicios antes de las 09:00 a.m. tienen costo extra de $300 MXN por paquete."],
  },
  {
    title: "Novias y XV aÃ±os",
    items: [
      "La prueba de maquillaje se realiza en nuestro studio.",
      "Domicilio para novia o XVaÃ±era requiere 3 paquetes extra y costo de traslado.",
    ],
  },
];

export const faqs = [
  {
    question: "Â¿Alo Morales Beauty Studio atiende a domicilio en Acapulco?",
    answer: "SÃ­. El servicio a domicilio estÃ¡ disponible en Acapulco y alrededores, pero no estÃ¡ incluido de base en los paquetes. Para paquetes sociales a domicilio se requieren mÃ­nimo 4 paquetes mÃ¡s costo de traslado.",
  },
  {
    question: "Â¿CuÃ¡nto cuesta el traslado para servicios a domicilio?",
    answer: "El costo de traslado depende de la ubicaciÃ³n y normalmente va de $700 a $1,500 MXN. Para confirmar el precio exacto se revisa la direcciÃ³n antes de reservar.",
  },
  {
    question: "Â¿CÃ³mo puedo apartar una fecha para maquillaje, peinado o paquetes?",
    answer: "La fecha se aparta por WhatsApp con anticipo. Para paquetes de novia y XV aÃ±os se requiere el 50% del costo del paquete para confirmar la reserva.",
  },
  {
    question: "Â¿Los paquetes de novia y XV aÃ±os incluyen prueba de maquillaje y peinado?",
    answer: "La prueba estÃ¡ incluida sÃ³lo en los paquetes donde se menciona explÃ­citamente. Las pruebas se realizan en el studio antes del dÃ­a del evento.",
  },
  {
    question: "Â¿QuÃ© pasa si cancelo o necesito reagendar mi cita?",
    answer: "El anticipo no es reembolsable. Puedes solicitar reagendar si avisas con mÃ­nimo 24 horas de anticipaciÃ³n, sujeto a disponibilidad.",
  },
  {
    question: "Â¿Atienden eventos temprano, antes de las 9:00 a.m.?",
    answer: "SÃ­. Los servicios antes de las 09:00 a.m. se consideran horario de madrugada y tienen costo extra de $300 MXN por paquete.",
  },
  {
    question: "Â¿Ofrecen fotografÃ­a profesional y contenido para redes sociales?",
    answer: "SÃ­. El studio ofrece sesiones fotogrÃ¡ficas profesionales, fotografÃ­a para marca personal, contenido para redes sociales, perfiles profesionales y renovaciÃ³n de imagen personal.",
  },
  {
    question: "Â¿QuÃ© servicios de uÃ±as y manos manejan?",
    answer: "Los servicios de uÃ±as y manos incluyen manicura combinada, gel semipermanente, rubber gel, builder gel, polygel, uÃ±as acrÃ­licas y diseÃ±os personalizados o nail art.",
  },
  {
    question: "Â¿QuÃ© servicios de pedicura ofrecen?",
    answer: "Los servicios de pedicura incluyen pedicura con hilo, tratamiento para callosidades e hiperqueratosis, eliminaciÃ³n de cÃ©lulas muertas, pedicura SPA y gel semipermanente en pies.",
  },
  {
    question: "Â¿Hay combos de manicura y pedicura?",
    answer: "SÃ­. Hay combos para manos y pies, como pedicura SPA con manicura combinada y gel semipermanente de un tono en manos y pies.",
  },
];

