import { stats } from "@/lib/data";

export function Hero() {
  return (
    <section id="top" className="relative flex flex-col overflow-hidden bg-white py-16 sm:py-20 lg:min-h-[calc(100vh-70px)] lg:py-0">
      <div className="flex w-full flex-1 items-center lg:py-0">
        <div className="relative min-w-0">
          <p className="mb-4 text-[11px] uppercase tracking-[0.28em] text-brand lg:hidden">MetaDAO</p>
          <h1 className="max-w-full text-[46px] font-normal leading-[0.92] tracking-[-0.085em] text-ink min-[390px]:text-[50px] sm:text-[82px] lg:max-w-[660px] lg:text-[58px] xl:text-[64px]">
            The Internet&apos;s<br />Capital Market
          </h1>
          <p className="mt-6 max-w-[32ch] text-[15px] leading-6 tracking-[-0.025em] text-ink/80 sm:max-w-full lg:max-w-[510px]">
            A pot of money and a group of people that want you to win.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#resources"
              className="inline-flex h-[42px] items-center justify-center bg-brand px-5 text-[12px] font-medium text-white transition duration-200 ease-out hover:-translate-y-px hover:bg-[#e7353a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand active:translate-y-0"
            >
              Explore companies
            </a>
            <a
              href="#activity"
              className="inline-flex h-[42px] items-center justify-center border border-line bg-white px-5 text-[12px] font-medium text-ink transition duration-200 ease-out hover:-translate-y-px hover:border-ink/25 hover:bg-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand active:translate-y-0"
            >
              View live proposals
            </a>
          </div>
        </div>
      </div>

      <div className="mt-14 w-full pb-0 lg:-mx-[80px] lg:mt-0 lg:pb-0">
        <div className="grid border-t border-line bg-surface lg:grid-cols-3">
          <div className="border-b border-line px-0 py-4 lg:col-span-2 lg:min-h-32 lg:border-r lg:pl-[80px] lg:pr-10">
            <p className="max-w-[360px] text-[17px] leading-[23px] tracking-[-0.055em] text-ink">
              The companies that will define what&apos;s next are being built here today.
            </p>
          </div>

          <div className="border-b border-line px-0 py-4 lg:min-h-32 lg:pl-4 lg:pr-[80px]">
            <p className="text-[10px] uppercase tracking-[0.12em] text-muted">Total Raised</p>
            <p className="mt-10 text-[34px] font-normal leading-none tracking-[-0.065em] text-ink sm:text-[39px] lg:mt-[58px]">
              $40,502,382
            </p>
          </div>

          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`border-b border-line px-0 py-4 lg:min-h-[150px] ${index !== stats.length - 1 ? "lg:border-r" : ""} ${index === 0 ? "lg:pl-[80px]" : "lg:pl-4"} ${index === stats.length - 1 ? "lg:pr-[80px]" : ""}`}
            >
              <p className="text-[10px] uppercase tracking-[0.12em] text-muted">{stat.label}</p>
              <p className="mt-10 text-[34px] font-normal leading-none tracking-[-0.065em] text-ink sm:text-[39px] lg:mt-[62px]">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
