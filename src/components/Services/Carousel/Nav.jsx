// import classNames from "classnames";

const Nav = ({ itemsLength, selectedIndex }) => {
  return (
    <div>
      <span>0{selectedIndex + 1}/</span>
      <span>0{itemsLength}</span>
    </div>
  );
};

export default Nav;
