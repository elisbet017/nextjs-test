import Link from "next/link";
import frameMobL from '@/public/frameMobL.png'
import frameMobR from '@/public/frameMobR.png'
import frameTabL from '@/public/frameTabL.png'
import frameTabR from '@/public/frameTabR.png'
import frameDeskL from '@/public/frameDeskL.png'
import frameDeskR from '@/public/frameDeskR.png'
import Image from "next/image";

const Button = () => {
  return (
    <Link
      href="#contacts"
      className="text-et-fe text-white font-bold text-center uppercase btn relative flex only-mob:h-[53px] only-tab:h-[50px] py-[18px] tablet:py-[14px] px-[64px] justify-center items-center gap-[10px] tablet:leading-[normal] desktop:text-[32px] desktop:py-[16px] transition-active"
    >
      Join now
      <div className="absolute w-full h-full flex justify-between">
        <Image src={frameMobL} alt="Button decorative frame" className="tablet:hidden desktop:hidden" />
        <Image src={frameMobR} alt="Button decorative frame" className="tablet:hidden desktop:hidden" />
        
        <Image src={frameTabL} alt="Button decorative frame" className="hidden tablet:block desktop:hidden"/>
        <Image src={frameTabR} alt="Button decorative frame" className="hidden tablet:block desktop:hidden" />
        
        <Image src={frameDeskL} alt="Button decorative frame" className="hidden tablet:hidden desktop:block"/>
        <Image src={frameDeskR} alt="Button decorative frame" className="hidden tablet:hidden desktop:block" />
      </div>
    </Link>
  );
};

export default Button;
