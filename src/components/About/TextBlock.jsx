import PropTypes from "prop-types";

const TextBlock = ({ text, className }) => {
  return (
    <p
      className={`${className} text-ft-tw uppercase only-tab:text-[16px] only-tab:leading-[20px] desktop:text-[18px] desktop:leading-[24px]`}
    >
      {text}
    </p>
  );
};

TextBlock.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default TextBlock;
