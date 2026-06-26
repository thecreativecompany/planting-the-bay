import { notFound } from "next/navigation";
import { BrandMark } from "@/components/BrandMark";
import { resourceCompanies } from "@/lib/data";

type CompanyPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return resourceCompanies.map((company) => ({ slug: company.href.split("/").pop() }));
}

export default async function CompanyPage({ params }: CompanyPageProps) {
  const { slug } = await params;
  const company = resourceCompanies.find((item) => item.href === `/companies/${slug}`);

  if (!company) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-shell p-4 text-ink antialiased sm:p-6">
      <section className="mx-auto grid min-h-[calc(100vh-32px)] max-w-[1180px] overflow-hidden bg-white lg:grid-cols-[320px_minmax(0,1fr)]">
        <aside className="border-b border-line p-6 lg:border-b-0 lg:border-r">
          <a
            href="/"
            className="inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.14em] text-ink transition hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
          >
            <BrandMark size={28} />
            MetaDAO
          </a>
          <div className="mt-16 hidden lg:block">
            <p className="text-[10px] uppercase tracking-[0.16em] text-muted">Company file</p>
            <p className="mt-2 text-[12px] leading-5 text-ink/70">A focused landing page for teams and investors to review the active market.</p>
          </div>
        </aside>

        <div className="flex flex-col p-6 sm:p-10 lg:p-14">
          <a
            href="/"
            className="mb-10 inline-flex w-fit items-center gap-2 border border-line px-3 py-2 text-[10px] font-medium text-ink transition duration-200 hover:-translate-y-px hover:border-ink/25 hover:bg-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            ← Back to markets
          </a>

          <div className="grid flex-1 gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-center">
            <div>
              <p className="text-[10px] uppercase tracking-[0.18em] text-muted">{company.status}</p>
              <h1 className="mt-4 max-w-[650px] text-[54px] font-normal leading-[0.9] tracking-[-0.085em] text-ink sm:text-[82px]">
                {company.name}
              </h1>
              <p className="mt-7 max-w-[540px] text-[17px] leading-7 tracking-[-0.035em] text-ink/78">
                {company.description} This market profile gives founders and investors a clean place to inspect traction, proposal state, and next steps.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#term-sheet"
                  className="inline-flex h-[42px] items-center justify-center bg-brand px-5 text-[12px] font-medium text-white transition duration-200 hover:-translate-y-px hover:bg-[#e7353a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand active:translate-y-0"
                >
                  Review terms
                </a>
                <a
                  href="#vote"
                  className="inline-flex h-[42px] items-center justify-center border border-line px-5 text-[12px] font-medium text-ink transition duration-200 hover:-translate-y-px hover:border-ink/25 hover:bg-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand active:translate-y-0"
                >
                  Vote on proposal
                </a>
              </div>
            </div>

            <div className="border border-line bg-surface p-5">
              <img src={company.image} alt={`${company.name} token artwork`} className="h-[280px] w-full object-contain bg-white" />
              <dl className="mt-5 grid grid-cols-2 border-t border-line pt-5 text-[10px] uppercase tracking-[0.12em] text-muted">
                <div>
                  <dt>Raised</dt>
                  <dd className="mt-2 text-[26px] normal-case tracking-[-0.06em] text-ink">{company.raised}</dd>
                </div>
                <div>
                  <dt>Status</dt>
                  <dd className="mt-2 text-[12px] normal-case tracking-[-0.03em] text-good">{company.status}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
