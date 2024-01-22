import Image from "next/image";

interface IBackground {
  name: string;
  className?: string;
}

const Background = ({ name, className }: IBackground) => {
  return (
    <>
      <div className={`${name}-bg bg absolute ${className}`}></div>
      {/* <Image alt="mountains" src={}/> */}
      <div className={`${name}-full-gr absolute`}></div>
      <div className={`gradient absolute`}></div>
      <div className={`${name}-gradient-bottom absolute`}></div>
    </>
  );
};

export default Background;
