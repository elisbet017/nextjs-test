const BoldText = ({ text, className }) => {
  return (
    <p className={`text-ft-tf tablet:text-[16px] tablet:leading-6 desktop:text-[18px] ${className}`}>
      {text}
    </p>
  );
};

export default BoldText;
