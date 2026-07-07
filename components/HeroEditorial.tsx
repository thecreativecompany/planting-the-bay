import Image from "next/image";
import BracketCTA from "./BracketCTA";

const heroCards = [
  { src: "/images/placeholder-1.jpg", alt: "Community gathered in worship", cls: "left-[3%] top-[21%] h-36 w-28 rotate-[-5deg] sm:h-56 sm:w-40 lg:left-[9%] lg:top-[18%]" },
  { src: "/images/placeholder-2.jpg", alt: "Hands raised in a city gathering", cls: "right-[5%] top-[20%] h-32 w-28 rotate-[6deg] sm:h-52 sm:w-44 lg:right-[10%]" },
  { src: "/images/placeholder-3.jpg", alt: "People connecting after service", cls: "bottom-[12%] left-[58%] hidden h-44 w-36 rotate-[-3deg] sm:block lg:h-64 lg:w-52" },
];

export default function HeroEditorial() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden border-b border-black/15 px-4 pt-24 sm:px-8" aria-label="Hero">
      <div className="absolute left-5 top-28 hidden h-[58vh] w-px bg-[var(--red)] lg:block" />
      <div className="absolute bottom-[18%] left-0 right-0 h-px bg-[var(--red)]/80" />
      <p className="absolute left-7 top-1/2 hidden -translate-y-1/2 -rotate-90 text-[.65rem] font-black uppercase tracking-[.3em] text-black/55 lg:block">Sunday Experience</p>
      {heroCards.map((card, i) => (
        <div key={card.src} className={`image-grain absolute z-10 border border-black/30 shadow-2xl reveal reveal-delay-${i + 1} ${card.cls}`}>
          <Image src={card.src} alt={card.alt} fill sizes="(max-width: 768px) 30vw, 220px" priority={i === 0} />
        </div>
      ))}
      <div className="relative z-20 mx-auto w-full max-w-7xl py-16 text-center">
        <p className="eyebrow reveal">Community / Purpose / Faith</p>
        <h1 className="display mx-auto mt-5 max-w-6xl text-[clamp(4.2rem,18vw,17rem)]">
          <span className="block reveal">Until</span>
          <span className="block text-[var(--red)] reveal reveal-delay-1">All</span>
          <span className="block reveal reveal-delay-2">Have</span>
          <span className="block reveal reveal-delay-3">Heard</span>
        </h1>
        <div className="mx-auto mt-8 flex max-w-2xl flex-col items-center gap-6 sm:mt-10">
          <p className="max-w-xl text-balance text-base font-bold uppercase leading-relaxed tracking-[0.08em] text-black/70 sm:text-lg">A community built around faith, people, purpose, and the city.</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <BracketCTA href="#visit">Plan Your Visit</BracketCTA>
            <BracketCTA href="#featured">Watch Latest</BracketCTA>
          </div>
        </div>
      </div>
    </section>
  );
}
