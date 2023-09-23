import Link from "next/link";

const BoldText = ({ text, className, link = "/" }) => {
  return (
    <Link
      href={link}
      className={`text-ft-tf tablet:text-[16px] tablet:leading-6 desktop:text-[18px] text-white active-link ${className}`}
    >
      {text}
    </Link>
  );
};

export default BoldText;
