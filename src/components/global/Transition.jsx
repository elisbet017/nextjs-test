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

export default Transition;
