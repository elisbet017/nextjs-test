import Carousel from "./Carousel/Carousel";
import Background from "../global/Background";
import Container from "../global/Container";
import Title from "../global/Title";
import { useState } from "react";

const OPTIONS = { loop: true };

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="services" className="py-[56px] relative h-[851px]">
      <Background
        name={"services"}
        className={`slide-${activeIndex + 1} transition`}
      />
      <Container>
        <Title first={"We"} second={"offer"} className={"mb-[24px]"} />
        <Carousel options={OPTIONS} setActiveIndex={setActiveIndex} />
      </Container>
    </section>
  );
};

export default Services;
