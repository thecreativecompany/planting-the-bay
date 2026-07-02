"use client";

import { cn } from "@/lib/utils";
import React from "react";

type FeatureType = {
  title: string;
  icon: React.ElementType<{ className?: string; strokeWidth?: number; "aria-hidden"?: boolean; }>;
  description: string;
};

type FeatureCardProps = React.ComponentProps<"div"> & {
  feature: FeatureType;
};

export function FeatureCard({ feature, className, ...props }: FeatureCardProps) {
  const p = React.useMemo(() => genPatternFromText(feature.title), [feature.title]);

  return (
    <div
      className={cn(
        "relative min-h-[250px] overflow-hidden bg-[var(--cream)] p-6 text-[var(--ink)]",
        "border-[var(--line)] transition-transform duration-300 hover:-translate-y-1",
        className
      )}
      {...props}
    >
      <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
        <div className="absolute inset-0 bg-gradient-to-r from-black/[0.035] to-black/[0.01] [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] opacity-100">
          <GridPattern
            width={20}
            height={20}
            x="-12"
            y="4"
            squares={p}
            className="absolute inset-0 h-full w-full fill-black/[0.04] stroke-black/[0.18] mix-blend-multiply"
          />
        </div>
      </div>
      <feature.icon className="relative z-20 size-6 text-[var(--green)]" strokeWidth={1.4} aria-hidden />
      <h3 className="relative z-20 mt-10 text-lg font-black uppercase leading-[0.95] tracking-[-0.04em] md:text-2xl">
        {feature.title}
      </h3>
      <p className="relative z-20 mt-3 max-w-[18rem] text-sm font-medium leading-6 text-[var(--muted)]">
        {feature.description}
      </p>
    </div>
  );
}

function GridPattern({
  width,
  height,
  x,
  y,
  squares,
  ...props
}: React.ComponentProps<"svg"> & { width: number; height: number; x: string; y: string; squares?: number[][] }) {
  const patternId = React.useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern id={patternId} width={width} height={height} patternUnits="userSpaceOnUse" x={x} y={y}>
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([squareX, squareY], index) => (
            <rect
              strokeWidth="0"
              key={index}
              width={width + 1}
              height={height + 1}
              x={squareX * width}
              y={squareY * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}

function genPatternFromText(text: string, length = 5): number[][] {
  let seed = 0;
  for (let i = 0; i < text.length; i += 1) {
    seed = (seed * 31 + text.charCodeAt(i)) % 9973;
  }

  return Array.from({ length }, (_, index) => {
    const next = (seed + index * 37) % 9973;
    return [
      (next % 4) + 7,
      (Math.floor(next / 4) % 6) + 1,
    ];
  });
}
