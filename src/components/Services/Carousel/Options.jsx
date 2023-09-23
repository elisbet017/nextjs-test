import React from "react";
import text from "./text.json";
import { Active } from "../../svgs";

const Options = ({ selectedIndex, setActiveIndex, scrollTo }) => {
  return (
    <ul className="flex flex-col gap-4 tablet:order-[-2] tablet:mb-[24px] desktop:gap-6 desktop:w-[260px]">
      {text[1].map((content, idx) => (
        <li
          className="flex gap-[8px] items-center"
          key={content}
          onClick={() => {
            scrollTo(idx);
            setActiveIndex(idx);
          }}
        >
          <Active
            className={idx === selectedIndex ? "w-[9px] h-[9px]" : "hidden"}
          />
          <p
            className={`text-tw-st uppercase option tablet:text-[22px] tablet:leading-[18px] desktop:text-[28px] desktop:leading-[24px] ${
              idx === selectedIndex
                ? "font-medium hover:font-medium"
                : "font-thin option"
            }`}
          >
            {content}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default Options;
