import { CalendarHeart, Gem, Heart, Sparkles } from "lucide-react";

export function QuickActions() {
  const actions = [
    { label: "Maquillaje", href: "#maquillaje-peinado", icon: Sparkles },
    { label: "Novias", href: "#novias", icon: Heart },
    { label: "XV años", href: "#xv", icon: CalendarHeart },
    { label: "Uñas", href: "#unas", icon: Gem },
  ];

  return (
    <nav className="mt-8 max-w-2xl" aria-label="Accesos rápidos a servicios">
      <div className="flex flex-wrap gap-2">
        {actions.map(({ label, href, icon: Icon }) => (
          <a key={label} href={href} className="quick-pill">
            <Icon aria-hidden="true" size={16} /> {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
