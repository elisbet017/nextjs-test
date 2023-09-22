"use client";
import React from "react";
import text from "./text.json";
import Transition from "../../global/Transition";

const Description = ({ selectedIndex }) => {
  return (
    <Transition index={selectedIndex}>
      <p className="text-ft-tw font-extralight only-mob:absolute bottom-[56px] max-w-[460px] pr-[20px] tablet:max-w-[100%] tablet:text-[13px] tablet:text-justify tablet:pr-0 tablet:absolute tablet:bottom-0 desktop:w-[293px] desktop:text-[18px] desktop:leading-[24px] desktop:bottom-0 desktop:right-0">
        {text[2][selectedIndex]}
      </p>
    </Transition>
  );
};

export default Description;
