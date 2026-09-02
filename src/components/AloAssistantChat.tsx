import { Bot, LoaderCircle, MessageCircle, Send, X } from "lucide-react";
import { useState } from "react";
import type { FormEvent } from "react";
import { whatsappMessage } from "../lib/links";

export function AloAssistantChat({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hola, soy Asistente Alo. Puedo orientarte sobre servicios, paquetes, tiempos de reserva y qué opción podría funcionar mejor para tu evento.",
    },
  ]);
  const [isThinking, setIsThinking] = useState(false);

  const suggestions = [
    "Quiero un look para boda",
    "Comparar paquetes de novia",
    "Servicios de uñas",
    "Fotografía para marca personal",
  ];

  const replyFor = (message: string) => {
    const lowerMessage = message.toLowerCase();

    if (lowerMessage.includes("novia")) {
      return "Para novia tenemos paquetes con preparación de piel, prueba en studio y detalles nupciales. Te recomiendo compartir fecha, horario y lugar para revisar disponibilidad.";
    }

    if (lowerMessage.includes("xv")) {
      return "Para XV años contamos con paquetes Oro y Plata. La fecha se aparta con el 50% del paquete y la prueba se realiza en studio.";
    }

    if (lowerMessage.includes("uña") || lowerMessage.includes("unas") || lowerMessage.includes("gel")) {
      return "En uñas manejamos manicura combinada, gel semipermanente, rubber gel, builder gel, polygel, acrílicas y nail art personalizado.";
    }

    if (lowerMessage.includes("foto") || lowerMessage.includes("marca")) {
      return "Para fotografía podemos ayudarte con sesión profesional, marca personal, contenido para redes, perfiles profesionales y renovación de imagen.";
    }

    return "Puedo ayudarte a elegir entre maquillaje, peinado, fotografía, uñas, pedicura, combos, novias o XV años. Para reservar, lo ideal es confirmar fecha, horario y servicio.";
  };

  const sendMessage = (text: string) => {
    const trimmed = text.trim();

    if (!trimmed || isThinking) {
      return;
    }

    setMessages((current) => [...current, { role: "user", text: trimmed }]);
    setInput("");
    setIsThinking(true);

    window.setTimeout(() => {
      setMessages((current) => [...current, { role: "assistant", text: replyFor(trimmed) }]);
      setIsThinking(false);
    }, 700);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendMessage(input);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50">
      <button
        type="button"
        className="absolute inset-0 bg-ink/35 backdrop-blur-sm"
        aria-label="Cerrar chat Asistente Alo"
        onClick={onClose}
      />
      <aside
        className="absolute bottom-0 right-0 flex h-[min(720px,100svh)] w-full flex-col overflow-hidden rounded-t-[1.75rem] bg-ivory shadow-2xl sm:bottom-6 sm:right-6 sm:w-[420px] sm:rounded-[1.75rem]"
        aria-label="Chat Asistente Alo"
        role="dialog"
        aria-modal="true"
      >
        <header className="flex items-center justify-between border-b border-ink/10 bg-white px-5 py-4">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-ivory">
              <Bot aria-hidden="true" size={19} />
            </span>
            <div>
              <h2 className="text-base font-bold text-ink">Asistente Alo</h2>
              <p className="text-xs font-semibold text-cocoa">Guía de servicios y agenda</p>
            </div>
          </div>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-blush text-ink transition-colors hover:bg-rose/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose"
            aria-label="Cerrar Asistente Alo"
            onClick={onClose}
          >
            <X aria-hidden="true" size={18} />
          </button>
        </header>

        <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5">
          <div className="rounded-[1.25rem] bg-blush/70 p-4 text-sm leading-6 text-cocoa">
            Cuéntame qué servicio estás buscando y te ayudo a ubicar la mejor opción antes de agendar.
          </div>
          {messages.map((message, index) => (
            <div key={`${message.role}-${index}`} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
              <p className={`max-w-[82%] rounded-[1.25rem] px-4 py-3 text-sm leading-6 ${message.role === "user" ? "bg-ink text-ivory" : "bg-white text-cocoa shadow-sm"}`}>
                {message.text}
              </p>
            </div>
          ))}
          {isThinking ? (
            <div className="flex justify-start">
              <p className="inline-flex items-center gap-2 rounded-[1.25rem] bg-white px-4 py-3 text-sm font-semibold text-cocoa shadow-sm">
                <LoaderCircle aria-hidden="true" className="animate-spin" size={16} />
                Asistente Alo está preparando una respuesta
              </p>
            </div>
          ) : null}
        </div>

        <div className="border-t border-ink/10 bg-white p-4">
          <div className="mb-3 flex gap-2 overflow-x-auto pb-1">
            {suggestions.map((suggestion) => (
              <button
                key={suggestion}
                type="button"
                className="min-w-max rounded-full bg-blush px-3 py-2 text-xs font-bold text-cocoa transition-colors hover:bg-rose/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose"
                onClick={() => sendMessage(suggestion)}
              >
                {suggestion}
              </button>
            ))}
          </div>
          <form className="flex gap-2" onSubmit={handleSubmit}>
            <input
              className="min-w-0 flex-1 rounded-full border border-ink/10 bg-ivory px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-cocoa/60 focus:border-rose"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Escribe tu pregunta"
              aria-label="Mensaje para Asistente Alo"
            />
            <button
              type="submit"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ink text-ivory shadow-sm transition-colors hover:bg-cocoa focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose disabled:cursor-not-allowed disabled:opacity-50"
              disabled={!input.trim() || isThinking}
              aria-label="Enviar mensaje"
            >
              <Send aria-hidden="true" size={18} />
            </button>
          </form>
          <a
            href={whatsappMessage()}
            target="_blank"
            rel="noreferrer"
            className="mt-3 flex items-center justify-center gap-2 rounded-full border border-ink/10 px-4 py-3 text-sm font-bold text-ink transition-colors hover:bg-blush focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose"
          >
            <MessageCircle aria-hidden="true" size={16} /> Continuar por WhatsApp
          </a>
        </div>
      </aside>
    </div>
  );
}
