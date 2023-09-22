import React from 'react'
import Background from '../global/Background';

const VisualSection = ({children}) => {
  return (
    <div className="only-mob:w-[100%] only-mob:h-[100%] py-[56px] relative">
      <Background name={"career"} />
      {children}
    </div>
  );
}

export default VisualSection
