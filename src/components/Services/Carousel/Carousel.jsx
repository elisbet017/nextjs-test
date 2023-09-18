import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect } from "react";
import Nav from "./Nav";
import SubText from "./SubText";
import Options from "./Options";
import Description from "./Description";
import images from "./images";

const Carousel = ({ options, setActiveIndex, activeIndex }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  useEffect(() => {
    function selectHandler() {
      const index = emblaApi?.selectedScrollSnap();
      setActiveIndex(index || 0);
    }

    emblaApi?.on("select", selectHandler);

    return () => {
      emblaApi?.off("select", selectHandler);
    };
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const length = images.mobile.length;

  return (
    <>
      <Nav itemsLength={length} selectedIndex={activeIndex} />
      <div className="embla mb-[12px]">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {images.mobile.map((src) => (
              <div
                className="embla__slide w-[280px] h-[213px] tablet:w-[463px] tablet:h-[370px]"
                key={src}
              >
                <img
                  src={src}
                  className="object-cover mx-auto w-[280px] h-[213px] tablet:w-[463px] tablet:h-[370px] tablet:ml-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="tablet:absolute tablet:right-0 top-[109px] tablet:w-[221px] tablet:flex tablet:flex-col tablet:h-[370px]">
        <SubText selectedIndex={activeIndex} />
        <Options
          selectedIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          scrollTo={scrollTo}
        />
        <Description selectedIndex={activeIndex} />
      </div>
    </>
  );
};

export default Carousel;