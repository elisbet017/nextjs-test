"use client";
import PropTypes from "prop-types";
import { CSSTransition, SwitchTransition } from "react-transition-group";

const Transition = ({ children, index }) => {
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

Transition.propTypes = {
  children: PropTypes.element.isRequired,
  index: PropTypes.number.isRequired,
};

export default Transition;
