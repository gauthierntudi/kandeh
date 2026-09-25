"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";

const VALUES = [
  {
    icon: "/img/icons/ICO_EK-04.png",
    title: "Branding",
    body: "L’identité visuelle et les infographies rendent une marque lisible. Je construis des systèmes cohérents, de l’affiche au support digital, pour que chaque client soit reconnu.",
  },
  {
    icon: "/img/icons/ICO_EK-03.png",
    title: "Vidéo",
    body: "Le montage sert le message. Je réalise des vidéos promotionnelles et pédagogiques, claires et tenues, pour des campus, des campagnes et des communautés.",
  },
  {
    icon: "/img/icons/ICO_EK-01.png",
    title: "Digital",
    body: "Adobe Creative Suite et la gestion de contenus numériques tiennent l’ensemble. Je mets à jour les visuels et l’identité en ligne pour qu’ils restent justes et cohérents.",
  },
] as const;

export default function Values() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(
          [".values-title", ".values-item", ".values-cred", ".values-dots"],
          { autoAlpha: 1, y: 0 },
        );
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 72%",
              toggleActions: "play none none none",
            },
          })
          .fromTo(
            ".values-title",
            { autoAlpha: 0, y: 28 },
            { autoAlpha: 1, y: 0, duration: 0.7, ease: "power3.out" },
          )
          .fromTo(
            ".values-item",
            { autoAlpha: 0, y: 32 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.65,
              stagger: 0.12,
              ease: "power3.out",
            },
            "-=0.35",
          )
          .fromTo(
            ".values-dots",
            { autoAlpha: 0 },
            { autoAlpha: 1, duration: 0.4 },
            "-=0.35",
          )
          .fromTo(
            ".values-cred",
            { autoAlpha: 0 },
            { autoAlpha: 1, duration: 0.45 },
            "-=0.3",
          );
      });

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onScroll = () => {
      const slides = track.querySelectorAll<HTMLElement>(".values-item");
      if (!slides.length) return;
      const center = track.scrollLeft + track.clientWidth / 2;
      let closest = 0;
      let min = Infinity;
      slides.forEach((slide, i) => {
        const mid = slide.offsetLeft + slide.offsetWidth / 2;
        const dist = Math.abs(mid - center);
        if (dist < min) {
          min = dist;
          closest = i;
        }
      });
      setActive(closest);
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  const goToSlide = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const slide = track.querySelectorAll<HTMLElement>(".values-item")[index];
    if (!slide) return;
    const left =
      slide.offsetLeft - (track.clientWidth - slide.offsetWidth) / 2;
    track.scrollTo({ left, behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      id="valeurs"
      className="snap-section relative overflow-hidden bg-black text-white"
    >
      <div className="absolute inset-0">
        <Image
          src="/img/bg-black.png"
          alt=""
          fill
          className="object-cover brightness-[1.35] contrast-110 saturate-90"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-white/[0.06]"
          aria-hidden
        />
      </div>

      <div className="values-cred absolute bottom-10 right-6 z-20 hidden flex-col items-center gap-3 md:right-10 md:flex">
        <span className="origin-center -rotate-180 text-[0.65rem] font-medium tracking-[0.28em] uppercase text-white/40 [writing-mode:vertical-rl]">
          Savoir-faire
        </span>
        <span aria-hidden className="text-white/35">
          ↓
        </span>
      </div>

      <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col justify-center px-0 py-20 md:px-10 md:py-16">
        <h2 className="values-title max-w-[18ch] px-6 text-left font-display text-[clamp(1.55rem,4vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.03em] uppercase text-white md:px-0">
          Les compétences qui me définissent
        </h2>

        <div
          ref={trackRef}
          className="values-track mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-6 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] touch-pan-x md:mt-14 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:px-0 md:pb-0 lg:gap-12 [&::-webkit-scrollbar]:hidden"
        >
          {VALUES.map((value) => (
            <article
              key={value.title}
              className="values-item flex w-[min(85vw,22rem)] shrink-0 snap-center flex-col items-center text-center md:w-auto md:shrink"
            >
              <div className="relative mb-5 h-20 w-20 md:mb-6 md:h-24 md:w-24 lg:h-28 lg:w-28">
                <Image
                  src={value.icon}
                  alt=""
                  fill
                  className="object-contain"
                  sizes="112px"
                />
              </div>
              <h3 className="font-display text-[clamp(1.25rem,2.5vw,1.75rem)] font-semibold tracking-[-0.02em] uppercase text-white">
                {value.title}
              </h3>
              <p className="mt-3 max-w-[36ch] text-sm leading-snug text-white/70 md:mt-4 md:text-[0.9375rem] md:leading-snug">
                {value.body}
              </p>
            </article>
          ))}
        </div>

        <div
          className="values-dots mt-8 flex items-center justify-center gap-2 md:hidden"
          role="tablist"
          aria-label="Compétences"
        >
          {VALUES.map((value, i) => (
            <button
              key={value.title}
              type="button"
              role="tab"
              aria-selected={active === i}
              aria-label={value.title}
              onClick={() => goToSlide(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                active === i
                  ? "w-6 bg-[color:var(--accent)]"
                  : "w-1.5 bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
