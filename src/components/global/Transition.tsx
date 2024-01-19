"use client";
import { CSSTransition, SwitchTransition } from "react-transition-group";

interface ITransition {
  children: React.ReactNode;
  index: number;
}

const Transition = ({ children, index }: ITransition) => {
  return (
    <SwitchTransition mode="out-in">
      <CSSTransition
        classNames="fade"
        timeout={200}
        addEndListener={(node, done) => {
          node.addEventListener("transitionend", done, false);
        }}
        key={index}
      >
        {children}
      </CSSTransition>
    </SwitchTransition>
  );
};

export default Transition;
