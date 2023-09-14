import Title from "../global/Title";
import Background from "../global/Background";
import Form from "./Form";
import ContactsList from "./ContactsList/ContactsList";

const Contacts = () => {
  return (
    <section
      className="relative py-[56px] tablet:py-[64px] desktop:py-[80px]"
      id="contacts"
    >
      <Background name={"contacts"} />
      <container className="w-[320px] px-[20px] block mx-auto tablet:w-[768px] tablet:px-[32px] tablet:mx-auto desktop:w-[1280px] desktop:px-[24px]">
        <Title
          first={"Contact"}
          second={"Us"}
          className={"mb-[36px] desktop:text-[98px] desktop:mb-[72px]"}
        />
        <div className="desktop:flex desktop:gap-[230px]">
          <ContactsList/>
          <Form/>
        </div>
      </container>
    </section>
  );
};

export default Contacts;
