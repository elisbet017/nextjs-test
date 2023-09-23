"use client";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Background from "../global/Background";
import Title from "../global/Title";
import Container from "../global/Container";
import Carousel from "./Carousel/Carousel";
import images from "./images.json";
import Section from "../global/Section";

const Gallery = () => {
  return (
    <Section id="gallery" className={"desktop:py-[104px]"}>
      <Background name={"gallery"} />
      <Container>
        <Title
          first="Our"
          second="Gallery"
          className={
            "mb-[24px] tablet:mb-[66px] text-center desktop:text-start desktop:mb-[24px]"
          }
        />
        <div>
          <div className="mobile:hidden tablet:block">
            <Carousel options={{ loop: true }} />
          </div>
          <ul className="only-mob:flex only-mob:flex-col only-mob:gap-6  items-center tablet:hidden desktop:hidden">
            {images.map((alt, idx) => (
              <li key={alt}>
                <Image
                  src={`/images/gallery/mob/${idx + 1}.jpg`}
                  width={280}
                  height={187}
                  alt={alt}
                />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
};

export default Gallery;
