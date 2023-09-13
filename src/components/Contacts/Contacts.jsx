import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Error } from "../svgs";

const schema = yup
  .object({
    fullName: yup.string().required(),
    email: yup.string().required(),
  })
  .required();

const Contacts = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (e) => {
    e.preventDefault;
  };

  return (
    <section
      className="relative py-[56px] tablet:py-[64px] desktop:py-[80px]"
      id="contacts"
    >
      <div className="contacts-bg bg absolute"></div>
      <div className="contacts-full-gr absolute"></div>
      <div className="gradient absolute"></div>
      <div className="contacts-gradient-bottom absolute"></div>
      <container className="w-[320px] px-[20px] block mx-auto tablet:w-[768px] tablet:px-[32px] tablet:mx-auto desktop:w-[1280px] desktop:px-[24px]">
        <h2 className="text-ft-fs tracking-tighter uppercase mb-[36px] tablet:text-ss-n tablet:tracking-tightest desktop:text-[98px] desktop:tracking-[-3.92px] desktop:mb-[72px]">
          <span className="font-thin">Contact </span>
          <span className="font-medium">Us</span>
        </h2>
        <div className="desktop:flex desktop:gap-[230px]">
          <ul className="flex flex-col gap-6 only-tab:h-24 flex-wrap tablet:content-start only-tab:gap-x-[90px] only-tab:ml-[34px] only-tab:mb-[64px] desktop:block">
            <li className="flex gap-5 justify-end desktop:mb-[64px]">
              <div>
                <p className="text-right text-ft-tf tablet:text-[16px] tablet:leading-6 desktop:text-[18px]">
                  +38 (098) 12 34 567
                </p>
                <p className="text-right text-ft-tf tablet:text-[16px] tablet:leading-6 desktop:text-[18px]">
                  +38 (073) 12 34 567
                </p>
              </div>
              <p className="text-tw-tw font-extralight w-[81px] desktop:leading-6">
                Phone number
              </p>
            </li>
            <li className="flex gap-5 justify-end desktop:mb-[124px]">
              <p className="text-right text-ft-tf tablet:text-[16px] tablet:leading-6 desktop:text-[18px]">
                support@carptravel.com
              </p>
              <p className="text-tw-tw font-extralight w-[81px] desktop:leading-6">
                E-mail
              </p>
            </li>
            <li className="flex gap-5 justify-end desktop:flex-row-reverse desktop:justify-start desktop:mr-[28px]">
              <p className="text-tw-tw font-extralight desktop:leading-6 desktop:text-right">
                Follow us
              </p>
              <ul>
                <li>
                  <p className="text-ft-tf tablet:text-[16px] tablet:leading-6 desktop:text-[18px] desktop:text-right">
                    facebook
                  </p>
                </li>
                <li>
                  <p className="text-ft-tf tablet:text-[16px] tablet:leading-6 desktop:text-[18px] desktop:text-right">
                    instagram
                  </p>
                </li>
                <li>
                  <p className="text-ft-tf tablet:text-[16px] tablet:leading-6 desktop:text-[18px] desktop:text-right">
                    youtube
                  </p>
                </li>
                <li>
                  <p className="text-ft-tf tablet:text-[16px] tablet:leading-6 desktop:text-[18px] desktop:text-right">
                    tiktok
                  </p>
                </li>
              </ul>
            </li>
          </ul>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-[16px] flex flex-col only-tab:flex-wrap only-tab:h-[250px] only-tab:gap-x-[20px] desktop:mb-[24px]">
              <div className="desktop:flex desktop:gap-6 desktop:mb-[68px]">
                <div className="mb-[24px] desktop:mb-0 flex flex-col gap-[4px] relative">
                  <label
                    className="text-tw-tf font-extralight tracking-[2.4px]"
                    htmlFor="contacts-name"
                  >
                    Full name
                  </label>
                  <input
                    {...register("fullName")}
                    type="text"
                    className="w-[100%] pl-[8px] career-input focus:outline-none text-[20px] tablet:text-[13px] leading-6 font-extralight placeholder:opacity-25 tablet:w-[222px] tablet:placeholder:text-[13px] tablet:placeholder:text-justify"
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
                    className="text-tw-tf font-extralight tracking-[2.4px]"
                    htmlFor="contacts-email"
                  >
                    E-mail
                  </label>
                  <input
                    {...register("email")}
                    type="text"
                    className="w-[100%] pl-[8px] career-input focus:outline-none text-[20px] tablet:text-[13px] leading-6 font-extralight placeholder:opacity-25 tablet:w-[222px] tablet:placeholder:text-[13px] tablet:placeholder:text-justify"
                    placeholder="johnsmith@email.com"
                    id="contacts-email"
                  />
                  {errors.fullName && (
                    <p className="text-[#FF5757] text-tw-tf font-extralight tracking-[2.4px] text-end desktop:absolute desktop:bottom-[-24px] desktop:right-0">
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
        </div>
      </container>
    </section>
  );
};

export default Contacts;
