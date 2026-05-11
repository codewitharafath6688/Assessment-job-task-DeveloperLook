// TextTransform.jsx

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const TextTransform = () => {
  const container = useRef(null);

  const letters = [
    { char: "R", y: 0, rotate: 0 },
    { char: "e", y: 0, rotate: 0 },
    { char: "a", y: 0, rotate: 0 },
    { char: "d", y: 1.7, rotate: -0.2 },
    { char: "y", y: 9.8, rotate: -1.6 },

    { char: " ", y: 0, rotate: 0 },

    { char: "t", y: 7.8, rotate: -1.3 },
    { char: "o", y: -24, rotate: 4 },

    { char: " ", y: 0, rotate: 0 },

    { char: "R", y: -64, rotate: 10.7 },
    { char: "i", y: -71, rotate: 11.8 },
    { char: "s", y: -63, rotate: 10.5 },
    { char: "e", y: -60, rotate: 10 },

    { char: " ", y: 0, rotate: 0 },

    { char: "a", y: -60, rotate: 10 },
    { char: "t", y: -60, rotate: 10 },

    { char: " ", y: 0, rotate: 0 },

    { char: "S", y: -60, rotate: 10 },
    { char: "e", y: -60, rotate: 10 },
    { char: "v", y: -60, rotate: 10 },
    { char: "e", y: -60, rotate: 10 },
    { char: "n", y: -60, rotate: 10 },
    { char: "?", y: -60, rotate: 10 },
  ];

  useGSAP(
    () => {
      gsap.fromTo(
        ".char",
        {
          x: 400,
          y: -300,
          opacity: 0,
          rotate: -30,
        },
        {
          x: 0,

          // END POSITION = STRAIGHT
          y: 0,

          opacity: 1,

          // END ROTATION = STRAIGHT
          rotate: 0,

          stagger: 0.05,
          ease: "power4.out",

          scrollTrigger: {
            trigger: container.current,
            start: "top 85%",
            end: "top 10%",
            scrub: 1.5,
          },
        }
      );
    },
    { scope: container }
  );

  return (
    <div className="hidden md:block">
      <section
        ref={container}
        className="h-[250px]"
      >
        <div className="sticky top-0 flex items-center justify-center overflow-hidden h-full px-5">
          <div
            className="
              shrink-0
              flex
              text-[8vw]
              lg:text-[9vw]
              font-medium
              tracking-tight
              leading-none
            "
            aria-label="Ready to Rise at Seven?"
          >
            {letters.map((item, index) => (
              <div
                key={index}
                className="char relative inline-block opacity-0"
              >
                {item.char === " " ? "\u00A0" : item.char}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TextTransform;