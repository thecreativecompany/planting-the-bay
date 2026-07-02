"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

interface TimelineProps {
  data: TimelineEntry[];
  eyebrow?: string;
  title?: string;
  description?: string;
}

export function Timeline({ data, eyebrow, title, description }: TimelineProps) {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLElement>(null);
  const [height, setHeight] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (ref.current) {
        setHeight(ref.current.getBoundingClientRect().height);
      }
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 18%", "end 58%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.08], [0, 1]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!data.length) return;
    const nextIndex = Math.min(data.length - 1, Math.max(0, Math.floor(latest * data.length)));
    setActiveIndex(nextIndex);
  });

  return (
    <section className="timeline-section section-reveal" ref={containerRef} aria-label="Bay Area expansion roadmap">
      <div className="timeline-watermark" aria-hidden="true">THE BAY</div>
      <div className="timeline-intro reveal">
        {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
        {title ? <h2>{title}</h2> : null}
        {description ? <p>{description}</p> : null}
      </div>

      <div ref={ref} className="timeline-list">
        {data.map((item, index) => (
          <article
            key={item.title}
            className={`timeline-entry ${index === activeIndex ? "is-active" : ""}`}
          >
            <div className="timeline-sticky">
              <div className="timeline-dot" aria-hidden="true">
                <span />
              </div>
              <div>
                <span className="timeline-step">{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
              </div>
            </div>

            <motion.div
              className="timeline-card"
              initial={{ opacity: 0, x: index % 2 === 0 ? 34 : -34 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {item.content}
            </motion.div>
          </article>
        ))}

        <div className="timeline-rail" style={{ height }} aria-hidden="true">
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="timeline-rail-fill"
          />
        </div>
      </div>
    </section>
  );
}
