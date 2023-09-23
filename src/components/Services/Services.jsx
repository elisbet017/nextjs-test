"use client";
import { useState } from "react";
import Carousel from "./Carousel/Carousel";
import Background from "../global/Background";
import Container from "../global/Container";
import Title from "../global/Title";
import Section from "../global/Section";

const OPTIONS = { loop: true };

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Section id="services" className={"only-mob:h-[851px] desktop:py-[104px]"}>
      <Background
        name={"services"}
        className={`slide-${activeIndex + 1} transition`}
      />
      <Container className={"tablet:relative"}>
        <Title
          first={"We"}
          second={"offer"}
          className={"mb-[24px] tablet:mb-[36px] desktop:mb-[18px]"}
        />
        <Carousel
          options={OPTIONS}
          setActiveIndex={setActiveIndex}
          activeIndex={activeIndex}
        />
      </Container>
    </Section>
  );
};

export default Services;
