import Image from "next/image";
import BracketCTA from "./BracketCTA";

export default function LeadersSection() {
  return (
    <section className="section-pad border-b border-black/15">
      <div className="container grid gap-10 lg:grid-cols-[.95fr_1fr] lg:items-center lg:gap-16">
        <div className="image-grain relative min-h-[30rem] border border-black/25 shadow-[0_28px_70px_rgba(20,15,10,.12)] lg:min-h-[44rem]">
          <Image src="/images/placeholder-3.jpg" alt="Leaders who love the city" fill sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
        <div className="lg:pl-4">
          <p className="eyebrow">Leaders / Pastors</p>
          <h2 className="display mt-5 text-[clamp(3.1rem,6.7vw,6.9rem)]">Led by people who love the city.</h2>
          <p className="copy mt-9 max-w-2xl">Our team is committed to building a church that feels clear, courageous, welcoming, and deeply rooted in the neighborhoods we call home.</p>
          <div className="mt-9"><BracketCTA href="#footer">Meet The Team</BracketCTA></div>
        </div>
      </div>
    </section>
  );
}
