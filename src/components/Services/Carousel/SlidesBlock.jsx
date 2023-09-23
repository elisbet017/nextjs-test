import images from "./images";

const SlidesBlock = () => {
  return (
    <>
      {images.mobile.map((src) => (
        <div
          className="embla__slide w-[280px] h-[213px] tablet:w-[463px] tablet:h-[370px] desktop:w-[608px] desktop:h-[434px]"
          key={src}
        >
          <img
            src={src}
            className="object-cover mx-auto w-[280px] h-[213px] tablet:w-[463px] tablet:h-[370px] desktop:w-[608px] desktop:h-[434px] tablet:ml-0 cursor-pointer"
          />
        </div>
      ))}
    </>
  );
};

export default SlidesBlock;
