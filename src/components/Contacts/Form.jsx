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
  })
  .required();

const Form = () => {
  const {
    register,
    handleSubmit,
    // watch,
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

  const onSubmit = (e) => {
    e.preventDefault;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
              {...register("fullName")}
              type="text"
              className={`w-[100%] pl-[8px] career-input focus:outline-none text-[20px] tablet:text-[13px] leading-6 font-extralight placeholder:opacity-25 tablet:w-[222px] tablet:placeholder:text-[13px] tablet:placeholder:text-justify desktop:text-[20px] desktop:font-extralight desktop:leading-[24px] desktop:placeholder:text-[20px] desktop:placeholder:leading-[24px] input-transition desktop:w-[293px] desktop:h-[28px] ${nameError}`}
              placeholder="John Smith"
              id="contacts-name"
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
              {...register("email")}
              type="text"
              className={`w-[100%] pl-[8px] career-input input-transition focus:outline-none text-[20px] tablet:text-[13px] leading-6 font-extralight placeholder:opacity-25 tablet:w-[222px] tablet:placeholder:text-[13px] tablet:placeholder:text-justify desktop:text-[20px] desktop:font-extralight desktop:leading-[24px] desktop:placeholder:text-[20px] desktop:placeholder:leading-[24px] desktop:w-[293px] desktop:h-[28px] ${emailError}`}
              placeholder="johnsmith@email.com"
              id="contacts-email"
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
            className="w-[100%] h-[196px] px-[8px] py-[4px] career-input focus:outline-none text-[20px] tablet:text-[13px] leading-6 font-extralight placeholder:opacity-25 resize-none tablet:w-[463px] tablet:h-[221px] desktop:w-[607px] desktop:h-[174px]"
            id="contacts-message"
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
