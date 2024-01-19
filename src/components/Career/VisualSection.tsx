import React from "react";
import Background from "../global/Background";

interface IVisualSection {
  children: React.ReactNode;
}

const VisualSection = ({ children }: IVisualSection) => {
  return (
    <div className="only-mob:w-[100%] only-mob:h-[100%] py-[56px] relative">
      <Background name={"career"} />
      {children}
    </div>
  );
};

export default VisualSection;
