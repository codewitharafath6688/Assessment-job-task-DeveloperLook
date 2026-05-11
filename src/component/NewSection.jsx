import React, { useRef } from "react";
import Button1 from "./Button1";
import { FaClock, FaArrowUpRightFromSquare } from "react-icons/fa6";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const data = [
  {
    id: "card-1",
    image: "https://rise-atseven.transforms.svdcdn.com/production/images/0B5A8137.jpg?w=1600&h=1600&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1778062638&s=956fbe55cbc565d2ee1fbf6106ffda9e",
    postMan: "Ray Siddiq",
    title: "Rise at Seven Appoints Hollie Lovell as Senior Operations Lead",
    postTime: "3 min",
    postManPic: "https://rise-atseven.transforms.svdcdn.com/production/images/blog/import/WhatsApp-Image-2025-06-23-at-22.50.52.jpeg?w=1231&h=1145&q=100&auto=format&fit=crop&dm=1750949501&s=fe120a0db5c7acc0cd0c72601fb4ba89",
  },
  {
    id: "card-2",
    image: "https://rise-atseven.transforms.svdcdn.com/production/images/WRAS-Manchester-01.png?w=1600&h=1600&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1778084605&s=bd3fc001d0b0b301f18e85a5ffb0cc52",
    postMan: "Ray Siddiq",
    title: "Rise at Seven Exits Sheffield and Triples Manchester as new HQ as they go for global expansion",
    postTime: "2 min",
    postManPic: "https://rise-atseven.transforms.svdcdn.com/production/images/blog/import/WhatsApp-Image-2025-06-23-at-22.50.52.jpeg?w=1231&h=1145&q=100&auto=format&fit=crop&dm=1750949501&s=fe120a0db5c7acc0cd0c72601fb4ba89",
  },
  {
    id: "card-3",
    image: "https://rise-atseven.transforms.svdcdn.com/production/images/0B5A7827.jpg?w=1600&h=1600&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1777514348&s=988a3a3c2ac12f47fd33ff55ab4eb550",
    postMan: "Carrie Rose",
    title: "Ryan McNamara Is Now Rise at Seven's Global Operations Director",
    postTime: "2 min",
    postManPic: "https://rise-atseven.transforms.svdcdn.com/production/images/blog/import/84b3917f166d7feb4c2376f78ce33ae432656999.jpg?w=1080&h=1080&q=100&auto=format&fit=crop&dm=1750847674&s=8bef9798a0d24a5970f561908d301967",
  },
];

const NewSection = () => {
  const container = useRef();
  const cursorRef = useRef();

  useGSAP(() => {
    // 1. Mouse Follow Logic
    const moveCursor = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.6,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);

    // 2. Optimized Hover Logic
    const cards = gsap.utils.toArray(".card-item");
    
    cards.forEach((card) => {
      // Select the image inside this specific card
      const img = card.querySelector(".card-image");

      card.addEventListener("mouseenter", () => {
        // Cursor Pop
        gsap.to(cursorRef.current, {
          scale: 1,
          opacity: 1,
          duration: 0.3,
        });

        // Image Blur & Scale
        gsap.to(img, {
          filter: "blur(12px)", // Adjust blur strength here
          scale: 1.05,
          duration: 0.5,
          ease: "power2.out",
        });
      });

      card.addEventListener("mouseleave", () => {
        // Cursor Hide
        gsap.to(cursorRef.current, {
          scale: 0,
          opacity: 0,
          duration: 0.3,
        });

        // Image Reset
        gsap.to(img, {
          filter: "blur(0px)",
          scale: 1,
          duration: 0.5,
          ease: "power2.inOut",
        });
      });
    });

    return () => window.removeEventListener("mousemove", moveCursor);
  }, { scope: container });

  return (
    <section ref={container} className="relative w-full max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 py-10 overflow-hidden">
      
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-20 h-20 bg-[#69d2b1] rounded-full pointer-events-none z-50 flex items-center justify-center scale-0 opacity-0 -translate-x-1/2 -translate-y-1/2"
      >
        <FaArrowUpRightFromSquare className="text-white text-2xl" />
      </div>

      {/* Header Section */}
      <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
        <h2 className="flex items-center gap-3 sm:gap-5 text-[42px] sm:text-[56px] md:text-[65px] lg:text-[75px] font-medium leading-none">
          What's
          <img 
            className="w-[50px] h-[50px] sm:w-[65px] sm:h-[65px] md:w-[75px] md:h-[75px] rounded-2xl object-cover"
            src="https://rise-atseven.transforms.svdcdn.com/production/images/FOS25-3380.jpg?w=200&h=200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750846499&s=8c1a07d60970e114e350dc38945f6bad"
            alt="Rise Icon"
          />
          New
        </h2>
        <Button1 content={"Explore More Thoughts"} />
      </div>

      <div className="border-b border-gray-300 pb-8"></div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {data.map((card) => (
          <div key={card.id} className="card-item group cursor-none">
            
            {/* Image Container */}
            <div className="relative overflow-hidden rounded-[28px] bg-gray-100">
              <img
                src={card.image}
                alt={card.title}
                className="card-image w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px] object-cover"
              />

              <span className="absolute top-4 left-4 bg-white px-4 py-2 rounded-full text-sm font-medium z-10">
                News
              </span>
            </div>

            {/* Meta Data */}
            <div className="pt-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-2 bg-white rounded-full py-1 pl-1 pr-4 shadow-sm border border-gray-100">
                  <img
                    src={card.postManPic}
                    alt={card.postMan}
                    className="w-7 h-7 rounded-full object-cover"
                  />
                  <span className="text-sm text-gray-700">{card.postMan}</span>
                </div>

                <div className="bg-white rounded-full px-4 py-2 text-sm text-gray-700 flex items-center gap-2 shadow-sm border border-gray-100">
                  <FaClock /> {card.postTime}
                </div>
              </div>

              <h3 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] leading-[1.1] tracking-[-2px] font-medium transition-colors group-hover:text-[#69d2b1]">
                {card.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewSection;