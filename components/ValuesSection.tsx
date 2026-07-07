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
        <h2 className="display mt-4 max-w-5xl text-[clamp(3.2rem,8vw,8.5rem)]">The culture we carry.</h2>
        <div className="no-scrollbar mt-12 flex snap-x gap-5 overflow-x-auto pb-5 lg:grid lg:grid-cols-4 lg:overflow-visible">
          {values.map(([num, title, text]) => (
            <article key={title} className="premium-card group relative min-h-[22rem] min-w-[82vw] snap-center overflow-hidden p-7 sm:min-w-[22rem] sm:p-8 lg:min-w-0">
              <span className="absolute -right-3 top-5 text-[7.5rem] font-black leading-none tracking-[-.12em] text-black/[.04] transition group-hover:text-[var(--red)]/10">{num}</span>
              <p className="eyebrow">{num}</p>
              <h3 className="mt-24 text-[clamp(2.2rem,3vw,3.1rem)] font-black uppercase leading-none tracking-[-.06em]">{title}</h3>
              <p className="copy mt-6 text-[1rem]">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
