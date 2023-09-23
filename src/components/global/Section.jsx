"use client";

import React from "react";

const Section = ({ children, className, id }) => {
  return (
    <section
      id={id}
      className={`py-[56px] relative tablet:py-[64px] ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;
