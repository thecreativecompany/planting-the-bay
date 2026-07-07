import Image from "next/image";
import BracketCTA from "./BracketCTA";

const items = [
  { label: "Message", title: "The sound of hope in the city", img: "/images/placeholder-1.jpg" },
  { label: "Gathering", title: "Sunday night worship experience", img: "/images/placeholder-3.jpg" },
  { label: "Groups", title: "Tables, stories, prayer, people", img: "/images/placeholder-4.jpg" },
];

export default function FeaturedSection() {
  return (
    <section id="featured" className="section-pad border-b border-black/15">
      <div className="container">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="display text-[clamp(3rem,8vw,8rem)]">Latest / Featured</h2>
          <BracketCTA href="#community">Join Community</BracketCTA>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {items.map((item, index) => (
            <article key={item.title} className="group border border-black/25 bg-[var(--paper)]">
              <div className="image-grain relative h-72 border-b border-black/20">
                <Image src={item.img} alt={item.title} fill sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="p-6">
                <p className="eyebrow">{item.label} / 0{index + 1}</p>
                <h3 className="mt-4 text-3xl font-black uppercase leading-none tracking-[-.05em]">{item.title}</h3>
                <a href="#footer" className="mt-8 inline-block text-xs font-black uppercase tracking-[.18em] text-[var(--red)] transition group-hover:translate-x-1">View Details →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
