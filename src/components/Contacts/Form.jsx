"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Error } from "../svgs";

const schema = yup
  .object({
    fullName: yup
      .string()
      .matches(/^[a-zA-Z ]*$/)
      .trim()
      .required(),
    email: yup.string().email().trim().required(),
    message: yup.string(),
  })
  .required();

const Form = () => {
  // const [fullName, setFullName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const emailError = classNames({
    "text-[#FF5757]": errors.email,
  });
  const nameError = classNames({
    "text-[#FF5757]": errors.fullName,
  });

  const onSubmit = async (data) => {
    // e.preventDefault;
    // console.log(e);
    // e.target.elements.fullName.value = "";
    // e.target.elements.email.value = "";
    // e.target.elements.message.value = "";
    // try {
    // if (fullName === "" && email === "" && message === "") {
    //   // errors.fullName = true;
    //   // errors.email = true;
    //   // await schema.validate({});
    //   return;
    // }
    // const form = {
    //   fullName,
    //   email,
    //   message,
    // };

    // console.log(form)

    await schema.validate(data);
    // console.log(qwe)
    // localStorage.setItem("data", JSON.stringify(form));
    // resetForm();
    // } catch (e) {
    // console.log(e)
    // const field = e.message.split(" ")[0];
    // errors[field] = true;
    // console.log(errors.fullName, "errors.fullName");
    // console.log(errors.email, "errors.email");
    // console.log(errors[field], `${errors[field]}`);
    // }
    // if (validatedForm) {
    // return;
    // }
  };

  // const resetForm = () => {
  //   setEmail("");
  //   setFullName("");
  //   setMessage("");
  // };

  return (
    <form onSubmit={handleSubmit(onSubmit)} id="contacts-form">
      <div className="mb-[16px] flex flex-col only-tab:flex-wrap only-tab:h-[250px] only-tab:gap-x-[20px] desktop:mb-[24px]">
        <div className="desktop:flex desktop:gap-[20px] desktop:mb-[68px]">
          <div className="mb-[24px] desktop:mb-0 flex flex-col gap-[4px] relative">
            <label
              className={`text-tw-tf font-extralight tracking-[2.4px] input-transition ${nameError}`}
              htmlFor="contacts-name"
            >
              Full name
            </label>
            <input
              {...register("fullName", {
                required: true,
                type: yup.string,
                trim: true,
                pattern: "/^[a-zA-Z ]*$/",
              })}
              type="text"
              name="fullName"
              className={`w-[100%] pl-[8px] career-input focus:outline-none text-[20px] tablet:text-[13px] leading-6 font-extralight placeholder:opacity-25 tablet:w-[222px] tablet:placeholder:text-[13px] tablet:placeholder:text-justify desktop:text-[20px] desktop:font-extralight desktop:leading-[24px] desktop:placeholder:text-[20px] desktop:placeholder:leading-[24px] input-transition desktop:w-[293px] desktop:h-[28px] ${nameError}`}
              placeholder="John Smith"
              id="contacts-name"
              form="contacts-form"
              // value={fullName}
              // onChange={(e) => {
              //   setFullName(e.target.value);
              // }}
            />
            {errors.fullName && (
              <p className="text-[#FF5757] text-tw-tf font-extralight tracking-[2.4px] text-end desktop:absolute desktop:bottom-[-24px] desktop:right-0">
                <Error className="absolute right-[137px] bottom-1" />
                "Incorrect name"
              </p>
            )}
          </div>
          <div className="mb-[24px] desktop:mb-0 flex flex-col gap-[4px] relative">
            <label
              className={`input-transition text-tw-tf font-extralight tracking-[2.4px] ${emailError}`}
              htmlFor="contacts-email"
            >
              E-mail
            </label>
            <input
              {...register("email", {
                type: yup.string.email,
                // type: email,
                trim: true,
                required: true,
              })}
              type="text"
              name="email"
              className={`w-[100%] pl-[8px] career-input input-transition focus:outline-none text-[20px] tablet:text-[13px] leading-6 font-extralight placeholder:opacity-25 tablet:w-[222px] tablet:placeholder:text-[13px] tablet:placeholder:text-justify desktop:text-[20px] desktop:font-extralight desktop:leading-[24px] desktop:placeholder:text-[20px] desktop:placeholder:leading-[24px] desktop:w-[293px] desktop:h-[28px] ${emailError}`}
              form="contacts-form"
              placeholder="johnsmith@email.com"
              id="contacts-email"
              // value={email}
              // onChange={(e) => {
              //   setEmail(e.target.value);
              // }}
            />
            {errors.email && (
              <p className="text-[#FF5757] text-tw-tf font-extralight tracking-[2.4px] text-end desktop:absolute desktop:bottom-[-24px] desktop:right-0 ">
                <Error className="absolute right-[119px] bottom-1" />
                "Invalid email"
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-[4px]">
          <label
            className="text-tw-tf font-extralight tracking-[2.4px]"
            htmlFor="contacts-message"
          >
            Message
          </label>
          <textarea
            name="message"
            className="w-[100%] h-[196px] px-[8px] py-[4px] career-input focus:outline-none text-[20px] tablet:text-[13px] leading-6 font-extralight placeholder:opacity-25 resize-none tablet:w-[463px] tablet:h-[221px] desktop:w-[607px] desktop:h-[174px]"
            id="contacts-message"
            form="contacts-form"
            // value={message}
            // onChange={(e) => {
            //   setMessage(e.target.value);
            // }}
          ></textarea>
        </div>
      </div>
      <button
        type="submit"
        className="text-th-n cursor-pointer font-medium uppercase ml-auto block"
      >
        Send
      </button>
    </form>
  );
};

export default Form;
