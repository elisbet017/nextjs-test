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

export default Background;
