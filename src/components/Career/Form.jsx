const Form = () => {
  return (
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
  );
}

export default Form
