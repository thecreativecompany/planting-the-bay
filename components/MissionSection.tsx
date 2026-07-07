export default function MissionSection() {
  return (
    <section id="mission" className="section-pad relative overflow-hidden border-b border-black/15">
      <div className="container grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
        <div>
          <p className="eyebrow">Our Mission</p>
          <div className="mt-8 h-1 w-28 bg-[var(--red)]" />
        </div>
        <div className="reveal">
          <h2 className="display text-[clamp(3.2rem,8vw,8.5rem)]">We exist to help people find <span className="text-[var(--red)]">faith</span>, build community, and live with purpose.</h2>
          <p className="mt-8 max-w-3xl text-lg font-semibold leading-relaxed text-black/65 sm:text-xl">CityLight House is a modern church community for people who are searching, rebuilding, starting over, or ready to serve the city with courage and compassion.</p>
        </div>
      </div>
      <p className="pointer-events-none absolute -bottom-5 right-[-4vw] text-[clamp(5rem,18vw,18rem)] font-black uppercase leading-none tracking-[-.1em] text-black/[.035]">Purpose</p>
    </section>
  );
}
