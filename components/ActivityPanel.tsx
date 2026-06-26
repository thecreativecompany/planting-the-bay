import { activityItems, type ActivityItem } from "@/lib/data";
import { BrandMark } from "@/components/BrandMark";

const toneClass: Record<ActivityItem["tone"], string> = {
  sky: "bg-cyan-200 text-white",
  black: "bg-black text-white",
  navy: "bg-[#151832] text-white",
  brand: "bg-brand text-white"
};

function ActivityIcon({ item }: { item: ActivityItem }) {
  if (item.tone === "brand") {
    return <BrandMark size={23} />;
  }

  return (
    <span className={`flex h-[23px] w-[23px] items-center justify-center rounded-full text-[10px] ${toneClass[item.tone]}`}>
      {item.glyph}
    </span>
  );
}

function ActivityCard({ item }: { item: ActivityItem }) {
  return (
    <article className="border border-line bg-white p-3 transition duration-200 ease-out hover:-translate-y-px hover:border-ink/15 hover:shadow-[0_14px_32px_rgba(11,11,11,0.06)]">
      <div className="mb-3 flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          <ActivityIcon item={item} />
          <div className="leading-none">
            <p className="text-[11px] font-medium text-ink">{item.name}</p>
            <p className="mt-1 text-[9px] text-muted">{item.code}</p>
          </div>
        </div>
        <div className="mt-0.5 flex items-center gap-1.5 text-[9px] text-ink/70">
          <span className="h-1.5 w-1.5 rounded-full bg-brand ring-2 ring-brand/15" />
          <span>{item.timer}</span>
        </div>
      </div>
      <p className="min-h-[34px] text-[11px] leading-[16px] text-ink">{item.title}</p>
      <div className="mt-5 flex items-center justify-between gap-2">
        <p className="text-[10px] font-medium text-good">Passing +6.4695%</p>
        <div className="flex items-center gap-1.5">
          <a
            href={`#proposal-${item.code.toLowerCase()}`}
            className="flex h-[27px] items-center justify-center border border-line px-2.5 text-[9px] font-medium text-ink transition duration-200 ease-out hover:border-ink/25 hover:bg-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            Review
          </a>
          <a
            href={`#vote-${item.code.toLowerCase()}`}
            className="flex h-[27px] items-center justify-center bg-ink px-2.5 text-[9px] font-medium text-white transition duration-200 ease-out hover:bg-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            Vote
          </a>
        </div>
      </div>
    </article>
  );
}

function ActivityList({ grid = false }: { grid?: boolean }) {
  return (
    <div className={grid ? "grid gap-2 sm:grid-cols-2" : "space-y-2"}>
      {activityItems.map((item) => (
        <ActivityCard key={`${item.name}-${item.code}`} item={item} />
      ))}
    </div>
  );
}

export function MobileActivitySection() {
  return (
    <section id="activity" className="border-t border-line bg-white py-14 xl:hidden">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div>
          <p className="mb-2 text-[10px] uppercase tracking-[0.18em] text-muted">Governance tape</p>
          <h2 className="text-[21px] font-normal tracking-[-0.055em] text-ink">Live Activity</h2>
        </div>
        <span className="rounded-full bg-good/10 px-2 py-1 text-[9px] font-medium text-good">Live</span>
      </div>
      <ActivityList grid />
    </section>
  );
}

export function ActivityPanel() {
  return (
    <aside className="hidden h-full max-h-full w-[340px] shrink-0 overflow-y-auto border-l border-line bg-white xl:block">
      <div className="px-3 pt-4">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-[14px] font-normal text-ink">Activity <span className="text-muted">(6)</span></h2>
          <span className="rounded-full bg-good/10 px-2 py-1 text-[9px] font-medium text-good">Live</span>
        </div>
        <ActivityList />
      </div>
    </aside>
  );
}
