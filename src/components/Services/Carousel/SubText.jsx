import text from "./text.json";
import Transition from "../../global/Transition";

const SubText = ({ selectedIndex }) => {
  return (
    <Transition index={selectedIndex}>
      <p className="text-right text-tw-tf font-extralight tracking-[2.4px] mb-[24px] selectedIndex tablet:order-[-1] tablet:text-tw-tf tablet:tracking-[2.4px] tablet:text-left">
        {text[0][selectedIndex]}
      </p>
    </Transition>
  );
};

export default SubText;

// бг градієнт
// таб і деск
