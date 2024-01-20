import React from "react";

const SevenDaysBlock = () => {
  return (
    <div className="only-mob:absolute only-mob:-top-[80px] only-mob:right-[20px] text-end flex w-[120px] tablet:w-[230px] flex-wrap tablet:relative tablet:mb-[56px] desktop:w-[304px] desktop:mb-[180px]">
      <p className="text-ts-n tablet:text-ss-n font-medium uppercase desktop:text-[98px]">
        7
      </p>
      <p className="text-ts-n tablet:text-ss-n font-thin tracking-[1.665px] only-tab:tracking-[6.78px] uppercase desktop:text-[98px]">
        Days
      </p>
      <p className="text-tw-n tablet:text-ft-n font-light tracking-l uppercase absolute -bottom-[3px] tablet:tracking-[25.9px] desktop:text-[16px] desktop:tracking-[36.48px] desktop:right-[-32px]">
        Journey
      </p>
    </div>
  );
};

export default SevenDaysBlock;
