import React from 'react'
import text from './text.json'
import { Active } from "../../svgs";

const Options = ({ selectedIndex }) => {
  return (
    <ul className="flex flex-col gap-4">
      {text[1].map((content, idx) => (
        <li className="flex gap-[8px] items-center" key={content}>
          <Active
            className={idx === selectedIndex ? "w-[9px] h-[9px]" : "hidden"}
          />
          <p
            className={`text-tw-st uppercase transition hover:font-extralight hover:cursor-pointer ${
              idx === selectedIndex
                ? "font-medium hover:font-medium"
                : " font-thin"
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
