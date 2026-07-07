export default function MissionSection() {
  return (
    <section id="mission" className="section-pad relative overflow-hidden border-b border-black/15">
      <div className="container relative z-10">
        <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-16">
          <aside className="border-l-2 border-[var(--red)] pl-5 lg:pt-3">
            <p className="eyebrow">Our Mission</p>
            <p className="mt-5 max-w-xs text-sm font-black uppercase leading-relaxed tracking-[.13em] text-black/50">A premium editorial statement for the people we are becoming together.</p>
          </aside>
          <div className="scroll-reveal">
            <h2 className="display max-w-[1000px] text-[clamp(3.05rem,7.3vw,7.7rem)]">
              We exist to help people find <span className="text-[var(--red)]">faith</span>, build community, and live with purpose.
            </h2>
            <div className="mt-10 grid gap-6 border-t border-black/15 pt-8 md:grid-cols-[1fr_.75fr] md:items-start">
              <p className="copy max-w-3xl">CityLight House is a modern church community for people who are searching, rebuilding, starting over, or ready to serve the city with courage and compassion.</p>
              <div className="h-1 w-full max-w-72 bg-[var(--red)] md:mt-3" />
            </div>
          </div>
        </div>
      </div>
      <p className="pointer-events-none absolute -bottom-8 right-[-2vw] text-[clamp(4rem,13vw,13rem)] font-black uppercase leading-none tracking-[-.1em] text-black/[.028]">Purpose</p>
    </section>
  );
}
