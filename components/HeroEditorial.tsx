import Image from "next/image";
import BracketCTA from "./BracketCTA";

const heroCards = [
  { src: "/images/placeholder-1.jpg", alt: "Community gathered in worship", cls: "left-[4%] top-[31%] h-36 w-28 -rotate-3 opacity-85 sm:left-[7%] sm:top-[26%] sm:h-56 sm:w-40 lg:left-[10%] lg:top-[24%] lg:h-64 lg:w-48" },
  { src: "/images/placeholder-2.jpg", alt: "Hands raised in a city gathering", cls: "right-[3%] top-[24%] h-32 w-28 rotate-3 sm:right-[7%] sm:top-[22%] sm:h-56 sm:w-44 lg:right-[11%] lg:h-64 lg:w-52" },
  { src: "/images/placeholder-3.jpg", alt: "People connecting after service", cls: "bottom-[10%] right-[12%] hidden h-44 w-40 -rotate-2 sm:block lg:bottom-[12%] lg:right-[18%] lg:h-60 lg:w-56" },
];

export default function HeroEditorial() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden border-b border-black/15 px-[var(--section-x)] pt-28 sm:pt-32" aria-label="Hero">
      <div className="absolute left-[var(--section-x)] top-32 hidden h-[62vh] w-px bg-[var(--red)] lg:block" />
      <div className="absolute bottom-[22%] left-0 right-0 h-px bg-[var(--red)]/80" />
      <div className="absolute left-[calc(var(--section-x)+18px)] top-[23%] hidden max-w-[12rem] border-l-2 border-[var(--red)] pl-5 lg:block">
        <p className="eyebrow text-black/70">Sunday Experience</p>
        <p className="mt-4 text-sm font-black uppercase leading-relaxed tracking-[.14em] text-black/55">Community / Purpose / Faith</p>
      </div>
      {heroCards.map((card, i) => (
        <div key={card.src} className={`image-grain absolute z-10 border border-black/30 shadow-[0_30px_80px_rgba(0,0,0,.2)] reveal reveal-delay-${i + 1} ${card.cls}`}>
          <Image src={card.src} alt={card.alt} fill sizes="(max-width: 768px) 32vw, 260px" priority={i === 0} />
        </div>
      ))}
      <div className="relative z-20 mx-auto w-full max-w-[1280px] py-16 text-center lg:-translate-y-2">
        <p className="eyebrow reveal">CityLight House / Est. 2026</p>
        <h1 className="display mx-auto mt-5 max-w-[1040px] text-[clamp(4rem,15.5vw,14.5rem)]">
          <span className="block reveal">Until</span>
          <span className="block text-[var(--red)] reveal reveal-delay-1">All</span>
          <span className="block reveal reveal-delay-2">Have</span>
          <span className="block reveal reveal-delay-3">Heard</span>
        </h1>
        <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center gap-6 sm:mt-9">
          <p className="max-w-2xl text-balance text-[clamp(1rem,1.35vw,1.35rem)] font-black uppercase leading-[1.45] tracking-[0.06em] text-black/72">A community built around faith, people, purpose, and the city.</p>
          <div className="flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
            <BracketCTA href="#visit">Plan Your Visit</BracketCTA>
            <BracketCTA href="#featured">Watch Latest</BracketCTA>
          </div>
        </div>
      </div>
    </section>
  );
}
