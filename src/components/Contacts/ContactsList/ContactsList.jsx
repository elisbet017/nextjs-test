import BoldText from "./BoldText";
import ThinText from "./ThinText";

const ContactsList = () => {
  return (
    <ul className="flex flex-col gap-6 only-tab:h-24 flex-wrap tablet:content-start only-tab:gap-x-[90px] only-tab:ml-[34px] only-tab:mb-[64px] desktop:block">
      <li className="flex gap-5 justify-end desktop:mb-[64px]">
        <div>
          <BoldText text={"+38 (098) 12 34 567"} />
        </div>
        <ThinText text={"Phone number"} className="w-[81px]" />
      </li>
      <li className="flex gap-5 justify-end desktop:mb-[124px]">
        <BoldText text={"support@carptravel.com"} />
        <ThinText text={"E-mail"} className="w-[81px]" />
      </li>
      <li className="flex gap-5 justify-end desktop:flex-row-reverse desktop:justify-start desktop:mr-[28px]">
        <ThinText text={"Follow us"} className="desktop:text-right" />
        <ul>
          <li>
            <BoldText text={"facebook"} className="desktop:text-right" />
          </li>
          <li>
            <BoldText text={"instagram"} className="desktop:text-right" />
          </li>
          <li>
            <BoldText text={"youtube"} className="desktop:text-right" />
          </li>
          <li>
            <BoldText text={"tiktok"} className="desktop:text-right" />
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default ContactsList;
