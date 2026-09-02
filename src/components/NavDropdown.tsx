import { ChevronDown } from "lucide-react";

type NavDropdownLink = {
  href: string;
  label: string;
  detail: string;
};

export function NavDropdown({
  label,
  href,
  links,
}: {
  label: string;
  href: string;
  links: NavDropdownLink[];
}) {
  return (
    <div className="group relative">
      <a href={href} className="nav-link inline-flex items-center gap-1" aria-haspopup="true">
        {label}
        <ChevronDown aria-hidden="true" size={14} />
      </a>
      <div className="invisible absolute left-0 top-full z-50 w-72 pt-3 opacity-0 transition-opacity group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div className="rounded-[1.25rem] border border-ink/10 bg-white p-2 shadow-soft">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="block rounded-2xl px-4 py-3 text-sm transition-colors hover:bg-blush focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose">
              <span className="block font-bold text-ink">{link.label}</span>
              <span className="mt-1 block text-xs leading-5 text-cocoa">{link.detail}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
