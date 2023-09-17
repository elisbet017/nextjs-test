import Image from "next/image";
import Carousel from "./Carousel/Carousel";
import images from "./Carousel/images.json";
import Background from "../global/Background";
import Container from "../global/Container";
import Title from "../global/Title";

const Services = () => {
  return (
    <section className="py-[56px] relative">
      <Background name={"contacts"} />
      <Container>
        <Title first={"We"} second={"offer"} className={"mb-[24px]"}/>
        <Carousel loop>
          {images.mobile.map((src) => (
            <Image
              key={src}
              src={src}
              width={415}
              height={294}
              className="w-[415px] h-[294px]"
            />
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default Services;
