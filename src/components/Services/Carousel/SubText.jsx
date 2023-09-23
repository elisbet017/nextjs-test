import PropTypes from "prop-types";
import classNames from "classnames";
import text from "./text.json";
import Transition from "../../global/Transition";

const SubText = ({ selectedIndex }) => {
  const classes = classNames(
    { "desktop:top-[0px]": selectedIndex === 0 },
    { "desktop:top-[43px]": selectedIndex === 1 },
    { "desktop:top-[91px]": selectedIndex === 2 },
    { "desktop:top-[163px]": selectedIndex === 3 },
    { "desktop:top-[211px]": selectedIndex === 4 }
  );

  return (
    <Transition index={selectedIndex}>
      <p
        className={`text-right text-tw-tf font-extralight tracking-[2.4px] mb-[24px] selectedIndex tablet:order-[-1] tablet:text-tw-tf tablet:tracking-[2.4px] tablet:text-left desktop:absolute desktop:left-[312px] desktop:mb-0 ${classes}`}
      >
        {text[0][selectedIndex]}
      </p>
    </Transition>
  );
};

SubText.ptopTypes = {
  selectedIndex: PropTypes.number.isRequired,
}

export default SubText;
