'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function GsapMotion() {
  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    gsap.registerPlugin(ScrollTrigger);

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = gsap.context(() => {
      if (reduceMotion) {
        gsap.set('[data-gsap]', { clearProps: 'all', opacity: 1, y: 0, x: 0, scale: 1 });
        gsap.set('.split-word', { clearProps: 'all', opacity: 1, yPercent: 0, rotate: 0 });
        return;
      }

      gsap.set('.split-word', { display: 'inline-block', transformOrigin: '0% 100%' });

      const intro = gsap.timeline({ defaults: { ease: 'expo.out' } });
      intro
        .from('.ptb-header', { y: -20, opacity: 0, duration: 0.8 })
        .from('.hero-kicker', { y: 18, opacity: 0, duration: 0.8 }, '-=0.45')
        .from('.split-word', { yPercent: 112, rotate: 2, opacity: 0, duration: 1.05, stagger: 0.045 }, '-=0.55')
        .from('.hero-lede, .hero-actions', { y: 24, opacity: 0, duration: 0.9, stagger: 0.09 }, '-=0.65')
        .from('.hero-media, .hero-orbit-card', { y: 42, opacity: 0, scale: 0.96, duration: 1, stagger: 0.12 }, '-=0.75')
        .from('.bay-layer', { y: 46, opacity: 0, duration: 1.1, stagger: 0.08 }, '-=0.9');

      gsap.to('.bay-layer.is-back', {
        yPercent: -12,
        xPercent: 4,
        scrollTrigger: { trigger: '.hero-section', start: 'top top', end: 'bottom top', scrub: 0.9 },
      });
      gsap.to('.bay-layer.is-mid', {
        yPercent: -24,
        xPercent: -5,
        scrollTrigger: { trigger: '.hero-section', start: 'top top', end: 'bottom top', scrub: 0.9 },
      });
      gsap.to('.bay-layer.is-front', {
        yPercent: -40,
        xPercent: 7,
        scrollTrigger: { trigger: '.hero-section', start: 'top top', end: 'bottom top', scrub: 0.9 },
      });

      gsap.from('.roadmap-stop', {
        scrollTrigger: { trigger: '.roadmap-track', start: 'top 78%' },
        y: 36,
        opacity: 0,
        duration: 0.75,
        stagger: 0.075,
        ease: 'power3.out',
      });

      gsap.fromTo('.roadmap-line span',
        { scaleX: 0 },
        {
          scaleX: 1,
          transformOrigin: 'left center',
          duration: 1.15,
          ease: 'power3.inOut',
          scrollTrigger: { trigger: '.roadmap-track', start: 'top 78%' },
        }
      );

      gsap.fromTo('.meter-bar span',
        { scaleX: 0 },
        {
          scaleX: 1,
          transformOrigin: 'left center',
          duration: 1.25,
          ease: 'expo.out',
          scrollTrigger: { trigger: '.momentum-card', start: 'top 75%' },
        }
      );

      gsap.utils.toArray('[data-gsap="lift"]').forEach((el) => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: 'top 82%' },
          y: 50,
          opacity: 0,
          duration: 0.85,
          ease: 'power3.out',
        });
      });

      gsap.utils.toArray('[data-gsap="image-wipe"]').forEach((el) => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: 'top 80%' },
          clipPath: 'inset(0 0 100% 0)',
          scale: 1.08,
          duration: 1.1,
          ease: 'expo.out',
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
