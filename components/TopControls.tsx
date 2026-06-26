export function TopControls() {
  return (
    <div className="flex h-[44px] max-w-[124px] shrink-0 items-center overflow-hidden bg-white text-[10px] text-ink sm:max-w-none lg:h-[35px]">
      <label className="hidden h-full w-[220px] items-center gap-2 border-r border-line px-4 text-muted transition-colors focus-within:text-ink md:flex">
        <span aria-hidden="true" className="text-[17px] leading-none">⌕</span>
        <span className="sr-only">Search projects</span>
        <input
          className="min-w-0 flex-1 bg-transparent text-[10px] outline-none placeholder:text-muted focus:placeholder:text-ink/45"
          placeholder="Search projects"
        />
        <kbd className="rounded-sm border border-line bg-surface px-1.5 py-0.5 text-[9px] text-ink">Ctrl K</kbd>
      </label>
      <div className="hidden h-full items-center border-r border-line px-5 font-semibold tabular-nums md:flex" aria-label="Wallet balance">
        $1,581
      </div>
      <button
        type="button"
        aria-label="Open wallet menu for 0xBBB...6hn9"
        className="flex h-full min-w-0 items-center gap-2 px-3 text-muted transition duration-200 ease-out hover:bg-surface hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-brand sm:px-4"
      >
        <span className="h-2 w-2 shrink-0 rounded-full bg-good ring-2 ring-good/15" />
        <span className="hidden truncate sm:inline">0xBBB...6hn9</span>
        <span aria-hidden="true">⌄</span>
      </button>
    </div>
  );
}
