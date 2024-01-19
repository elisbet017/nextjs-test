import Link from "next/link";

interface IBoldText {
  text: string;
  className?: string;
  link: string;
}

const BoldText = ({ text, className, link = "/" }: IBoldText) => {
  return (
    <Link
      href={link}
      className={`text-ft-tf tablet:text-[16px] tablet:leading-6 desktop:text-[18px] text-white active-link ${className}`}
      target="_blank"
      rel="noopener noreferrer nofollow"
    >
      {text}
    </Link>
  );
};

export default BoldText;
