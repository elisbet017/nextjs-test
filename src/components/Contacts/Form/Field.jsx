import React from "react";
import { Error } from "../../svgs";

const Field = ({
  error,
  errorClass,
  id,
  content,
  type,
  name,
  settings,
  placeholder,
  handleChange,
  errorContent,
  position,
}) => {
  return (
    <div className="mb-[24px] desktop:mb-0 flex flex-col gap-[4px] relative cursor-pointer">
      <label
        className={`cursor-pointer text-tw-tf font-extralight tracking-[2.4px] input-transition ${errorClass}`}
        htmlFor={id}
      >
        {content}
      </label>
      <input
        {...settings}
        type={type}
        name={name}
        className={`outline-none cursor-pointer w-[100%] pl-[8px] career-input focus:outline-none text-[20px] tablet:text-[13px] leading-6 font-extralight placeholder:opacity-25 tablet:w-[222px] tablet:placeholder:text-[13px] tablet:placeholder:text-justify desktop:text-[20px] desktop:font-extralight desktop:leading-[24px] desktop:placeholder:text-[20px] desktop:placeholder:leading-[24px] input-transition desktop:w-[293px] desktop:h-[28px] ${errorClass}`}
        placeholder={placeholder}
        id={id}
        form="contacts-form"
        value={name}
        onChange={(e) => {
          handleChange(e.target.value);
        }}
      />
      {error && (
        <p className="text-[#FF5757] text-tw-tf font-extralight tracking-[2.4px] text-end desktop:absolute desktop:bottom-[-24px] desktop:right-0">
          <Error className={`absolute right-[${position}px] bottom-1`} />
          {errorContent}
        </p>
      )}
    </div>
  );
};

export default Field;
