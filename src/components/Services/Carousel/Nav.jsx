import PropTypes from "prop-types";
import Transition from "../../global/Transition";

const Nav = ({ itemsLength, selectedIndex }) => {
  return (
    <div className="text-[43px] leading-[normal] font-thin text-white mb-[16px] text-end tablet:absolute tablet:top-0 tablet:right-[68px] tablet:text-[67px] tablet:leading-[78px] desktop:text-[98px] desktop:leading-[normal] desktop:left-[648px]">
      <Transition index={selectedIndex}>
        <span className="transition">0{selectedIndex + 1}</span>
      </Transition>
      <span>/</span>
      <span className="text-[#ffffff33]">0{itemsLength}</span>
    </div>
  );
};

Nav.propTypes = {
  itemsLength: PropTypes.number.isRequired,
  selectedIndex: PropTypes.number.isRequired,
};

export default Nav;
