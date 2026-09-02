import { faqs } from "../data/content";

export function FAQ() {
  return (
    <section id="faq" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="eyebrow">FAQ</p>
        <h2 className="section-title">Preguntas frecuentes</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <article key={faq.question} className="rounded-[1.6rem] bg-ivory p-5 shadow-sm">
              <h3 className="text-base font-bold text-ink">{faq.question}</h3>
              <p className="mt-3 text-sm leading-6 text-cocoa">{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
