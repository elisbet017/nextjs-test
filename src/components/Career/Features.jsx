import content from "./content.json";

const Features = () => {
  return (
    <ul>
      {content.map(({ title, desc }) => (
        <li className="w-[181px] mb-[16px]" key={title}>
          <h3 className="text-ft-tw text-right mb-[8px]">{title}</h3>
          <p className="text-tw-tw font-extralight text-right">{desc}</p>
        </li>
      ))}
    </ul>
  );
};

export default Features;
