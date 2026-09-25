"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";
import Footer from "@/components/Footer";

const STEPS_A = [
  {
    title: "1. Immersion & analysis",
    lead: "It starts with listening and understanding. I get to the heart of the brand, its world, and its challenges:",
    bullets: [
      "Analysis of the market, the competition, and the trends",
      "Understanding of the goals, the audiences, and the constraints",
      "A clear, relevant creative strategy",
    ],
    closing: "This phase lays a solid foundation for every project.",
  },
  {
    title: "2. Creative concept",
    lead: "Ideas take shape. Through a collaborative, iterative process, I build the world of the project:",
    bullets: [
      "Inspiration research and moodboards",
      "Development of graphic and narrative concepts",
      "Art direction: type, color, composition, visual tone",
    ],
    closing:
      "Every creative choice is made to serve the message and strengthen the impact.",
  },
] as const;

const STEPS_B = [
  {
    title: "3. Production & design",
    lead: "The vision becomes real.",
    body: "I bring the concepts to life through careful production:",
    bullets: [
      "Branding, visual identity, motion design, web design, digital content",
      "Tests, adjustments, and refinements",
    ],
    closing:
      "Final approval and delivery, to the standards of each channel.",
  },
  {
    title: "4. Rollout & support",
    lead: "Making the work is good. Getting it seen is better.",
    body: "I support my clients as the work goes live and gets used:",
    bullets: [
      "Print, digital, and social rollout",
      "Performance tracking and adjustments",
      "Advice and support to get the most from the delivered work",
    ],
  },
] as const;

function Credentials({ side = "left" }: { side?: "left" | "right" }) {
  return (
    <div
      className={`pointer-events-none absolute bottom-10 z-20 hidden flex-col items-center gap-3 md:flex ${
        side === "left" ? "left-6 md:left-10" : "right-6 md:right-10"
      }`}
      aria-hidden
    >
      <span className="origin-center -rotate-180 text-[0.65rem] font-medium tracking-[0.28em] uppercase text-white/40 [writing-mode:vertical-rl]">
        Credentials 2025
      </span>
      <span className="text-white/35">↓</span>
    </div>
  );
}

function StepBlock({
  title,
  lead,
  body,
  bullets,
  closing,
  onLight = false,
}: {
  title: string;
  lead: string;
  body?: string;
  bullets: readonly string[];
  closing?: string;
  onLight?: boolean;
}) {
  return (
    <article className="method-step space-y-2.5">
      <h2
        className={`font-display text-[clamp(1.15rem,2.4vw,1.65rem)] font-semibold leading-tight tracking-[-0.02em] uppercase ${
          onLight ? "text-black" : "text-[color:var(--accent)]"
        }`}
      >
        {title}
      </h2>
      <p
        className={`text-sm leading-snug md:text-[0.95rem] md:leading-snug ${
          onLight ? "text-black/80" : "text-white/85"
        }`}
      >
        {lead}
      </p>
      {body ? (
        <p
          className={`text-sm leading-snug md:text-[0.95rem] md:leading-snug ${
            onLight ? "text-black/70" : "text-white/75"
          }`}
        >
          {body}
        </p>
      ) : null}
      <ul
        className={`mt-1 space-y-2.5 border-l pl-4 text-sm leading-snug md:text-[0.95rem] md:leading-snug ${
          onLight
            ? "border-black/20 text-black/75"
            : "border-white/15 text-white/75"
        }`}
      >
        {bullets.map((item) => (
          <li key={item} className="relative flex gap-3">
            <span
              aria-hidden
              className={`mt-[0.55em] h-px w-2.5 shrink-0 ${
                onLight ? "bg-black" : "bg-[color:var(--accent)]"
              }`}
            />
            <span className="min-w-0">{item}</span>
          </li>
        ))}
      </ul>
      {closing ? (
        <p
          className={`text-sm leading-snug md:text-[0.95rem] md:leading-snug ${
            onLight ? "text-black/80" : "text-white/80"
          }`}
        >
          {closing}
        </p>
      ) : null}
    </article>
  );
}

