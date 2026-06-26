export function DocsSection() {
  return (
    <section id="docs" className="border-t border-line bg-white py-14 lg:py-[60px]" aria-label="Documentation and resources">
      <div className="grid gap-8 border-t border-line pt-6 lg:grid-cols-[minmax(0,1fr)_420px]">
        <div>
          <p className="mb-2 text-[10px] uppercase tracking-[0.18em] text-muted">Start building</p>
          <h2 className="max-w-[560px] text-[34px] font-normal leading-[0.96] tracking-[-0.075em] text-ink sm:text-[44px]">
            Everything teams need to raise, govern, and keep momentum visible.
          </h2>
        </div>
        <div className="grid gap-2">
          <a
            href="/docs"
            className="group flex min-h-[72px] items-center justify-between border border-line bg-white px-4 py-3 transition duration-200 ease-out hover:-translate-y-px hover:border-ink/20 hover:bg-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            <span>
              <span className="block text-[12px] font-medium text-ink">Read the protocol docs</span>
              <span className="mt-1 block text-[10px] leading-4 text-muted">Mechanism design, governance, and launch requirements.</span>
            </span>
            <span className="text-[20px] text-ink/35 transition group-hover:translate-x-0.5 group-hover:text-brand" aria-hidden="true">→</span>
          </a>
          <a
            href="/raise"
            className="group flex min-h-[72px] items-center justify-between bg-ink px-4 py-3 text-white transition duration-200 ease-out hover:-translate-y-px hover:bg-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            <span>
              <span className="block text-[12px] font-medium">Apply to raise</span>
              <span className="mt-1 block text-[10px] leading-4 text-white/70">Bring your company to the internet&apos;s capital market.</span>
            </span>
            <span className="text-[20px] text-white/60 transition group-hover:translate-x-0.5 group-hover:text-white" aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
