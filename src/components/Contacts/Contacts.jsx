"use client";
import Title from "../global/Title";
import Background from "../global/Background";
import Form from "./Form";
import ContactsList from "./ContactsList/ContactsList";
import Container from "../global/Container";

const Contacts = () => {
  return (
    <section
      className="relative py-[56px] tablet:py-[64px] desktop:py-[80px]"
      id="contacts"
    >
      <Background name={"contacts"} />
      <Container>
        <Title
          first={"Contact"}
          second={"Us"}
          className={"mb-[36px] desktop:text-[98px] desktop:mb-[72px]"}
        />
        <div className="desktop:flex desktop:gap-[230px]">
          <ContactsList />
          <Form />
        </div>
      </Container>
    </section>
  );
};

export default Contacts;
