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
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-black/10 bg-[rgba(243,238,228,.78)] backdrop-blur-md">
      <div className="flex h-16 items-center justify-between px-4 sm:px-8">
        <a href="#home" className="text-xs font-black uppercase tracking-[0.24em] sm:text-sm">CityLight House</a>
        <button onClick={() => setOpen(true)} aria-label="Open navigation" aria-expanded={open} className="group flex min-h-11 min-w-11 flex-col items-end justify-center gap-1.5">
          <span className="h-0.5 w-8 bg-[var(--red)] transition group-hover:w-10" />
          <span className="h-0.5 w-5 bg-[var(--red)] transition group-hover:w-10" />
          <span className="h-0.5 w-10 bg-[var(--red)]" />
        </button>
      </div>
      <FullscreenMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
