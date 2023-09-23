import PropTypes from "prop-types";

const Background = ({ name, className }) => {
  return (
    <>
      <div className={`${name}-bg bg absolute ${className}`}></div>
      <div className={`${name}-full-gr absolute`}></div>
      <div className={`gradient absolute`}></div>
      <div className={`${name}-gradient-bottom absolute`}></div>
    </>
  );
};

Background.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Background;
