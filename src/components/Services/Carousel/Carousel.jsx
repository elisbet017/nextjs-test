import useEmblaCarousel from "embla-carousel-react";
import { Children, useEffect, useState } from "react";
import Nav from "./Nav";
import SubText from "./SubText";
import Options from "./Options";
import Description from "./Description";
import images from "./images";

const Carousel = ({ options, setActiveIndex }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    function selectHandler() {
      const index = emblaApi?.selectedScrollSnap();
      setSelectedIndex(index || 0);
      setActiveIndex(index || 0);
    }

    emblaApi?.on("select", selectHandler);

    return () => {
      emblaApi?.off("select", selectHandler);
    };
  }, [emblaApi]);

  const length = images.mobile.length;

  return (
    <>
      <Nav itemsLength={length} selectedIndex={selectedIndex} />
      <div className="embla mb-[12px]">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {images.mobile.map((src) => (
              <div className="embla__slide" key={src}>
                <img
                  src={src}
                  className="object-cover mx-auto w-[280px] h-[213px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <SubText selectedIndex={selectedIndex} />
      <Options selectedIndex={selectedIndex} />
      <Description selectedIndex={selectedIndex} />
    </>
  );
};

export default Carousel;
