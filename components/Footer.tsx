import BracketCTA from "./BracketCTA";

const links = ["Home", "About", "Messages", "Visit", "Community", "Give"];

export default function Footer() {
  return (
    <footer id="footer" className="overflow-hidden bg-black px-4 py-16 text-white sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 border-b border-white/15 pb-12 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="text-[clamp(4rem,15vw,15rem)] font-black uppercase leading-[.78] tracking-[-.12em]">CityLight<br/><span className="text-[var(--red)]">House</span></h2>
          <BracketCTA href="#visit" dark>Plan Your Visit</BracketCTA>
        </div>
        <div className="grid gap-10 pt-10 md:grid-cols-3">
          <div>
            <p className="eyebrow">Address</p>
            <p className="mt-4 max-w-xs text-sm font-bold uppercase leading-relaxed tracking-[.08em] text-white/65">123 City Avenue<br/>Sunday 9:30A + 11:30A<br/>hello@citylighthouse.example</p>
          </div>
          <nav aria-label="Footer links">
            <p className="eyebrow">Quick Links</p>
            <ul className="mt-4 grid gap-2">
              {links.map((link) => <li key={link}><a className="font-black uppercase tracking-[.12em] text-white/75 transition hover:text-[var(--red)]" href={link === "Home" ? "#home" : link === "Visit" ? "#visit" : link === "Messages" ? "#featured" : link === "Community" ? "#community" : "#mission"}>{link}</a></li>)}
            </ul>
          </nav>
          <div>
            <p className="eyebrow">Social</p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm font-black uppercase tracking-[.16em] text-white/75">
              <a href="#home" className="hover:text-[var(--red)]">Instagram</a>
              <a href="#home" className="hover:text-[var(--red)]">YouTube</a>
              <a href="#home" className="hover:text-[var(--red)]">Podcast</a>
            </div>
          </div>
        </div>
        <p className="mt-12 text-xs uppercase tracking-[.18em] text-white/35">© 2026 CityLight House. Original placeholder landing page built for Vercel deployment.</p>
      </div>
    </footer>
  );
}
