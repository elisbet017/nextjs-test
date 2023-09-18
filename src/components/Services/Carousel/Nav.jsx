const Nav = ({ itemsLength, selectedIndex }) => {
  return (
    <div className="text-[43px] leading-[normal] font-thin text-white mb-[16px] text-end ">
      <span className="transition">0{selectedIndex + 1}/</span>
      <span className="text-[#ffffff33]">0{itemsLength}</span>
    </div>
  );
};

export default Nav;
