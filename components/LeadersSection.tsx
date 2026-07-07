import Image from "next/image";
import BracketCTA from "./BracketCTA";

export default function LeadersSection() {
  return (
    <section className="section-pad border-b border-black/15">
      <div className="container grid gap-8 lg:grid-cols-[.9fr_1fr] lg:items-center">
        <div className="image-grain relative min-h-[28rem] border border-black/25 lg:min-h-[42rem]">
          <Image src="/images/placeholder-3.jpg" alt="Leaders who love the city" fill sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
        <div className="lg:pl-10">
          <p className="eyebrow">Leaders / Pastors</p>
          <h2 className="display mt-4 text-[clamp(3.2rem,7vw,7rem)]">Led by people who love the city.</h2>
          <p className="mt-8 max-w-xl text-lg font-semibold leading-relaxed text-black/65">Our team is committed to building a church that feels clear, courageous, welcoming, and deeply rooted in the neighborhoods we call home.</p>
          <div className="mt-8"><BracketCTA href="#footer">Meet The Team</BracketCTA></div>
        </div>
      </div>
    </section>
  );
}
