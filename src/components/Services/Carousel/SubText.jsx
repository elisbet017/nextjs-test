import React from "react";
import text from "./text.json";

const SubText = ({ selectedIndex }) => {
  return <p>{text[0][selectedIndex]}</p>;
};

export default SubText;
