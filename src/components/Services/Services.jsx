"use client";
import { useState } from "react";
import Carousel from "./Carousel/Carousel";
import Background from "../global/Background";
import Container from "../global/Container";
import Title from "../global/Title";

const OPTIONS = { loop: true };

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="services"
      className="py-[56px] relative only-mob:h-[851px] tablet:py-[64px] desktop:py-[104px]"
    >
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
    </section>
  );
};

export default Services;
