import React from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import text from "./text.json";

const SubText = ({ selectedIndex }) => {
  return (
    <SwitchTransition mode="out-in">
      <CSSTransition
        classNames="fade"
        timeout={200}
        addEndListener={(node, done) => {
          node.addEventListener("transitionend", done, false);
        }}
        key={text[0][selectedIndex]}
      >
        <p className="text-right text-tw-tf font-extralight tracking-[2.4px] mb-[24px] selectedIndex">
          {text[0][selectedIndex]}
        </p>
      </CSSTransition>
    </SwitchTransition>
  );
};

export default SubText;
