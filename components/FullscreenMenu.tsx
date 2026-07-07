import BracketCTA from "./BracketCTA";

const links = [
  ["Home", "#home"],
  ["About", "#mission"],
  ["Messages", "#featured"],
  ["Visit", "#visit"],
  ["Community", "#community"],
  ["Give", "#footer"],
];

type Props = { open: boolean; onClose: () => void };

export default function FullscreenMenu({ open, onClose }: Props) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black text-white" role="dialog" aria-modal="true" aria-label="Main navigation">
      <div className="flex h-full flex-col px-5 py-5 sm:px-10 sm:py-8" style={{ animation: "menuIn .35s ease both" }}>
        <div className="flex items-center justify-between">
          <a href="#home" onClick={onClose} className="text-sm font-black uppercase tracking-[0.24em]">CityLight House</a>
          <button onClick={onClose} aria-label="Close navigation" className="min-h-11 min-w-11 text-4xl font-black leading-none text-[var(--red)] transition hover:rotate-90">×</button>
        </div>
        <nav className="mt-auto mb-auto" aria-label="Fullscreen menu">
          <ul className="space-y-1">
            {links.map(([label, href], index) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={onClose}
                  className="group flex items-center gap-5 text-[clamp(2.5rem,10vw,8rem)] font-black uppercase leading-[.9] tracking-[-.08em] transition hover:translate-x-3"
                >
                  <span className="text-sm font-black tracking-normal text-[var(--red)]">0{index + 1}</span>
                  <span className="relative after:absolute after:bottom-1 after:left-0 after:h-1 after:w-0 after:bg-[var(--red)] after:transition-all group-hover:after:w-full">{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex flex-col gap-4 border-t border-white/20 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-lg text-sm uppercase tracking-[0.18em] text-white/60">Sunday Experience / Community / Purpose / Faith</p>
          <BracketCTA href="#visit" dark>Plan Your Visit</BracketCTA>
        </div>
      </div>
    </div>
  );
}
