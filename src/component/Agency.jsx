import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const logos = [
  "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Client/Black/Untitled-design.png?w=800&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1752040111&s=445a7b7024aa8d6f5e5d391dd622a36d",

  "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Client/Black/red-bull-logo-black.png?w=800&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1754645714&s=dce5e3e2020297d85adf0de6d8426157",

  "https://rise-atseven.transforms.svdcdn.com/production/images/SN.webp?w=800&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5338&fp-y=0.5169&dm=1777373493&s=ead6719eb9ced22d7329aa45ffe821b2",

  "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Client/Black/01J76SW385WN4X1CBJWJV7QSAP.png?w=800&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847605&s=71aa353fd484873a7b62b12467712f57",
];

const Agency = () => {
  const controls = useAnimation();

  useEffect(() => {
    startAnimation();
  }, []);

  const startAnimation = () => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  return (
    <section className="w-full overflow-hidden py-10">
      <div className="grid grid-cols-12 items-center">
        
        {/* Left Text */}
        <div className="col-span-12 lg:col-span-2 px-6">
          <h2 className="text-sm font-medium text-black">
            The agency behind...
          </h2>
        </div>

        {/* Marquee Wrapper */}
        <div className="col-span-12 lg:col-span-10 relative overflow-hidden">

          {/* Left Blur */}
          <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#f5f5f5] to-transparent pointer-events-none" />

          {/* Right Blur */}
          <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#f5f5f5] to-transparent pointer-events-none" />

          {/* Marquee */}
          <motion.div
            className="flex items-center gap-20 w-max cursor-grab active:cursor-grabbing"
            animate={controls}
            drag="x"
            dragConstraints={{ left: -500, right: 0 }}
            dragElastic={0.05}
            whileTap={{ cursor: "grabbing" }}
            onDragEnd={startAnimation}
          >
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="w-[140px] h-[60px] flex-shrink-0 flex items-center justify-center"
              >
                <img
                  src={logo}
                  alt=""
                  draggable="false"
                  className="
                    max-w-full
                    max-h-full
                    object-contain
                    opacity-80
                    hover:opacity-100
                    transition-all
                    duration-300
                    pointer-events-none
                    select-none
                  "
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Agency;