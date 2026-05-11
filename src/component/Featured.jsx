import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const portfolioData = [
  {
    title: "SIXT",
    year: "[2023-2025]",
    image: "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Client/Black/sixt-1.jpg?w=1600&h=1200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847611&s=b5b3d324e0455061c60fe917b85d106c",
    overlay: "An extra 3m clicks through SEO",
  },
  {
    title: "Dojo - B2B",
    year: "[2021-2025]",
    image: "https://rise-atseven.transforms.svdcdn.com/production/images/dojo-go-product-shot-1.jpg?w=1600&h=1200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847714&s=22e15e8ff19558f300183bc7ebc1b0ff",
    overlay: "A B2B success story for Dojo card machines",
  },
  {
    title: "MAGNET",
    year: "[2021]",
    image: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2026-02-07-at-17.01.43.png?w=1600&h=1200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1770483725&s=f1d98712e630df66aaf9b713ce70db2d",
    overlay: "A full service SEO success story 170%+ increase",
  },
  {
    title: "Leading E Sim",
    year: "[2023-2025]",
    image: "https://rise-atseven.transforms.svdcdn.com/production/images/eSIM-Europe-p1-what-is-eSIM-2-1.jpg?w=1600&h=1200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1761234573&s=9ef283005801f5f7607377f62cc54be8",
    overlay: "Increasing brand and non brand visibility UK/ES",
  },
  {
    title: "JD Sports",
    year: "[2025]",
    image: "https://rise-atseven.transforms.svdcdn.com/production/images/maxresdefault_2025-10-22-141838_nmnu.jpg?w=1600&h=1200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1761142718&s=19d31221b717bb829b65ed531322d432",
    overlay: "65% up YOY in clicks for JDSports FR , IT ,ES",
  },
  {
    title: "Parkedean Resorts",
    year: "[2019-2025]",
    image: "https://rise-atseven.transforms.svdcdn.com/production/images/easter-breaks.jpg?w=1600&h=1200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847715&s=e29b3435cbe0e68f30856e79714a50f3",
    overlay: "Dominating Google and AI search",
  },
  {
    title: "Pooky",
    year: "[2025]",
    image: "https://rise-atseven.transforms.svdcdn.com/production/images/Pooky-Rechargable-Doorstop-Cordless-100-Straight-Empire-Pendant-Silk-Ikat-Shade-in-Black-and-Cream-Atlas-44-Single-chukka-Cordless-95-scaled-1-1.jpg?w=1600&h=1200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847623&s=5e3e3b48f331495fa309422c715b5b6d",
    overlay: "Driving demand for Pooky Rechargeable Lights",
  },
  {
    title: "Revolution Beauty",
    year: "[2022-2025]",
    image: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-10-at-12.13.46.png?w=1600&h=1200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847624&s=66887254ebb0061e76bd4843483830d5",
    overlay: "Building the UK's leading beauty dupe brand",
  },
  {
    title: "LIoyds Pharmacy",
    year: "[2022-2023]",
    image: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-07-04-at-12.50.54.png?w=1600&h=1200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1751629865&s=ca93939dbf531401a1b3805445611f1c",
    overlay: "Driving category leadership for STI tests",
  },
  {
    title: "Pretty Little Thing",
    year: "[2021-2023]",
    image: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-14.43.56.png?w=1600&h=1200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847626&s=95854cccfcf8440a9dffe2897976126a",
    overlay: "Driving discovery for everything 'outfits' for PLT",
  },
];

const Featured = () => {
  const container = useRef();

  useGSAP(() => {
    const cards = gsap.utils.toArray('.portfolio-card');
    const items = gsap.utils.toArray('.text-item');

    // Only activate sticky text animation on md+ screens
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    cards.forEach((card, i) => {
      ScrollTrigger.create({
        trigger: card,
        start: "top center",
        end: "bottom center",
        onEnter: () => updateClasses(i),
        onEnterBack: () => updateClasses(i),
      });
    });

    function updateClasses(index) {
      items.forEach((item, i) => {
        item.classList.remove('opacity-100', 'translate-y-0', 'pointer-events-auto', 'opacity-20', 'translate-y-[60px]', 'blur-[2px]');
        item.classList.add('opacity-0', 'translate-y-[20px]', 'pointer-events-none');

        if (i === index) {
          item.classList.remove('opacity-0', 'translate-y-[20px]', 'pointer-events-none');
          item.classList.add('opacity-100', 'translate-y-0', 'pointer-events-auto');
        } else if (i === index + 1) {
          item.classList.remove('opacity-0', 'translate-y-[20px]');
          item.classList.add('opacity-20', 'translate-y-[60px]', 'blur-[2px]');
        }
      });
    }
  }, { scope: container });

  return (
    <div ref={container} className="bg-[#0d0d0d] w-full my-10 text-white" style={{ overflowX: "clip" }}>
      {/* Desktop: sticky centered text + scrolling cards */}
      <div className="hidden md:grid w-full" style={{ gridTemplateColumns: "1fr 1fr" }}>

        {/* LEFT: Sticky panel — title stays centered in viewport */}
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <div className="relative w-full h-[220px] flex items-center justify-center px-6">
            {portfolioData.map((item, index) => (
              <div
                key={index}
                className="text-item absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-0 translate-y-[20px] transition-all duration-[600ms] ease-[cubic-bezier(0.33,1,0.68,1)] pointer-events-none text-center px-4"
              >
                <h2 className="text-5xl lg:text-6xl xl:text-8xl font-extrabold uppercase tracking-tighter leading-none">
                  {item.title}
                </h2>
                <span className="text-sm lg:text-base text-gray-400 font-normal">
                  {item.year}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Scrolling Cards */}
        <div className="py-[50vh] pr-[6%] pl-[3%]">
          {portfolioData.map((item, index) => (
            <div
              key={index}
              className="portfolio-card card group relative h-[80vh] mb-[20vh] rounded-[20px] overflow-hidden cursor-pointer transition-transform duration-500 hover:scale-[1.02] bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              {item.overlay && (
                <div className="absolute inset-0 bg-orange-500/90 flex items-center justify-center p-8 text-xl xl:text-3xl text-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                  {item.overlay}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: stacked cards grid */}
      <div className="md:hidden w-full px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {portfolioData.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-[20px] overflow-hidden cursor-pointer aspect-[4/3] bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              {/* Always-visible title on mobile */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h2 className="text-xl font-extrabold uppercase tracking-tighter text-white leading-none">
                  {item.title}
                </h2>
                <span className="text-xs text-gray-400">{item.year}</span>
              </div>
              {item.overlay && (
                <div className="absolute inset-0 bg-orange-500/90 flex items-center justify-center p-6 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                  {item.overlay}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;