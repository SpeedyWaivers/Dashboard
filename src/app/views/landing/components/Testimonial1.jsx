import React from "react";
import Carousel from "./Carousel";
import { Avatar, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Star from "@material-ui/icons/Star";
import clsx from "clsx";
import { useState } from "react";
import { useEffect } from "react";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  avatar: {
    border: "4px solid white",
    boxShadow: "0px 0px 50px 0px rgba(var(--secondary,1))"
  }
}));

const Testimonial1 = () => {
  const theme = useTheme();
  const classes = useStyles();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"));
  const [visibleSlides, setVisibleSlides] = useState(3);
  const reviewList = [
    {
      imgUrl: "/assets/images/faces/face-3.jpg",
      name: "Sarila Jin",
      designation: "CEO at Prime intl."
    },
    {
      imgUrl: "/assets/images/faces/face-4.jpg",
      name: "Feona Anne",
      designation: "Developer at Prime intl."
    },
    {
      imgUrl: "/assets/images/faces/face-5.jpg",
      name: "Lisa Amanda",
      designation: "Manager at Liseaum LLC"
    },
    {
      imgUrl: "/assets/images/faces/face-6.jpg",
      name: "John Smith",
      designation: "HR at Luawa intl."
    },
    {
      imgUrl: "/assets/images/faces/face-7.jpg",
      name: "Daniel Jcob",
      designation: "Designer at Prime intl."
    }
  ];

  useEffect(() => {
    if (isMobile) setVisibleSlides(1);
    else if (isTablet) setVisibleSlides(2);
    else setVisibleSlides(3);
  }, [isMobile, isTablet]);

  return (
    <section className="section bg-light-secondary" id="testimonial1">
      <div className="container relative">
        <div className="text-center">
          <h1 className="mb-2 m-0 text-28 inline-block">Clients Feedback</h1>
          <div className="pb-2px w-72 bg-primary mx-auto mb-12"></div>
        </div>
        <Carousel
          totalSlides={reviewList.length}
          visibleSlides={visibleSlides}
          sliderClass="mb-6"
        >
          {reviewList.map((item, ind) => (
            <div key={ind} className="max-w-600 mx-auto text-center px-4">
              <div className="inline-block rounded p-2px mb-4">
                <Avatar
                  className={clsx("h-132 w-132", classes.avatar)}
                  src={item.imgUrl}
                />
              </div>
              <h5 className="font-medium mt-0 mb-1">{item.name}</h5>
              <p className="mt-0 mb-6 text-muted text-small">
                {item.designation}
              </p>
              <div className="flex justify-center">
                {[1, 2, 3, 4, 5].map((item, ind) => (
                  <Star fontSize="small" color="secondary" key={ind}>
                    star
                  </Star>
                ))}
              </div>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita.
              </p>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonial1;
