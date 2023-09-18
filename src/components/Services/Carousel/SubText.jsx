import text from "./text.json";
import Transition from "../../global/Transition";

const SubText = ({ selectedIndex }) => {
  const currentClass = () => {
    switch (selectedIndex) {
      case 0:
        return "0";
      case 1:
        return "43";
      case 2:
        return "86";
      case 3:
        return "158";
      case 4:
        return "206";
      default:
        return;
    }
  }

  return (
    <Transition index={selectedIndex}>
      <p
        className={`text-right text-tw-tf font-extralight tracking-[2.4px] mb-[24px] selectedIndex tablet:order-[-1] tablet:text-tw-tf tablet:tracking-[2.4px] tablet:text-left desktop:absolute desktop:left-[312px] desktop:mb-0 desktop:top-[${currentClass()}px] desktop:top-[43px]`}
        // classNames={}
      >
        {text[0][selectedIndex]}
      </p>
    </Transition>
  );
};

export default SubText;

