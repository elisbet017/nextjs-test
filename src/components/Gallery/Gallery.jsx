"use client";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Background from "../global/Background";
import Title from "../global/Title";
import Container from "../global/Container";
import Carousel from "./Carousel/Carousel";

const Gallery = () => {
  return (
    <section
      className="py-[56px] relative tablet:py-[64px] desktop:py-[104px]"
      id="gallery"
    >
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
            <li>
              <Image
                src="/images/gallery/mob/1.jpg"
                width={280}
                height={187}
                alt="Mountains"
              />
            </li>
            <li>
              <Image
                src="/images/gallery/mob/2.jpg"
                width={280}
                height={187}
                alt="Lake"
              />
            </li>
            <li>
              <Image
                src="/images/gallery/mob/3.jpg"
                width={280}
                height={187}
                alt="Forest"
              />
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Gallery;
