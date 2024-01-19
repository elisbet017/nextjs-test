import content from "./content.json";
import BoldText from "./BoldText";
import { FC } from "react";

const SocialsList: FC = () => {
  return (
    <ul>
      {content.map(({ name, link }) => (
        <li key={name}>
          <BoldText
            text={name}
            className="desktop:text-right active-link relative"
            link={link}
          />
        </li>
      ))}
    </ul>
  );
};

export default SocialsList;
