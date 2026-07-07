const values = [
  ["01", "Faith", "We center everything on Jesus and make room for honest questions."],
  ["02", "Community", "We believe people grow best around tables, stories, and shared life."],
  ["03", "Generosity", "We give our time, attention, resources, and presence for the good of others."],
  ["04", "Purpose", "We help every person discover their calling and serve the city."],
];

export default function ValuesSection() {
  return (
    <section className="section-pad border-b border-black/15">
      <div className="container">
        <p className="eyebrow">Values / Beliefs</p>
        <h2 className="display mt-4 max-w-5xl text-[clamp(3.4rem,9vw,9rem)]">The culture we carry.</h2>
        <div className="no-scrollbar mt-12 flex snap-x gap-4 overflow-x-auto pb-4 lg:grid lg:grid-cols-4 lg:overflow-visible">
          {values.map(([num, title, text]) => (
            <article key={title} className="group relative min-h-80 min-w-[78vw] snap-center overflow-hidden border border-black/25 bg-[var(--paper)] p-6 transition hover:-translate-y-1 hover:border-[var(--red)] sm:min-w-[22rem] lg:min-w-0">
              <span className="absolute -right-4 -top-2 text-[8rem] font-black leading-none tracking-[-.12em] text-black/[.045] transition group-hover:text-[var(--red)]/10">{num}</span>
              <p className="eyebrow">{num}</p>
              <h3 className="mt-20 text-4xl font-black uppercase tracking-[-.06em]">{title}</h3>
              <p className="mt-5 font-semibold leading-relaxed text-black/65">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
