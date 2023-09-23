const Title = ({ first, second, className }) => {
  return (
    <h2
      className={`text-ft-fs tracking-tighter uppercase  tablet:text-ss-n tablet:tracking-tightest desktop:tracking-[-3.92px] desktop:text-[98px] ${className}`}
    >
      <span className="font-thin">{first} </span>
      <span className="font-medium">{second}</span>
    </h2>
  );
};

export default Title;
