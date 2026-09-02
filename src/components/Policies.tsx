import { Star } from "lucide-react";
import { policyGroups } from "../data/content";

export function Policies() {
  return (
    <section id="politicas" className="section">
      <p className="eyebrow">Políticas</p>
      <h2 className="section-title">Detalles importantes antes de reservar</h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {policyGroups.map((group) => (
          <article key={group.title} className="rounded-[1.6rem] border border-ink/10 bg-white p-5 shadow-sm">
            <h3 className="font-display text-2xl text-ink">{group.title}</h3>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-cocoa">
              {group.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <Star aria-hidden="true" className="mt-1 shrink-0 text-champagne" size={14} /> {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
