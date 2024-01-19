"use client";
import React from "react";

interface IContainer {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: IContainer) => {
  return (
    <div
      className={`only-mob:max-w-[480px] px-[20px] block mx-auto tablet:w-[768px] tablet:px-[32px] desktop:w-[1280px] desktop:px-[24px] ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
