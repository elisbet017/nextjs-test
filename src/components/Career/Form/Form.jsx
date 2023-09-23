"use client";
import content from "./content.json";

const Form = () => {
  return (
    <form>
      <ul className="mb-[18px]">
        {content.map(({ type, name, placeholder, label }) => (
          <Field
            type={type}
            key={name}
            placeholder={placeholder}
            name={name}
            label={label}
          />
        ))}

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
};

export default Form;
