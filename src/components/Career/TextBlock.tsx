interface ITextBlock {
  children: React.ReactNode;
  className: string;
}

const TextBlock = ({ children, className }: ITextBlock) => {
  return (
    <p
      className={`text-ft-tw font-extralight w-[179px] ml-[auto] ${className}`}
    >
      {children}
    </p>
  );
};

export default TextBlock;
