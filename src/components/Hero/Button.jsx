import { Link } from "react-scroll";
import {
  FrameDeskL,
  FrameDeskR,
  FrameMobL,
  FrameMobR,
  FrameTabL,
  FrameTabR,
} from "../svgs";

const Button = () => {
  return (
    <Link
      href="/"
      className="text-et-fe text-white font-bold text-center uppercase btn relative flex only-mob:h-[53px] only-tab:h-[50px] py-[18px] tablet:py-[14px] px-[64px] justify-center items-center gap-[10px] tablet:leading-[normal] desktop:text-[32px] desktop:py-[16px] transition-active"
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
  );
};

export default Button;
