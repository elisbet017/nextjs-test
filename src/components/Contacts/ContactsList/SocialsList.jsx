import content from "./content.json";
import BoldText from "./BoldText";

const SocialsList = () => {
  return (
    <ul>
      {content.map(({ name, link }) => (
        <li key={name}>
          <BoldText
            text={name}
            className="desktop:text-right active-link relative"
            link={link}
            target="_blank"
            rel="noopener noreferrer nofollow"
          />
        </li>
      ))}
    </ul>
  );
};

export default SocialsList;
