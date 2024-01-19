interface IField {
  type: string;
  name: string;
  placeholder: string;
  label: string;
}

const Field = ({ type, name, placeholder, label }: IField) => {
  return (
    <li className="mb-[16px] flex flex-col gap-[4px]">
      <label
        className="text-tw-tf font-extralight tracking-[2.4px]"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        type={type}
        className="w-[100%] pl-[8px] career-input focus:outline-none text-[20px] leading-6 font-extralight placeholder:opacity-25"
        placeholder={placeholder}
        id={name}
      />
    </li>
  );
};

export default Field;
