import Button1 from "./Button1";
import Button2 from "./Button2";

const Banner = () => {
  return (
    <div className="w-full max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12">
      <div className="lg:max-w-[45%]">
        <h2 className="text-base sm:text-lg md:text-[20px] lg:text-[23px] font-semibold leading-snug">
          A global team of search-first content marketers engineering semantic
          relevancy &amp; category signals for both the internet and people
        </h2>
      </div>
      <div className="lg:max-w-[55%]">
        <h2 className="text-[38px] sm:text-[48px] md:text-[56px] lg:text-[60px] font-bold leading-tight">
          Driving Demand &amp;
          <div className="flex justify-start items-center gap-3 sm:gap-5 flex-wrap">
            Discovery{" "}
            <div>
              <img
                className="w-[40%] min-w-[80px] max-w-[160px] rounded-2xl"
                src="https://rise-atseven.transforms.svdcdn.com/production/images/b2087e0cd3f699d3efc76f809ec72a85a6ab378e-1080x1350.jpg?w=200&h=200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847630&s=a668733e8ced1733809794da9c15f062"
              />
            </div>
          </div>
        </h2>
        <div className="flex mt-5 gap-3 sm:gap-5 flex-wrap">
          <Button1 content={"Our story"} />
          <Button2 content={"Our services"} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
