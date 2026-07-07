import Image from "next/image";

const imgs = [
  { src: "/images/placeholder-1.jpg", cls: "h-64 md:h-[26rem] md:translate-y-10" },
  { src: "/images/placeholder-2.jpg", cls: "h-80 md:h-[34rem]" },
  { src: "/images/placeholder-3.jpg", cls: "h-72 md:h-[30rem] md:translate-y-20" },
  { src: "/images/placeholder-4.jpg", cls: "h-60 md:h-[25rem] md:translate-y-5" },
];

export default function ImageCollage() {
  return (
    <section id="community" className="relative overflow-hidden bg-black py-[clamp(96px,13vw,210px)] text-white">
      <div className="absolute left-0 right-0 top-1/2 z-20 h-1 bg-[var(--red)]" />
      <div className="relative z-10 mx-auto grid w-[min(1240px,calc(100%-2rem))] grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {imgs.map((img, i) => (
          <div key={img.src} className={`image-grain relative border border-white/15 shadow-[0_30px_80px_rgba(0,0,0,.45)] ${img.cls}`}>
            <Image src={img.src} alt={`Community collage placeholder ${i + 1}`} fill sizes="(max-width: 768px) 50vw, 25vw" />
          </div>
        ))}
      </div>
      <h2 className="pointer-events-none absolute left-1/2 top-1/2 z-30 w-[105vw] -translate-x-1/2 -translate-y-1/2 text-center text-[clamp(4.2rem,14vw,15rem)] font-black uppercase leading-[.82] tracking-[-.11em] text-white">This Is Home</h2>
    </section>
  );
}
