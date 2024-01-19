interface IThinText {
  text: string;
  className: string;
}

const ThinText = ({ text, className }: IThinText) => {
  return (
    <p className={`${className} text-tw-tw font-extralight desktop:leading-6`}>
      {text}
    </p>
  );
};

export default ThinText;
