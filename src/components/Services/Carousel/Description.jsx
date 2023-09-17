import React from "react";
import text from "./text.json";

const Description = ({ selectedIndex }) => {
  return <p>{text[1][selectedIndex]}</p>;
};

export default Description;
