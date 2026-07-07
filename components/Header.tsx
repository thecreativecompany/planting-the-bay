"use client";

import { useEffect, useState } from "react";
import FullscreenMenu from "./FullscreenMenu";

export default function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);
  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-black/10 bg-[rgba(243,238,228,.84)] backdrop-blur-md">
      <div className="mx-auto flex h-[72px] w-full max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-10">
        <a href="#home" className="text-sm font-black uppercase tracking-[0.2em] sm:text-base">CityLight House</a>
        <button onClick={() => setOpen(true)} aria-label="Open navigation" aria-expanded={open} className="group flex min-h-12 min-w-12 flex-col items-end justify-center gap-1.5 rounded-full border border-black/10 bg-black/[.03] px-3">
          <span className="h-0.5 w-8 bg-[var(--red)] transition group-hover:w-10" />
          <span className="h-0.5 w-5 bg-[var(--red)] transition group-hover:w-10" />
          <span className="h-0.5 w-10 bg-[var(--red)]" />
        </button>
      </div>
      <FullscreenMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
