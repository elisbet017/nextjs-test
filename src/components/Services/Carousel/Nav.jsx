// import classNames from "classnames";
// text-align: justify;
// font-family: Inter;
// font-size: 43px;
// font-style: normal;
// font-weight: 100;

// color: #ffffff33;
// font-family: Inter;
// font-size: 43px;
// font-style: normal;
// font-weight: 100;
// line-height: normal;
const Nav = ({ itemsLength, selectedIndex }) => {
  return (
    <div className="text-[43px] leading-[normal] font-thin text-white mb-[16px]">
      <span>0{selectedIndex + 1}/</span>
      <span className="text-[#ffffff33]">0{itemsLength}</span>
    </div>
  );
};

export default Nav;
