type BracketCTAProps = { href: string; children: React.ReactNode; dark?: boolean; };

export default function BracketCTA({ href, children, dark = false }: BracketCTAProps) {
  return (
    <a
      href={href}
      className={`bracket inline-flex min-h-12 items-center justify-center gap-2 border px-5 py-3.5 text-xs font-black uppercase tracking-[0.16em] transition duration-200 hover:-translate-y-0.5 sm:px-6 ${dark ? "border-white/30 text-white hover:border-[var(--red)]" : "border-black/25 text-[var(--ink)] hover:border-[var(--red)]"}`}
    >
      <span>(</span>{children}<span>)</span>
    </a>
  );
}
