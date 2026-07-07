import Image from "next/image";

const imgs = ["/images/placeholder-1.jpg", "/images/placeholder-2.jpg", "/images/placeholder-3.jpg", "/images/placeholder-4.jpg"];

export default function ImageCollage() {
  return (
    <section id="community" className="relative overflow-hidden bg-black py-24 text-white sm:py-36">
      <div className="absolute left-0 right-0 top-1/2 z-20 h-1 bg-[var(--red)]" />
      <div className="mx-auto grid w-[min(1120px,calc(100%-2rem))] grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
        {imgs.map((img, i) => (
          <div key={img} className={`image-grain relative border border-white/15 ${i % 2 ? "mt-12 h-72 md:h-[28rem]" : "h-60 md:h-[22rem]"}`}>
            <Image src={img} alt="Community collage placeholder" fill sizes="(max-width: 768px) 50vw, 25vw" />
          </div>
        ))}
      </div>
      <h2 className="pointer-events-none absolute left-1/2 top-1/2 z-30 w-[115vw] -translate-x-1/2 -translate-y-1/2 text-center text-[clamp(5rem,17vw,18rem)] font-black uppercase leading-none tracking-[-.12em] text-white">This Is Home</h2>
    </section>
  );
}
