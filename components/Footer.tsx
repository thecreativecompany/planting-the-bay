import BracketCTA from "./BracketCTA";

const links = ["Home", "About", "Messages", "Visit", "Community", "Give"];

export default function Footer() {
  return (
    <footer id="footer" className="overflow-hidden bg-black px-[var(--section-x)] py-[clamp(72px,9vw,132px)] text-white">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-10 border-b border-white/15 pb-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <h2 className="text-[clamp(3.7rem,13vw,13rem)] font-black uppercase leading-[.82] tracking-[-.11em]">CityLight<br/><span className="text-[var(--red)]">House</span></h2>
          <div className="lg:pb-5"><BracketCTA href="#visit" dark>Plan Your Visit</BracketCTA></div>
        </div>
        <div className="grid gap-10 py-12 md:grid-cols-3 md:gap-12">
          <div>
            <p className="eyebrow">Address</p>
            <p className="mt-5 max-w-sm text-base font-bold uppercase leading-relaxed tracking-[.07em] text-white/68">123 City Avenue<br/>Sunday 9:30A + 11:30A<br/>hello@citylighthouse.example</p>
          </div>
          <nav aria-label="Footer links">
            <p className="eyebrow">Quick Links</p>
            <ul className="mt-5 grid gap-3">
              {links.map((link) => <li key={link}><a className="text-base font-black uppercase tracking-[.12em] text-white/78 transition hover:text-[var(--red)]" href={link === "Home" ? "#home" : link === "Visit" ? "#visit" : link === "Messages" ? "#featured" : link === "Community" ? "#community" : "#mission"}>{link}</a></li>)}
            </ul>
          </nav>
          <div>
            <p className="eyebrow">Social</p>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3 text-base font-black uppercase tracking-[.13em] text-white/78">
              <a href="#home" className="hover:text-[var(--red)]">Instagram</a>
              <a href="#home" className="hover:text-[var(--red)]">YouTube</a>
              <a href="#home" className="hover:text-[var(--red)]">Podcast</a>
            </div>
          </div>
        </div>
        <p className="border-t border-white/10 pt-8 text-sm uppercase leading-relaxed tracking-[.16em] text-white/42">© 2026 CityLight House. Original placeholder landing page built for Vercel deployment.</p>
      </div>
    </footer>
  );
}
