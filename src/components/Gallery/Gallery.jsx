import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Background from "../global/Background";
import Title from "../global/Title";

const settings = {
  infinite: true,
  speed: 500,
  loop: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "60px",
};

const Gallery = () => {
  return (
    <section className="py-[56px] relative tablet:py-[104px]" id="gallery">
      <Background name={"gallery"} />
      <container className="w-[320px] px-[20px] block mx-auto tablet:w-[768px] tablet:px-[32px] tablet:mx-auto desktop:w-[1280px] desktop:px-[24px]">
        <Title
          first="Our"
          second="Gallery"
          className={"mb-[24px] tablet:mb-[66px] tablet:text-center"}
        />
        <div>
          <div className="mobile:hidden tablet:block">
            <Slider {...settings} className="center">
              <div className="">
                <Image
                  src="/images/gallery/tab/1.jpeg"
                  width={415}
                  height={294}
                  className="w-[415px] h-[294px]"
                />
              </div>
              <div className="">
                <Image
                  src="/images/gallery/tab/2.jpeg"
                  width={415}
                  height={294}
                />
              </div>
              <div className="">
                <Image
                  src="/images/gallery/tab/3.jpeg"
                  width={415}
                  height={294}
                />
              </div>
            </Slider>
          </div>
          <ul className="only-mob:flex only-mob:flex-col only-mob:gap-6 tablet:hidden desktop:hidden">
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
      </container>
    </section>
  );
};

export default Gallery;
