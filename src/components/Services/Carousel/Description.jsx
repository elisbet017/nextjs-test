import React from "react";
import text from "./text.json";
import Transition from "../../global/Transition";

// font-size: 13px;
// font-style: normal;
// font-weight: 200;
// line-height: 20px;

const Description = ({ selectedIndex }) => {
  return (
    <Transition index={selectedIndex}>
      <p className="text-ft-tw font-extralight only-mob:absolute bottom-[56px] max-w-[460px] pr-[20px] tablet:max-w-[100%] tablet:text-[13px] tablet:text-justify tablet:pr-0 tablet:absolute tablet:bottom-0">
        {text[2][selectedIndex]}
      </p>
    </Transition>
  );
};

export default Description;
