import useEmblaCarousel from "embla-carousel-react";
import { Children, useEffect, useState } from "react";
import Nav from "./Nav";
import SubText from "./SubText";
import Options from "./Options";
import Description from "./Description";

const Carousel = ({ children, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    function selectHandler() {
      const index = emblaApi?.selectedScrollSnap();
      setSelectedIndex(index || 0);
    }

    emblaApi?.on("select", selectHandler);

    return () => {
      emblaApi?.off("select", selectHandler);
    };
  }, [emblaApi]);

  const length = Children.count(children);

  return (
    <>
      <Nav itemsLength={length} selectedIndex={selectedIndex} />
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">{children}</div>
      </div>
      <SubText selectedIndex={selectedIndex} />
      <Options selectedIndex={selectedIndex} />
      <Description selectedIndex={selectedIndex} />
    </>
  );
};

export default Carousel;
