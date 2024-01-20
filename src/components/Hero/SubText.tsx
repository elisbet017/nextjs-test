import React from "react";
import content from "./content.json";

const SubText = () => {
  return (
    <p className="mb-6 tablet:m-0 text-tn-st tablet:text-ft-st font-thin tablet:font-extralight only-mob:w-[157px] tracking-[0.05px] tablet:tracking-tig only-tab:w-[263px] desktop:text-[16px] desktop:leading-[24px] desktop:tracking-[1.44px]">
      {content[0]}
    </p>
  );
};

export default SubText;
