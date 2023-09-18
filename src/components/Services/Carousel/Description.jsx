import React from "react";
import text from "./text.json";

const Description = ({ selectedIndex }) => {
  return <p className="text-ft-tw font-extralight absolute bottom-[56px] max-w-[460px] pr-[20px]">{text[2][selectedIndex]}</p>;
};

export default Description;
