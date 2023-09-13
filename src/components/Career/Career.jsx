import Image from "next/image";

const Career = () => {
  return (
    <section className="" id="career">
      <div className="only-mob:w-[100%] only-mob:h-[100%]  py-[56px] relative">
        <div className="career-bg bg absolute"></div>
        <div className="career-gradient absolute"></div>
        <div className="career-full-gr absolute"></div>
        <div className="career-gradient-bottom absolute"></div>
        <container className="w-[320px] px-[20px] mx-auto block">
          <div className="only-mob:block">
            <h2 className="text-ft-fs tracking-tighter mb-[24px]">
              <span className="font-thin">Choose </span>
              <span className="font-medium">us</span>
            </h2>
            <p className="text-ft-tw font-extralight w-[179px] mb-[36px] ml-[auto]">
              Your chance to join our passionate team in Carpathian tourism.
              Seeking talented professionals to share our common mission.
            </p>
            <p className="text-th-n font-extralight uppercase mb-[36px] ml-[auto] mr-[39px] text-right">
              Why us ?
            </p>
            <ul>
              <li className="w-[181px] mb-[16px]">
                <h3 className="text-ft-tw text-right mb-[8px]">
                  Professional development
                </h3>
                <p className="text-tw-tw font-extralight text-right">
                  We offer growth opportunities and a creative environment to
                  nurture your talents.
                </p>
              </li>
              <li className="w-[181px] mb-[16px]">
                <h3 className="text-ft-tw text-right mb-[8px]">Teamwork</h3>
                <p className="text-tw-tw font-extralight text-right">
                  Join our close-knit family, where support and inspiration
                  abound.
                </p>
              </li>
              <li className="w-[181px] mb-[16px]">
                <h3 className="text-ft-tw text-right mb-[8px]">
                  Stimulating work environment
                </h3>
                <p className="text-tw-tw font-extralight text-right">
                  Flexibility and remote options for a comfortable experience.
                </p>
              </li>
              <li className="w-[181px] mb-[16px]">
                <h3 className="text-ft-tw text-right mb-[8px]">
                  Exciting challenges
                </h3>
                <p className="text-tw-tw font-extralight text-right">
                  Unleash your potential through unforgettable projects
                  showcasing Carpathian beauty.
                </p>
              </li>
            </ul>
          </div>
        </container>
      </div>
      <div className="only-mob:w-[100%] only-mob:h-[100%] py-[56px] relative">
        <div className="career-bg bg absolute"></div>
        <div className="gradient absolute"></div>
        <div className="career-full-gr absolute"></div>
        <div className="career-gradient-bottom absolute"></div>
        <container className="w-[320px] px-[20px] mx-auto block">
          <p className="text-ft-tw font-extralight w-[179px] ml-[auto] mb-[24px]">
            <span>Don't miss your opportunity!</span>
            <br />
            <span>Fill out the form right now and join our team!</span>
          </p>

          <form>
            <ul className="mb-[18px]">
              <li className="mb-[16px] flex flex-col gap-[4px]">
                <label
                  className="text-tw-tf font-extralight tracking-[2.4px]"
                  htmlFor="name"
                >
                  Full name
                </label>
                <input
                  type="text"
                  className="w-[100%] pl-[8px] career-input focus:outline-none text-[20px] leading-6 font-extralight placeholder:opacity-25"
                  placeholder="John Smith"
                  id="name"
                />
              </li>
              <li className="mb-[16px] flex flex-col gap-[4px]">
                <label
                  className="text-tw-tf font-extralight tracking-[2.4px]"
                  htmlFor="email"
                >
                  E-mail
                </label>
                <input
                  type="text"
                  className="w-[100%] pl-[8px] career-input focus:outline-none text-[20px] leading-6 font-extralight placeholder:opacity-25"
                  placeholder="johnsmith@email.com"
                  id="email"
                />
              </li>
              <li className="mb-[16px] flex flex-col gap-[4px]">
                <label
                  className="text-tw-tf font-extralight tracking-[2.4px]"
                  htmlFor="position"
                >
                  Position
                </label>
                <input
                  type="text"
                  className="w-[100%] pl-[8px] career-input focus:outline-none text-[20px] leading-6 font-extralight placeholder:opacity-25"
                  placeholder="Movie maker"
                  id="position"
                />
              </li>
              <li className="mb-[16px] flex flex-col gap-[4px]">
                <label
                  className="text-tw-tf font-extralight tracking-[2.4px]"
                  htmlFor="phone"
                >
                  Phone
                </label>
                <input
                  type="text"
                  className="w-[100%] pl-[8px] career-input focus:outline-none text-[20px] leading-6 font-extralight placeholder:opacity-25"
                  placeholder="+ 38 (097) 12 34 567"
                  id="phone"
                />
              </li>
              <li className="mb-[16px] flex flex-col gap-[4px]">
                <label
                  className="text-tw-tf font-extralight tracking-[2.4px]"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="resize-none w-[100%] h-[196px] px-[8px] py-[4px] career-input focus:outline-none text-[20px] leading-6 font-extralight placeholder:opacity-25"
                  name=""
                  id="message"
                ></textarea>
              </li>
            </ul>
            <div>
              <input
                type="checkbox"
                name="agreement"
                id="agreement"
                className="checkbox absolute w-[1px] h-[1px] m-[-1px] p-0 border-0 truncate"
              />
              <label
                htmlFor="agreement"
                className="text-tw-tf inline-flex font-extralight ckeck-label gap-[8px] mb-4"
              >
                <span className="w-[260px]">
                  I confirm my consent to the processing of personal data.
                </span>
              </label>
              <button
                type="submit"
                className="text-th-n cursor-pointer font-medium uppercase ml-auto block"
              >
                Send
              </button>
            </div>
          </form>
        </container>
      </div>
    </section>
  );
};

export default Career;
