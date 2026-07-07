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
        <div className="mb-12 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="eyebrow">Latest / Featured</p>
            <h2 className="display mt-4 text-[clamp(3.2rem,7.5vw,7.8rem)]">Stories in motion.</h2>
          </div>
          <BracketCTA href="#community">Join Community</BracketCTA>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <article key={item.title} className="premium-card group overflow-hidden">
              <div className="image-grain relative aspect-[4/3] border-b border-black/20">
                <Image src={item.img} alt={item.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
              </div>
              <div className="p-7 sm:p-8">
                <p className="eyebrow">{item.label} / 0{index + 1}</p>
                <h3 className="mt-5 min-h-[6.5rem] text-[clamp(2rem,3.1vw,3.25rem)] font-black uppercase leading-[.92] tracking-[-.055em]">{item.title}</h3>
                <a href="#footer" className="mt-8 inline-block text-sm font-black uppercase tracking-[.16em] text-[var(--red)] transition group-hover:translate-x-1">View Details →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
