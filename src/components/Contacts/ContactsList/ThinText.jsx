const ThinText = ({ text, className }) => {
  return (
    <p className={`${className} text-tw-tw font-extralight desktop:leading-6`}>
      {text}
    </p>
  );
};

export default ThinText;
