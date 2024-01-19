"use client";
import Title from "../global/Title";
import Background from "../global/Background";
import Form from "./Form/Form";
import ContactsList from "./ContactsList/ContactsList";
import Container from "../global/Container";
import Section from "../global/Section";

const Contacts = () => {
  return (
    <Section id="contacts" className={"desktop:py-[80px]"}>
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
    </Section>
  );
};

export default Contacts;
