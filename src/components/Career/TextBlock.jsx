import React from 'react'

const TextBlock = ({children, className}) => {
  return (
    <p
      className={`text-ft-tw font-extralight w-[179px] ml-[auto] ${className}`}
    >
      {children}
    </p>
  );
}

export default TextBlock
