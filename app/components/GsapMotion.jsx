'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function GsapMotion() {
  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    gsap.registerPlugin(ScrollTrigger);

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const cleanupFns = [];

    document.body.classList.add('ptb-motion-ready');
    cleanupFns.push(() => document.body.classList.remove('ptb-motion-ready'));

    const ambientGrid = document.createElement('div');
    ambientGrid.className = 'ptb-ambient-grid';
    ambientGrid.setAttribute('aria-hidden', 'true');
    ambientGrid.innerHTML = Array.from({ length: 7 }, () => '<span />').join('');
    document.body.prepend(ambientGrid);
    cleanupFns.push(() => ambientGrid.remove());

    const cursor = document.createElement('div');
    cursor.className = 'ptb-cursor-orb';
    cursor.setAttribute('aria-hidden', 'true');
    document.body.appendChild(cursor);
    cleanupFns.push(() => cursor.remove());

    const ctx = gsap.context(() => {
      const revealSelectors = '.section-reveal, .reveal, [data-gsap], .split-word, .ptb-header';

      if (reduceMotion) {
        gsap.set(revealSelectors, { clearProps: 'all', opacity: 1, y: 0, x: 0, scale: 1, rotate: 0 });
        document.querySelectorAll('.section-reveal, .reveal').forEach((item) => item.classList.add('is-visible'));
        return;
      }

      gsap.set('.split-word', { display: 'inline-block', transformOrigin: '0% 100%' });
      gsap.set('.hero-media, .bay-layer, .hero-orbit-card, [data-gsap="lift"], .ptb-ambient-grid span, .hero-scroll-cue', { willChange: 'transform, opacity' });

      gsap.fromTo(
        '.ptb-ambient-grid span',
        { scaleY: 0, transformOrigin: 'top center', opacity: 0 },
        { scaleY: 1, opacity: 1, duration: 1.15, stagger: 0.045, ease: 'expo.out' }
      );

      gsap.to('.ptb-ambient-grid span', {
        yPercent: -18,
        ease: 'none',
        scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: 0.9 },
      });

      gsap.fromTo(
        '.hero-scroll-cue',
        { autoAlpha: 0, y: 16 },
        { autoAlpha: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: 1.15 }
      );

      const intro = gsap.timeline({ defaults: { ease: 'expo.out' } });
      intro
        .from('.ptb-header', { y: -24, opacity: 0, duration: 0.75 })
        .from('.hero-kicker', { y: 18, opacity: 0, duration: 0.75 }, '-=0.45')
        .from('.split-word', { yPercent: 112, rotate: 2, opacity: 0, duration: 1.05, stagger: 0.045 }, '-=0.5')
        .from('.hero-lede, .hero-actions', { y: 24, opacity: 0, duration: 0.85, stagger: 0.09 }, '-=0.65')
        .from('.bay-layer', { y: 54, opacity: 0, scale: 0.96, duration: 1.05, stagger: 0.075 }, '-=0.78')
        .from('.hero-media, .hero-orbit-card', { y: 46, opacity: 0, scale: 0.95, duration: 1, stagger: 0.12 }, '-=0.88');

      gsap.to('.hero-media', {
        yPercent: -22,
        scale: 1.045,
        ease: 'none',
        scrollTrigger: { trigger: '.hero-section', start: 'top top', end: 'bottom top', scrub: 0.8 },
      });

      gsap.to('.hero-orbit-card', {
        yPercent: -42,
        rotate: -1.5,
        ease: 'none',
        scrollTrigger: { trigger: '.hero-section', start: 'top top', end: 'bottom top', scrub: 0.9 },
      });

      [
        ['.bay-layer.is-back', -12, 4],
        ['.bay-layer.is-mid', -24, -5],
        ['.bay-layer.is-front', -40, 7],
      ].forEach(([selector, yPercent, xPercent]) => {
        gsap.to(selector, {
          yPercent,
          xPercent,
          ease: 'none',
          scrollTrigger: { trigger: '.hero-section', start: 'top top', end: 'bottom top', scrub: 0.9 },
        });
      });

      gsap.utils.toArray('section:not(.hero-section), footer').forEach((section) => {
        if (section.classList.contains('sub-hero')) return;

        const copy = section.querySelectorAll('.section-eyebrow, h2, .hero-lede, p:not(.section-eyebrow), .btn');
        if (!copy.length) return;
        gsap.from(copy, {
          scrollTrigger: { trigger: section, start: 'top 76%', once: true },
          y: 32,
          opacity: 0,
          duration: 0.85,
          stagger: 0.055,
          ease: 'power3.out',
        });
      });

      gsap.from('.roadmap-stop', {
        scrollTrigger: { trigger: '.roadmap-track', start: 'top 78%', once: true },
        y: 42,
        opacity: 0,
        duration: 0.78,
        stagger: 0.075,
        ease: 'power3.out',
      });

      gsap.fromTo(
        '.roadmap-line span',
        { scaleX: 0 },
        {
          scaleX: 1,
          transformOrigin: 'left center',
          duration: 1.15,
          ease: 'power3.inOut',
          scrollTrigger: { trigger: '.roadmap-track', start: 'top 78%', once: true },
        }
      );

      gsap.fromTo(
        '.meter-bar span',
        { scaleX: 0 },
        {
          scaleX: 1,
          transformOrigin: 'left center',
          duration: 1.25,
          ease: 'expo.out',
          scrollTrigger: { trigger: '.momentum-card', start: 'top 75%', once: true },
        }
      );

      gsap.utils.toArray('[data-gsap="stagger-grid"]').forEach((grid) => {
        const items = Array.from(grid.children).filter((child) => !child.classList.contains('roadmap-line'));
        if (!items.length) return;
        gsap.from(items, {
          scrollTrigger: { trigger: grid, start: 'top 78%', once: true },
          y: 44,
          opacity: 0,
          scale: 0.975,
          duration: 0.78,
          stagger: 0.075,
          ease: 'power3.out',
        });
      });

      gsap.utils.toArray('[data-gsap="lift"]').forEach((el) => {
        if (el.closest('[data-gsap="stagger-grid"]') || el.classList.contains('hero-orbit-card')) return;

        gsap.from(el, {
          scrollTrigger: { trigger: el, start: 'top 82%', once: true },
          y: 50,
          opacity: 0,
          scale: 0.985,
          duration: 0.85,
          ease: 'power3.out',
        });
      });

      gsap.utils.toArray('[data-parallax-depth]').forEach((el) => {
        const depth = Number.parseFloat(el.dataset.parallaxDepth || '-8');
        if (Number.isNaN(depth)) return;

        gsap.to(el, {
          yPercent: depth,
          ease: 'none',
          scrollTrigger: {
            trigger: el.closest('section') || el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.85,
            invalidateOnRefresh: true,
          },
        });
      });

      gsap.utils.toArray('[data-gsap="image-wipe"]').forEach((el) => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: 'top 80%', once: true },
          clipPath: 'inset(0 0 100% 0)',
          scale: 1.08,
          duration: 1.1,
          ease: 'expo.out',
        });
        const image = el.querySelector('img');
        if (image) {
          gsap.to(image, {
            yPercent: -9,
            ease: 'none',
            scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: 0.9 },
          });
        }
      });

      gsap.from('.footer-brand, .footer-column, .footer-bottom', {
        scrollTrigger: { trigger: '.ptb-footer', start: 'top 82%', once: true },
        y: 26,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power3.out',
      });
    });

    if (!reduceMotion && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      const cursorX = gsap.quickTo(cursor, 'x', { duration: 0.42, ease: 'power3.out' });
      const cursorY = gsap.quickTo(cursor, 'y', { duration: 0.42, ease: 'power3.out' });
      const moveCursor = (event) => {
        cursorX(event.clientX);
        cursorY(event.clientY);
      };
      window.addEventListener('pointermove', moveCursor, { passive: true });
      cleanupFns.push(() => window.removeEventListener('pointermove', moveCursor));

      const magneticItems = gsap.utils.toArray('.btn, .sticky-give, .pathway-card, .funnel-card, .stat-card, .tier-card, .sub-card, [data-gsap="interactive-box"]');
      magneticItems.forEach((el) => {
        const onEnter = () => cursor.classList.add('is-active');
        const onMove = (event) => {
          const rect = el.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width - 0.5;
          const y = (event.clientY - rect.top) / rect.height - 0.5;
          gsap.to(el, {
            x: x * 10,
            y: y * 8,
            rotateX: y * -2.2,
            rotateY: x * 2.6,
            transformPerspective: 900,
            duration: 0.38,
            ease: 'power3.out',
            overwrite: 'auto',
          });
        };
        const onLeave = () => {
          cursor.classList.remove('is-active');
          gsap.to(el, { x: 0, y: 0, rotateX: 0, rotateY: 0, duration: 0.58, ease: 'expo.out', overwrite: 'auto' });
        };
        el.addEventListener('pointerenter', onEnter);
        el.addEventListener('pointermove', onMove);
        el.addEventListener('pointerleave', onLeave);
        cleanupFns.push(() => {
          el.removeEventListener('pointerenter', onEnter);
          el.removeEventListener('pointermove', onMove);
          el.removeEventListener('pointerleave', onLeave);
        });
      });

      const heroWrap = document.querySelector('.hero-media-wrap');
      const heroMedia = document.querySelector('.hero-media');
      if (heroWrap && heroMedia) {
        const move = (event) => {
          const rect = heroWrap.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width - 0.5;
          const y = (event.clientY - rect.top) / rect.height - 0.5;
          gsap.to(heroMedia, {
            x: x * 18,
            y: y * 14,
            rotateX: y * -3,
            rotateY: x * 4,
            transformPerspective: 900,
            duration: 0.45,
            ease: 'power3.out',
            overwrite: 'auto',
          });
          gsap.to('.hero-orbit-card', { x: x * -12, y: y * -10, duration: 0.45, ease: 'power3.out', overwrite: 'auto' });
        };
        const leave = () => {
          gsap.to(heroMedia, { x: 0, y: 0, rotateX: 0, rotateY: 0, duration: 0.65, ease: 'expo.out', overwrite: 'auto' });
          gsap.to('.hero-orbit-card', { x: 0, y: 0, duration: 0.65, ease: 'expo.out', overwrite: 'auto' });
        };
        heroWrap.addEventListener('mousemove', move);
        heroWrap.addEventListener('mouseleave', leave);
        cleanupFns.push(() => {
          heroWrap.removeEventListener('mousemove', move);
          heroWrap.removeEventListener('mouseleave', leave);
        });
      }
    }

    ScrollTrigger.refresh();

    return () => {
      cleanupFns.forEach((fn) => fn());
      ctx.revert();
    };
  }, []);

  return null;
}
