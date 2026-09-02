export const WHATSAPP_URL = "https://wa.me/522219944133";
export const INSTAGRAM_URL = "https://www.instagram.com/alomoralesbeautystudio/";
export const FACEBOOK_URL = "https://www.facebook.com/alomoralesbeautystudio";

export const whatsappMessage = () =>
  `${WHATSAPP_URL}?text=${encodeURIComponent(
    "Hola, quiero información para agendar una cita en Alo Morales Beauty Studio.",
  )}`;

export const whatsappPackageMessage = (service: string) =>
  `${WHATSAPP_URL}?text=${encodeURIComponent(
    `Hola, quiero agendar una cita para ${service} en Alo Morales Beauty Studio.`,
  )}`;

export const image = (name: string) => `/images/${name}`;
