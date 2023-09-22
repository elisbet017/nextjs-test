"use client";
import {
  FrameDeskL,
  FrameDeskR,
  FrameMobL,
  FrameMobR,
  FrameTabL,
  FrameTabR,
} from "../svgs";
import Background from "../global/Background";
import Container from "../global/Container";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section className="pt-[181px] tablet:pt-[124px] pb-14 tablet:pb-[64px] relative flex justify-center desktop:pt-[130px] desktop:pb-[104px]">
      <Background name={"hero"} />
      <Container className=" relative tablet:flex tablet:justify-center tablet:gap-[48px]">
        <div>
          <h1 className="only-mob:w-[280px] mb-6 tablet:mb-[68px] only-tab:w-[426px] flex flex-col tablet:tracking-tightest desktop:mb-[148px]">
            <span className="text-ft-fs tablet:text-ss-n font-medium tracking-tighter tablet:tracking-tightest desktop:text-[98px] desktop:tracking-[-3.92px]">
              Uncover
            </span>
            <span className="text-ft-fs tablet:text-ss-n font-thin tracking-tighter tablet:tracking-tightest desktop:text-[98px] desktop:tracking-[-3.92px]">
              Carpathian’s Secrets
            </span>
          </h1>
          <p className="mb-6 tablet:m-0 text-tn-st tablet:text-ft-st font-thin tablet:font-extralight only-mob:w-[157px] tracking-[0.05px] tablet:tracking-tig only-tab:w-[263px] desktop:text-[16px] desktop:leading-[24px] desktop:tracking-[1.44px]">
            Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
          </p>
        </div>
        <div className="flex flex-col items-end">
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
          <div>
            <p className="mb-6 text-ft-tw font-thin text-justify tablet:text-[16px] tablet:leading-[20px] tablet:font-extralight tablet:w-[230px] tablet:mb-[28px] tablet:ml-auto desktop:w-[294px] desktop:text-[18px] desktop:leading-[24px]">
              We offer you unforgettable trips to the most beautiful parts of
              the Carpathians. Enjoy stunning views, exciting expeditions, and
              the best service!
            </p>
            <Link 
              className="text-et-fe text-white font-bold text-center uppercase btn  relative flex only-mob:h-[53px] only-tab:h-[50px] py-[18px] tablet:py-[14px] px-[64px] justify-center items-center gap-[10px] tablet:leading-[normal] desktop:text-[32px] desktop:py-[16px]"
              to="contacts"
              smooth={true}
              offset={50}
              duration={1000}
            >
              Join now
              <div className="absolute w-full h-full flex justify-between">
                <FrameMobL className="tablet:hidden desktop:hidden" />
                <FrameMobR className="tablet:hidden desktop:hidden" />
                <FrameTabL className="hidden tablet:block desktop:hidden" />
                <FrameTabR className="hidden tablet:block desktop:hidden" />
                <FrameDeskL className="hidden tablet:hidden desktop:block" />
                <FrameDeskR className="hidden tablet:hidden desktop:block" />
              </div>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
