import React from "react";
import content from "./content.json";

const Text = () => {
  return (
    <p className="mb-6 text-ft-tw font-thin text-justify tablet:text-[16px] tablet:leading-[20px] tablet:font-extralight tablet:w-[230px] tablet:mb-[28px] tablet:ml-auto desktop:w-[294px] desktop:text-[18px] desktop:leading-[24px]">
      {content[1]}
    </p>
  );
};

export default Text;
