import Image from "next/image";
import BracketCTA from "./BracketCTA";

const cards = [
  { title: "Plan Your Visit", text: "Find service times, parking notes, kids check-in, and everything you need for your first Sunday.", cta: "Plan Your Visit", href: "#footer", img: "/images/placeholder-2.jpg" },
  { title: "Join Online", text: "Watch the latest gathering live or on-demand, share it with a friend, and stay connected wherever you are.", cta: "Watch Message", href: "#featured", img: "/images/placeholder-4.jpg" },
];

export default function VisitSection() {
  return (
    <section id="visit" className="section-pad border-b border-black/15">
      <div className="container">
        <div className="mb-12 grid gap-6 md:grid-cols-[1fr_.55fr] md:items-end">
          <div>
            <p className="eyebrow">Visit / Online</p>
            <h2 className="display mt-4 text-[clamp(3.2rem,7vw,7rem)]">Come as you are.</h2>
          </div>
          <p className="copy max-w-md md:justify-self-end">Two clear ways to step into the story this week — in the room or online from wherever you are.</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {cards.map((card) => (
            <article key={card.title} className="premium-card group grid min-h-[34rem] overflow-hidden md:grid-cols-[1.08fr_.92fr]">
              <div className="flex flex-col justify-between p-7 sm:p-9 lg:p-10">
                <div>
                  <p className="eyebrow">Start Here</p>
                  <h3 className="mt-6 text-[clamp(2.6rem,4.5vw,4.8rem)] font-black uppercase leading-[.9] tracking-[-.06em]">{card.title}</h3>
                  <p className="copy mt-7">{card.text}</p>
                </div>
                <div className="mt-9"><BracketCTA href={card.href}>{card.cta}</BracketCTA></div>
              </div>
              <div className="image-grain relative min-h-80 border-t border-black/20 md:border-l md:border-t-0">
                <Image src={card.img} alt={`${card.title} editorial placeholder`} fill sizes="(max-width: 1024px) 100vw, 40vw" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
