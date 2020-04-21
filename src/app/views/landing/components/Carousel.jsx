import "pure-react-carousel/dist/react-carousel.es.css";
import React from "react";
import { CarouselProvider, Slider, Slide, DotGroup } from "pure-react-carousel";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import PropTypes from "prop-types";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  bullet: {
    background: (props) => palette[props.bulletColor].main,
    transition: "transform 400ms cubic-bezier(0.17, 0.67, 0.83, 0.67)",
  },
  bulletActive: {
    transform: "scale(1.8)",
  },
}));

const Carousel = ({
  children,
  bulletColor = "primary", //secondary
  sliderClass = "mb-8",
  naturalSlideWidth = 8,
  naturalSlideHeight = 1,
  totalSlides,
  visibleSlides = 3,
  hasMasterSpinner = false,
  infinite = true,
  isPlaying = true,
  step = 1,
  interval = 5000,
  isIntrinsicHeight = true,
}) => {
  const classes = useStyles({ bulletColor });
  return (
    <CarouselProvider
      naturalSlideWidth={naturalSlideWidth}
      naturalSlideHeight={naturalSlideHeight}
      totalSlides={totalSlides}
      visibleSlides={visibleSlides}
      hasMasterSpinner={hasMasterSpinner}
      infinite={infinite}
      isPlaying={isPlaying}
      step={step}
      interval={interval}
      isIntrinsicHeight={isIntrinsicHeight}
    >
      <Slider className={sliderClass}>
        {React.Children.toArray(children).map((child, ind) => (
          <Slide key={ind} index={1}>
            {child}
          </Slide>
        ))}
      </Slider>
      <DotGroup
        renderDots={(props) => renderDots({ ...props, classes, step })}
      />
    </CarouselProvider>
  );
};

const renderDots = ({
  classes,
  step,
  currentSlide,
  visibleSlides,
  totalSlides,
  carouselStore,
}) => {
  const dots = [];
  const total = totalSlides - visibleSlides + 1;

  for (let i = 0; i < total; i += step) {
    dots.push(
      <div
        key={i}
        onClick={() =>
          carouselStore.setStoreState({
            currentSlide: i,
            isPlaying: false,
          })
        }
        className={clsx({
          "w-8 h-8 mx-1 rounded cursor-pointer": true,
          [classes.bullet]: true,
          [classes.bulletActive]: currentSlide === i,
        })}
      />
    );

    if (total - i - 1 < step && total - i - 1 !== 0) {
      dots.push(
        <div
          key={i + 1}
          onClick={() =>
            carouselStore.setStoreState({
              currentSlide: totalSlides - visibleSlides,
              isPlaying: false,
            })
          }
          className={clsx({
            "w-8 h-8 mx-1 rounded cursor-pointer": true,
            [classes.bullet]: true,
            [classes.bulletActive]:
              currentSlide === totalSlides - visibleSlides,
          })}
        />
      );
    }
  }
  return (
    <div className="flex flex-wrap justify-center items-center">{dots}</div>
  );
};

Carousel.propTypes = {
  totalSlides: PropTypes.number.isRequired,
};

export default Carousel;