export default function MethodPage() {
  const pageRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(
          [
            ".method-page-title",
            ".method-step",
            ".method-visual",
            ".method-deco",
          ],
          { autoAlpha: 1, y: 0, x: 0, scale: 1 },
        );
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>(".method-panel").forEach((panel) => {
          const title = panel.querySelectorAll(".method-page-title");
          const steps = panel.querySelectorAll(".method-step");
          const visuals = panel.querySelectorAll(".method-visual");
          const decos = panel.querySelectorAll(".method-deco");

          if (title.length) {
            gsap.fromTo(
              title,
              { autoAlpha: 0, y: 32 },
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.85,
                delay: 0.12,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: panel,
                  start: "top 70%",
                  end: "bottom 22%",
                  toggleActions: "play reverse play reverse",
                },
              },
            );
          }

          if (steps.length) {
            gsap.fromTo(
              steps,
              { autoAlpha: 0, y: 28 },
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.65,
                delay: 0.22,
                stagger: 0.18,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: panel,
                  start: "top 68%",
                  end: "bottom 20%",
                  toggleActions: "play reverse play reverse",
                },
              },
            );
          }

          if (visuals.length) {
            gsap.fromTo(
              visuals,
              { autoAlpha: 0, y: 40, scale: 0.96 },
              {
                autoAlpha: 1,
                y: 0,
                scale: 1,
                duration: 0.95,
                delay: 0.28,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: panel,
                  start: "top 65%",
                  end: "bottom 18%",
                  toggleActions: "play reverse play reverse",
                },
              },
            );
          }

          if (decos.length) {
            gsap.fromTo(
              decos,
              { autoAlpha: 0, scale: 0.88, rotate: -6 },
              {
                autoAlpha: 1,
                scale: 1,
                rotate: 0,
                duration: 0.8,
                delay: 0.35,
                stagger: 0.16,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: panel,
                  start: "top 64%",
                  end: "bottom 18%",
                  toggleActions: "play reverse play reverse",
                },
              },
            );
          }
        });
      });

      return () => mm.revert();
    },
    { scope: pageRef },
  );

  return (
    <main ref={pageRef} className="relative bg-black text-white">
      {/* Panel 1 — steps 1–2 + magician right */}
      <section className="method-panel relative isolate min-h-svh overflow-hidden md:min-h-dvh">
        {/* Mobile: image fill (évite le zoom Safari lié à bg-fixed / dvh) */}
        <div className="pointer-events-none absolute inset-0 z-0 md:hidden" aria-hidden>
          <Image
            src="/img/bg-green.png"
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        {/* Desktop: fond fixed */}
        <div
          className="pointer-events-none absolute inset-0 z-0 hidden bg-[url('/img/bg-green.png')] bg-cover bg-center bg-no-repeat bg-fixed md:block"
          aria-hidden
        />

        <Credentials side="left" />

        {/* Desktop visual — bottom right */}
        <div className="pointer-events-none absolute right-0 bottom-0 z-10 hidden w-full max-w-[min(52%,560px)] justify-end md:flex md:right-6 lg:right-10">
          <div className="method-deco absolute bottom-[72%] right-[10%] z-20 w-[38%] max-w-[14rem]">
            <div className="relative aspect-square w-full">
              <Image
                src="/img/icons/ICO_EK-06.png"
                alt=""
                fill
                className="object-contain"
                sizes="224px"
                priority
              />
            </div>
          </div>

          <div className="method-visual relative aspect-[913/1335] h-[min(78dvh,720px)] w-auto max-w-full">
            <Image
              src="/img/method.png"
              alt="Herman Kande — method"
              fill
              priority
              className="object-contain object-bottom"
              sizes="480px"
            />
          </div>
        </div>

        <div className="relative z-10 mx-auto flex min-h-svh w-full max-w-7xl flex-col px-6 pt-28 pb-0 md:min-h-dvh md:grid md:grid-cols-12 md:items-center md:px-10 md:py-24">
          <div className="md:col-span-7 lg:col-span-6">
            <h1 className="method-page-title font-display text-[clamp(1.85rem,5vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.03em] uppercase text-black">
              Working
              <br />
              method
            </h1>

            <div className="mt-8 space-y-7 md:mt-12 md:space-y-8">
              {STEPS_A.map((step) => (
                <StepBlock key={step.title} {...step} onLight />
              ))}
            </div>
          </div>

          {/* Mobile visual — under text, bottom of section */}
          <div className="relative mt-10 flex flex-1 flex-col items-center justify-end md:hidden">
            <div className="method-deco absolute bottom-[68%] left-1/2 z-20 w-24 -translate-x-1/2 sm:w-28">
              <div className="relative aspect-square w-full">
                <Image
                  src="/img/icons/ICO_EK-06.png"
                  alt=""
                  fill
                  className="object-contain"
                  sizes="112px"
                  priority
                />
              </div>
            </div>
            <div className="method-visual relative aspect-[913/1335] h-[min(48svh,400px)] w-auto max-w-[85%]">
              <Image
                src="/img/method.png"
                alt="Herman Kande — method"
                fill
                priority
                className="object-contain object-bottom"
                sizes="85vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Panel 2 — magician left + steps 3–4 + icons */}
      <section className="method-panel relative isolate min-h-svh overflow-hidden md:min-h-dvh">
        <div className="pointer-events-none absolute inset-0 z-0 md:hidden" aria-hidden>
          <Image
            src="/img/bg-black.png"
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        <div
          className="pointer-events-none absolute inset-0 z-0 hidden bg-[url('/img/bg-black.png')] bg-cover bg-center bg-no-repeat bg-fixed md:block"
          aria-hidden
        />

        <Credentials side="right" />

        {/* Desktop visual — bottom left */}
        <div className="pointer-events-none absolute bottom-0 left-0 z-10 hidden w-full max-w-[min(52%,560px)] justify-start md:flex md:left-6 lg:left-10">
          <div className="method-visual relative aspect-[913/1335] h-[min(78dvh,720px)] w-auto max-w-full">
            <Image
              src="/img/method.png"
              alt=""
              fill
              className="object-contain object-bottom"
              sizes="480px"
            />
          </div>
        </div>

        <div className="relative z-10 mx-auto flex min-h-svh w-full max-w-7xl flex-col px-6 pt-24 pb-0 md:min-h-dvh md:grid md:grid-cols-12 md:items-center md:gap-6 md:px-10 md:py-20 lg:gap-10">
          <div className="hidden md:col-span-4 md:block" aria-hidden />

          <div className="md:col-span-5 lg:col-span-5">
            <div className="space-y-7 md:space-y-8">
              {STEPS_B.map((step) => (
                <StepBlock key={step.title} {...step} />
              ))}
            </div>
          </div>

          {/* Desktop icons */}
          <div className="relative hidden flex-col items-end justify-center gap-10 md:col-span-3 md:flex lg:col-span-3">
            <div className="method-deco relative aspect-square w-36 lg:w-44">
              <Image
                src="/img/icons/ICO_EK-02.png"
                alt=""
                fill
                className="object-contain"
                sizes="176px"
              />
            </div>
            <div className="method-deco relative aspect-square w-40 lg:w-48">
              <Image
                src="/img/icons/ICO_EK-05.png"
                alt=""
                fill
                className="object-contain"
                sizes="192px"
              />
            </div>
          </div>

          {/* Mobile — icons only (no method image) */}
          <div className="relative mt-10 flex flex-1 flex-col items-center justify-end gap-6 pb-8 md:hidden">
            <div className="flex items-center justify-center gap-6">
              <div className="method-deco relative aspect-square w-36 sm:w-40">
                <Image
                  src="/img/icons/ICO_EK-02.png"
                  alt=""
                  fill
                  className="object-contain"
                  sizes="160px"
                />
              </div>
              <div className="method-deco relative aspect-square w-40 sm:w-44">
                <Image
                  src="/img/icons/ICO_EK-05.png"
                  alt=""
                  fill
                  className="object-contain"
                  sizes="176px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
