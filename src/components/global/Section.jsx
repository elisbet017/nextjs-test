"use client";
import PropTypes from "prop-types";
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

Section.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
};

export default Section;
