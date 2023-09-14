const Text = ({first, second, className}) => {
  return (
    <p
      className={`${className} text-ft-tw tablet:text-[16px] tablet:leading-[20px] desktop:text-[18px] desktop:leading-[24px]`}
    >
      <span>{first} </span>
      <span className="font-extralight">{second}</span>
    </p>
  );
};

export default Text;
