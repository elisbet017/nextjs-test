"use client";
import React from "react";

interface ISection {
  children: React.ReactNode,
  className: string,
  id: string,
}

const Section = ({ children, className, id }: ISection) => {
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
