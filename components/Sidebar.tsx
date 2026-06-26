import { BrandMark } from "@/components/BrandMark";
import { navLinks } from "@/lib/data";

export function Sidebar() {
  return (
    <aside className="sticky top-0 hidden h-screen max-h-screen w-[250px] shrink-0 overflow-y-auto border-r border-line bg-white lg:flex lg:flex-col">
      <div className="px-7 pt-6">
        <a
          href="#top"
          aria-label="MetaDAO home"
          className="inline-flex rounded-full transition-transform duration-200 hover:scale-[1.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
        >
          <BrandMark size={34} label="MetaDAO" />
        </a>
      </div>

      <nav className="mt-14 flex flex-col gap-7 px-7 text-[11px] text-ink" aria-label="Primary navigation">
        {navLinks.map((link, index) => (
          <a
            href={link.href}
            key={link.label}
            className="group flex w-fit items-center gap-2 transition-colors hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
          >
            <span
              aria-hidden="true"
              className={`h-1.5 w-1.5 rounded-full transition-all duration-200 ${index === 0 ? "bg-brand" : "bg-line group-hover:bg-brand"}`}
            />
            {link.label}
          </a>
        ))}
      </nav>

      <div className="mt-auto p-3">
        <div className="border border-line bg-surface p-4 shadow-[0_12px_30px_rgba(11,11,11,0.04)]">
          <p className="text-[12px] font-medium text-ink">Raise today</p>
          <p className="mt-3 max-w-[120px] text-[9px] leading-4 text-ink/70">
            Everything you need to raise, price, and govern in one terminal.
          </p>
          <a
            href="#resources"
            className="mt-4 flex h-[34px] items-center justify-center bg-brand text-[11px] font-medium text-white transition duration-200 ease-out hover:-translate-y-px hover:bg-[#ed3439] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand active:translate-y-0"
          >
            Start now
          </a>
          <a
            href="#docs"
            className="mt-2 flex h-[30px] items-center justify-center border border-line bg-white text-[10px] font-medium text-ink transition duration-200 ease-out hover:border-ink/25 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            Read docs
          </a>
        </div>
      </div>
    </aside>
  );
}
