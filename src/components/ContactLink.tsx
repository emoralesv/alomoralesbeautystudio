import type { ReactNode } from "react";

export function ContactLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "light" | "ghost";
  className?: string;
}) {
  const styles = {
    primary: "bg-ink text-ivory shadow-soft hover:-translate-y-0.5 hover:bg-cocoa",
    light: "bg-ivory text-ink shadow-soft hover:-translate-y-0.5",
    ghost: "border border-ink/15 bg-white/70 text-ink hover:bg-white",
  };

  return (
    <a
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-transform transition-colors ${styles[variant]} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose ${className}`}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}
