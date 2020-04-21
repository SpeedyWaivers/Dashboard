import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import PenIcon from "./icons/PenIcon";
import CameraIcon from "./icons/CameraIcon";
import VideoIcon from "./icons/VideoIcon";
import SettingsIcon from "./icons/SettingsIcon";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  rotatedRectangle: {
    height: 100,
    width: 100,
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:after": {
      content: '" "',
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      border: `2px solid ${palette.primary.main}`,
      borderRadius: 28,
      transform: "rotate(45deg)",
      zIndex: -1
    }
  }
}));

const Services1 = () => {
  const classes = useStyles();
  const serviceList = [
    {
      title: "WEB DESIGN",
      icon: PenIcon
    },
    {
      title: "PHOTOGRAPHY",
      icon: CameraIcon
    },
    {
      title: "MAKING VIDEOS",
      icon: VideoIcon
    },
    {
      title: "SUPPORT 24/7",
      icon: SettingsIcon
    }
  ];

  return (
    <section className="section bg-light-secondary" id="services1">
      <div className="container text-center">
        <p className="mt-0 mb-2 text-primary">What we offer?</p>
        <h1 className="mb-2 m-0 text-28">OUR SPECIALTIES</h1>
        <div className="pb-2px w-72 bg-primary mx-auto mb-16"></div>

        <Grid container spacing={3}>
          {serviceList.map((item, ind) => (
            <Grid key={ind} item md={3} sm={6} xs={12}>
              <div className="text-center">
                <div className="inline-block mb-8">
                  <div className={classes.rotatedRectangle}>
                    <item.icon className="text-48" color="primary" />
                  </div>
                </div>
                <h5 className="font-semibold mb-2">{item.title}</h5>
                <div className="pb-2px w-32 bg-primary mx-auto"></div>
                <p className="text-muted">
                  Donec in scelerisque diam, in blandit libero. Proin nisl diam,
                  ultrices id ornare eu, dictum vitae risus.
                </p>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default Services1;
