import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const CardAnimation = () => {
  const container = useRef();

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".card");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "+=400%",
          scrub: 1,
          pin: true,
        },
      });

      // Entrance
      tl.to(cards, {
        y: 0,
        stagger: 0.15,
        duration: 1,
      });

      // Rotate reveal
      tl.to(
        cards,
        {
          rotateY: 0,
          stagger: 0.15,
          duration: 2,
          rotationZ: (i) => (i % 2 === 0 ? -4 : 4),
          ease: "power2.inOut",
        },
        "swap"
      );

      // Exit animation
      [...cards].reverse().forEach((card, i) => {
        tl.to(
          card,
          {
            y: -1200,
            rotationZ: i % 2 === 0 ? -15 : 15,
            duration: 1,
            ease: "power2.in",
          },
          `exit+=${i * 0.4}`
        );
      });
    },
    { scope: container }
  );

  const cardData = [
    {
      id: "card-3",
      image:
        "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-23.15.19.png?w=1200&h=1200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847626&s=fcd852553577704c1299945293bb882d",
      title: "Speed",
      para1:
        "People ask us why we are called Rise at Seven? Ever heard the saying Early Bird catches the worm? Google is moving fast, but humans are moving faster. We chase consumers, not algorithms. We've created a service which takes ideas to result within 60 minutes.",
      bgColor: "bg-white",
      textColor: "text-black",
    },
    {
      id: "card-2",
      image:
        "https://rise-atseven.transforms.svdcdn.com/production/images/d4df0d30-d590-4e94-9056-9491f4beacba.JPG?w=1200&h=1200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847714&s=54a93df74e28afe7f04eec5b323cecf3",
      title: "Award Winning",
      para1:
        "A roll top bath full of 79 awards. Voted The Drum's best agency outside of London. We are official judges for industry awards including Global Search Awards and Global Content Marketing Awards.",
      bgColor: "bg-[#b2f6e3]",
      textColor: "text-black",
    },
    {
      id: "card-1",
      image:
        "https://rise-atseven.transforms.svdcdn.com/production/images/b2087e0cd3f699d3efc76f809ec72a85a6ab378e-1080x1350.jpg?w=200&h=200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847630&s=a668733e8ced1733809794da9c15f062",
      title: "Pioneers",
      para1:
        "We’re dedicated to creating the industry narrative that others follow 3 years from now. We paved the path for creative SEO, multi-channel search with Digital PR, and Social Search.",
      bgColor: "bg-black",
      textColor: "text-white",
    },
  ];

  return (
    <main className="bg-[#f5f5f3] overflow-x-hidden">
      <section
        ref={container}
        className="h-screen w-full flex items-center justify-center relative px-4"
      >
        <div className="relative w-full max-w-[450px] h-[650px] flex items-center justify-center">

          {/* TITLE */}
          <h2 className="absolute -top-16 left-1/2 -translate-x-1/2 text-center text-[24px] sm:text-[30px] md:text-[36px] font-bold whitespace-nowrap">
            Legacy In The Making
          </h2>

          {cardData.map((card) => (
            <div
              key={card.id}
              className={`card absolute rounded-[24px] p-5 sm:p-6 md:p-7 
              w-full max-w-[450px]
              min-h-[520px]
              flex flex-col gap-6
              shadow-2xl
              overflow-hidden
              [transform:translateY(150%)]
              ${card.bgColor}
              ${card.textColor}`}
            >

              {/* IMAGE */}
              <div className="w-full flex justify-center">
                <img
                  className="rounded-2xl w-[160px] sm:w-[200px] md:w-[230px] object-cover"
                  src={card.image}
                  alt={card.title}
                />
              </div>

              {/* CONTENT */}
              <div className="flex flex-col items-center text-center gap-4 flex-1">

                <h2 className="text-2xl md:text-3xl font-bold">
                  {card.title}
                </h2>

                <p className="text-sm sm:text-[15px] md:text-[17px] leading-relaxed">
                  {card.para1}
                </p>

              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default CardAnimation;