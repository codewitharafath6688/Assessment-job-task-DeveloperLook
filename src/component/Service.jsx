import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Button1 from "./Button1";

const ServiceItem = ({ title, img }) => {
  const scope = useRef();
  const timeline = useRef();

  useGSAP(() => {
    const pill = scope.current.querySelector(".hover-pill");
    const image = scope.current.querySelector(".pill-img");
    const arrow = scope.current.querySelector(".arrow");

    timeline.current = gsap.timeline({ paused: true })
      .to(pill, { 
        width: "100%", 
        duration: 0.45, 
        ease: "power3.inOut" 
      })
      .to(image, { 
        scale: 1, 
        duration: 0.45, 
        ease: "power3.inOut" 
      }, 0)
      .to(arrow, { 
        opacity: 1, 
        x: 0, 
        duration: 0.3, 
        ease: "back.out(2)" 
      }, 0.1);
  }, { scope });

  return (
    <div 
      ref={scope}
      onMouseEnter={() => timeline.current.play()}
      onMouseLeave={() => timeline.current.reverse()}
      // border-b here ensures lines are contained within each grid cell per image_8315df.png
      className="relative group flex items-center justify-between py-12 border-b border-gray-300 cursor-pointer overflow-hidden"
    >
      <div className="hover-pill absolute left-0 top-1/2 -translate-y-1/2 h-[75%] w-0 bg-black rounded-full overflow-hidden z-0 pointer-events-none">
        <img 
          src={img} 
          alt={title}
          className="pill-img absolute inset-0 w-full h-full object-cover opacity-60 scale-[1.5]" 
        />
      </div>

      <div className="relative z-10 flex items-center gap-4 px-4 transition-colors duration-300 group-hover:text-white">
        <span className="arrow opacity-0 -translate-x-4 text-2xl font-light">↗</span>
        <h3 className="text-[22px] sm:text-[28px] md:text-[32px] lg:text-[38px] font-medium tracking-tight leading-none uppercase">
          {title}
        </h3>
      </div>
    </div>
  );
};

const Service = () => {
  const services = [
    { title: "Digital PR", img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80" },
    { title: "Organic Social & Content", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80" },
    { title: "Search & Growth Strategy", img: "https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?auto=format&fit=crop&q=80" },
    { title: "Content Experience", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80" },
    { title: "Data & Insights", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80" },
    { title: "Onsite SEO", img: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80" },
  ];

  return (
    <div className="bg-[#ebebeb] min-h-screen">
      <div className="mx-auto w-full max-w-[1400px] py-10 md:py-20 px-4 sm:px-6 lg:px-10">
        
        {/* Header Section */}
        <div className="mb-10 md:mb-16">
          <div className="flex flex-wrap justify-between items-end gap-4 pb-6 sm:pb-8 border-b border-gray-400">
            <h2 className="text-[42px] sm:text-[56px] md:text-[68px] lg:text-[80px] font-semibold tracking-tighter leading-none flex items-center gap-3 sm:gap-6 flex-wrap">
              Our 
              <div className="w-[70px] h-[50px] sm:w-[90px] sm:h-[60px] md:w-[120px] md:h-[75px]">
                <img 
                  className="w-full h-full object-cover rounded-2xl" 
                  src="https://rise-atseven.transforms.svdcdn.com/production/images/IMG_5079.JPG?w=200&h=200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750944462&s=5eb651d549739cde26429958911743ea" 
                  alt="decorative"
                />
              </div>
              Services
            </h2>
            <div className="pb-2 sm:pb-4">
              <Button1 content={"View All Services"} />
            </div>
          </div>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20">
          {services.map((item, index) => (
            <ServiceItem key={index} title={item.title} img={item.img} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Service;