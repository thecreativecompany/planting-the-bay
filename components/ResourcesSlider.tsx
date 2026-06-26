"use client";

import { useEffect, useMemo, useState } from "react";
import { resourceCompanies } from "@/lib/data";

const SLIDE_INTERVAL = 4200;

export function ResourcesSlider() {
  const [activeIndex, setActiveIndex] = useState(1);

  const activeCompany = resourceCompanies[activeIndex];
  const visibleCompanies = useMemo(() => {
    const total = resourceCompanies.length;

    return resourceCompanies.map((company, index) => {
      const rawDistance = index - activeIndex;
      const wrappedDistance = rawDistance > total / 2 ? rawDistance - total : rawDistance < -total / 2 ? rawDistance + total : rawDistance;

      return { company, index, distance: wrappedDistance };
    });
  }, [activeIndex]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % resourceCompanies.length);
    }, SLIDE_INTERVAL);

    return () => window.clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setActiveIndex((current) => (current - 1 + resourceCompanies.length) % resourceCompanies.length);
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % resourceCompanies.length);
  };

  return (
    <section id="resources" className="border-t border-line bg-white py-14 lg:py-[60px]">
      <div className="w-full">
        <div className="mb-6 flex items-end justify-between gap-6">
          <div>
            <p className="mb-2 text-[10px] uppercase tracking-[0.18em] text-muted">Capitalized by MetaDAO</p>
            <h2 className="text-[21px] font-normal tracking-[-0.055em] text-ink">Featured Companies</h2>
          </div>
          <div className="flex items-center gap-[5px]" aria-label="Slider position">
            {resourceCompanies.map((company, index) => (
              <button
                key={company.name}
                type="button"
                aria-label={`Show ${company.name}`}
                aria-pressed={activeIndex === index}
                onClick={() => setActiveIndex(index)}
                className={`h-[10px] w-[10px] border transition duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
                  activeIndex === index ? "border-brand bg-brand" : "border-line bg-white hover:-translate-y-px hover:border-brand/50"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden border-t border-line">
          <div className="relative h-[430px] sm:h-[470px] lg:h-[490px]">
            {visibleCompanies.map(({ company, index, distance }) => {
              const isActive = index === activeIndex;
              const isHidden = Math.abs(distance) > 2;

              return (
                <button
                  key={`${company.name}-${index}`}
                  type="button"
                  aria-label={`${isActive ? "Current" : "Focus"} ${company.name}`}
                  aria-current={isActive ? "true" : undefined}
                  onClick={() => setActiveIndex(index)}
                  className={`absolute left-1/2 top-0 flex h-[296px] w-[240px] -translate-x-1/2 items-center justify-center border bg-white transition-[border-color,opacity,transform] duration-500 ease-[cubic-bezier(.22,1,.36,1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand ${
                    isActive ? "z-20 border-ink/20 opacity-100 shadow-[0_22px_70px_rgba(11,11,11,0.07)]" : isHidden ? "pointer-events-none z-0 border-line opacity-0" : "z-10 border-line opacity-100 hover:border-ink/15"
                  }`}
                  style={{
                    transform: `translateX(calc(-50% + ${distance * 248}px)) translateY(${isActive ? 36 : 0}px) scale(${isActive ? 1.55 : 1})`,
                    transformOrigin: "center top"
                  }}
                >
                  <img
                    src={company.image}
                    alt=""
                    className="h-full w-full object-contain transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)]"
                  />
                </button>
              );
            })}
          </div>

          <div className="grid border-t border-line lg:grid-cols-[1fr_492px]">
            <div className="min-h-[136px] border-line pt-5 lg:border-r">
              <div className="transition-opacity duration-300 ease-out" key={activeCompany.name}>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-[18px] font-normal leading-none tracking-[-0.045em] text-ink">{activeCompany.name}</h3>
                  <span className="border border-line bg-surface px-2 py-1 text-[9px] uppercase tracking-[0.1em] text-muted">{activeCompany.status}</span>
                </div>
                <p className="mt-3 max-w-[460px] text-[13px] leading-[20px] tracking-[-0.025em] text-ink/80">{activeCompany.description}</p>
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <span className="text-[11px] uppercase tracking-[0.12em] text-muted">Raised <strong className="font-medium text-ink">{activeCompany.raised}</strong></span>
                  <a
                    href={activeCompany.href}
                    className="inline-flex h-[32px] items-center justify-center bg-ink px-3 text-[10px] font-medium text-white transition duration-200 ease-out hover:-translate-y-px hover:bg-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand active:translate-y-0"
                  >
                    View company
                  </a>
                </div>
              </div>
            </div>

            <div className="flex min-h-[136px] items-center justify-start gap-3 pt-6 lg:justify-end lg:pt-0">
              <button
                type="button"
                aria-label="Previous company"
                onClick={goToPrevious}
                className="flex h-[42px] w-[42px] items-center justify-center border border-line bg-white text-[24px] font-light leading-none text-ink/45 transition duration-200 ease-out hover:-translate-y-px hover:border-ink/25 hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand active:translate-y-0"
              >
                ←
              </button>
              <button
                type="button"
                aria-label="Next company"
                onClick={goToNext}
                className="flex h-[42px] w-[42px] items-center justify-center bg-brand text-[24px] font-light leading-none text-white transition duration-200 ease-out hover:-translate-y-px hover:bg-[#e7353a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand active:translate-y-0"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
