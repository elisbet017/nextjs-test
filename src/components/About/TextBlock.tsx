interface ITextBlock {
  text: string;
  className?: string;
}

const TextBlock = ({ text, className }: ITextBlock) => {
  return (
    <p
      className={`${className} text-ft-tw uppercase only-tab:text-[16px] only-tab:leading-[20px] desktop:text-[18px] desktop:leading-[24px]`}
    >
      {text}
    </p>
  );
};

export default TextBlock;
