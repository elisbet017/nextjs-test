import PropTypes from "prop-types";

const ThinText = ({ text, className }) => {
  return (
    <p className={`${className} text-tw-tw font-extralight desktop:leading-6`}>
      {text}
    </p>
  );
};

ThinText.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default ThinText;
