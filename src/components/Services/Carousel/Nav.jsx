import Transition from "../../global/Transition";

const Nav = ({ itemsLength, selectedIndex }) => {
  return (
    <div className="text-[43px] leading-[normal] font-thin text-white mb-[16px] text-end tablet:absolute tablet:top-0 right-[32px] tablet:text-[67px] tablet:leading-[78px]">
      <Transition index={selectedIndex}>
        <span className="transition">0{selectedIndex + 1}</span>
      </Transition>
      <span>/</span>
      <span className="text-[#ffffff33]">0{itemsLength}</span>
    </div>
  );
};

export default Nav;
