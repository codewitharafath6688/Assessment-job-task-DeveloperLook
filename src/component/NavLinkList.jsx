import React from "react";

const NavLinkList = ({ content1, content2 }) => {
  return (
    <li class="flex items-center justify-center ">
      <div className="group relative inline-block">
        <button className="x-8 py-3 rounded-xl cursor-pointer hover:bg-zinc-700 px-2 transition-colors">
          {content1}
        </button>
        <div className="relative  group w-fit">
          {/* Hover Card */}
          <div className="absolute top-full rounded-2xl text-black bg-white left-1/2 -translate-x-1/2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50">
            <div className="max-w-4xl rounded-[32px] whitespace-nowrap p-14 shadow-xl">
              <ul className="list-[square] font-bold">
                {content2}
              </ul>
            </div>

            {/* Arrow */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 border-8 border-transparent border-b-[#f3f3f3]"></div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default NavLinkList;
