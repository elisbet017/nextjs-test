import Link from "next/link";
import content from "./content.json";
import BoldText from "./BoldText";

const SocialsList = () => {
  return (
    <ul>
      {content.map(({ name, link }) => (
        <li key={link}>
          <Link href={link}>
            <BoldText text={name} className="desktop:text-right" />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialsList;
