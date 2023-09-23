"use client";
import PropTypes from "prop-types";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { flushSync } from "react-dom";
import images from "./images";
import { NavButton, usePrevNextButtons } from "./Buttons";

const TWEEN_FACTOR = 4.2;

const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max);

const Carousel = ({ options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [tweenValues, setTweenValues] = useState([]);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const onScroll = useCallback(() => {
    if (!emblaApi) return;

    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();

    const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
      let diffToTarget = scrollSnap - scrollProgress;

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.target();
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target);
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
          }
        });
      }
      const tweenValue = 1 - Math.abs(diffToTarget * TWEEN_FACTOR);
      return numberWithinRange(tweenValue, 0, 1);
    });
    setTweenValues(styles);
  }, [emblaApi, setTweenValues]);

  useEffect(() => {
    if (!emblaApi) return;

    onScroll();
    emblaApi.on("scroll", () => {
      flushSync(() => onScroll());
    });
    emblaApi.on("reInit", onScroll);
  }, [emblaApi, onScroll]);

  return (
    <div className="embla-gallery relative">
      <div className="embla__viewport-gallery" ref={emblaRef}>
        <div className="embla__container-gallery">
          {images.map(({ src, alt }, index) => (
            <div
              className="embla__slide-gallery"
              key={src}
              style={{
                ...(tweenValues.length && { opacity: tweenValues[index] }),
              }}
            >
              <img
                className="embla__slide__img-gallery cursor-pointer"
                src={src}
                alt={alt}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="embla__buttons flex gap-[459px] justify-center absolute bottom-[34px] left-[38px] desktop:gap-[651px] desktop:left-[205px] desktop:bottom-[19px]">
        <NavButton
          content={"Back"}
          onClick={onPrevButtonClick}
          disabled={prevBtnDisabled}
        />
        <NavButton
          content={"Next"}
          onClick={onNextButtonClick}
          disabled={nextBtnDisabled}
        />
      </div>
    </div>
  );
};

Carousel.propTypes = {
  options: PropTypes.object,
}

export default Carousel;
