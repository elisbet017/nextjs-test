"use client";
import PropTypes from "prop-types";
import React from "react";

const Container = ({ children, className }) => {
  return (
    <container
      className={`only-mob:max-w-[480px] px-[20px] block mx-auto tablet:w-[768px] tablet:px-[32px] desktop:w-[1280px] desktop:px-[24px] ${className}`}
    >
      {children}
    </container>
  );
};

Container.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
}

export default Container;
