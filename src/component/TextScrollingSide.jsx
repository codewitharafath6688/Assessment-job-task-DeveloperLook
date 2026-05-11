import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Lenis from "lenis";

// REGISTER GSAP
gsap.registerPlugin(ScrollTrigger);

const TextScrollingSide = () => {
  const container = useRef(null);
  const headingRef = useRef(null);
  const cursorRef = useRef(null);

  useGSAP(
    () => {
      // =========================
      // LENIS SMOOTH SCROLL
      // =========================
      const lenis = new Lenis({
        smoothWheel: true,
      });

      const raf = (time) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
      };

      requestAnimationFrame(raf);

      // GSAP + LENIS SYNC
      lenis.on("scroll", ScrollTrigger.update);

      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });

      gsap.ticker.lagSmoothing(0);

      // =========================
      // CONTINUOUS MARQUEE
      // =========================
      const marquee = gsap.to(headingRef.current, {
        xPercent: -50,
        duration: 18,
        ease: "none",
        repeat: -1,
      });

      // =========================
      // SCROLL SPEED EFFECT
      // =========================
      ScrollTrigger.create({
        trigger: container.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,

        onUpdate: (self) => {
          const velocity = self.getVelocity();

          gsap.to(marquee, {
            timeScale: 1 + Math.abs(velocity) * 0.002,
            duration: 0.2,
            ease: "power2.out",
          });
        },

        onLeave: () => {
          gsap.to(marquee, {
            timeScale: 1,
            duration: 0.3,
          });
        },

        onLeaveBack: () => {
          gsap.to(marquee, {
            timeScale: 1,
            duration: 0.3,
          });
        },
      });

      // =========================
      // CUSTOM CURSOR
      // =========================
      const moveCursor = (e) => {
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.5,
          ease: "power3.out",
        });
      };

      window.addEventListener("mousemove", moveCursor);

      // =========================
      // CLEANUP
      // =========================
      return () => {
        lenis.destroy();
        window.removeEventListener("mousemove", moveCursor);
        ScrollTrigger.killAll();
      };
    },
    { scope: container },
  );

  // =========================
  // CURSOR HOVER EFFECT
  // =========================
  const onMouseEnter = () => {
    gsap.to(cursorRef.current, {
      scale: 3,
      width: "90px",
      height: "20px",
      borderRadius: "18px",
      background: "#b2f6e3",
      duration: 0.3,
      ease: "power3.out",
    });

    cursorRef.current.innerHTML = "Send Us Your Brief ↗";
  };

  const onMouseLeave = () => {
    gsap.to(cursorRef.current, {
      scale: 1,
      width: "20px",
      height: "20px",
      borderRadius: "999px",
      background:"",
      duration: 0.3,
      ease: "power3.out",
    });

    cursorRef.current.innerHTML = "";
  };

  return (
    <section
      ref={container}
      className="relative w-full  overflow-hidden py-5 "
    >
      {/* CUSTOM CURSOR */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 z-[999] w-5 h-5 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-[6px] font-medium"
      />

      <main className="w-full overflow-hidden">
        <div
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className="flex items-center overflow-hidden cursor-pointer"
        >
          {/* MARQUEE WRAPPER */}
          <div
            ref={headingRef}
            className="flex shrink-0 whitespace-nowrap will-change-transform"
          >
            {/* ========================= */}
            {/* FIRST SET */}
            {/* ========================= */}
            <div className="flex items-center gap-24 pr-24 shrink-0 py-4">
              {/* ITEM */}
              <div className="flex items-center gap-15 shrink-0">
                <h2 className="text-[11vw] leading-[1.05] pb-3 flex-shrink-0 font-semibold">
                  Not Algorithms
                </h2>

                <img
                  className="w-[120px] h-[120px] rounded-2xl object-cover flex-shrink-0"
                  src="https://rise-atseven.transforms.svdcdn.com/production/images/IMG_5023.jpg?w=1600&h=1600&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750846538&s=b3a59f30ae95b2098230edc2137e02f7"
                  alt="Not Algorithms"
                />
              </div>

              {/* ITEM */}
              <div className="flex items-center gap-15 shrink-0">
                <h2 className="text-[11vw] leading-[1.05] pb-3 flex-shrink-0 font-semibold">
                  Chasing Consumers
                </h2>

                <img
                  className="w-[120px] h-[120px] rounded-2xl object-cover flex-shrink-0"
                  src="https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-25-at-14.49.00.png?w=1600&h=1600&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750859361&s=8df7953c8590164f1507ce725ef56bd7"
                  alt="Chasing Consumers"
                />
              </div>
            </div>

            {/* ========================= */}
            {/* DUPLICATE SET */}
            {/* ========================= */}
            <div className="flex items-center gap-24 pr-24 shrink-0 py-4">
              {/* ITEM */}
              <div className="flex items-center gap-15 shrink-0">
                <h2 className="text-[11vw] leading-[1.05] pb-3 flex-shrink-0 font-semibold">
                  Not Algorithms
                </h2>

                <img
                  className="w-[120px] h-[120px] rounded-2xl object-cover flex-shrink-0"
                  src="https://rise-atseven.transforms.svdcdn.com/production/images/IMG_5023.jpg?w=1600&h=1600&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750846538&s=b3a59f30ae95b2098230edc2137e02f7"
                  alt="Not Algorithms"
                />
              </div>

              {/* ITEM */}
              <div className="flex items-center gap-15 shrink-0">
                <h2 className="text-[11vw] leading-[1.05] pb-3 flex-shrink-0 font-semibold">
                  Chasing Consumers
                </h2>

                <img
                  className="w-[120px] h-[120px] rounded-2xl object-cover flex-shrink-0"
                  src="https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-25-at-14.49.00.png?w=1600&h=1600&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750859361&s=8df7953c8590164f1507ce725ef56bd7"
                  alt="Chasing Consumers"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default TextScrollingSide;