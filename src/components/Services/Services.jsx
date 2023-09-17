import Image from "next/image";
import Carousel from "./Carousel/Carousel";

const Services = () => {
  const images = [
    "/images/gallery/tab/1.jpeg",
    "/images/gallery/tab/2.jpeg",
    "/images/gallery/tab/3.jpeg",
    "/images/gallery/tab/4.jpeg",
  ];
  return (
    <section>
      <container>
        <Carousel loop>
          {images.map((src) => (
            <Image
              key={src}
              src={src}
              width={415}
              height={294}
              className="w-[415px] h-[294px]"
            />
          ))}
        </Carousel>
      </container>
    </section>
  );
};

export default Services;
