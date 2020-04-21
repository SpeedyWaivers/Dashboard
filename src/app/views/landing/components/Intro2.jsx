import React from "react";
import { Grid, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import clsx from "clsx";

const Intro2 = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <section className="section">
      <div className="container">
        <Grid container spacing={3}>
          <Grid item sm={6} xs={12}>
            <p className="mt-0 mb-2 text-primary">Who are we?</p>
            <h1 className="mb-2 m-0 text-28">WELCOME TO EZWaiver</h1>
            <div className="pb-2px w-48 bg-primary"></div>
            <p className="my-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              tincidunt quam quam.
            </p>
          </Grid>
          <Grid item sm={6} xs={12}>
            <p
              className={clsx({
                "mt-8": !isMobile,
              })}
            >
              Donec in scelerisque diam, in blandit libero. Proin nisl diam,
              ultrices id ornare eu, dictum vitae risus. Praesent porttitor
              ultrices id ornare eu, dictum vitae risus. Praesent porttitor
              velit sit amet sapien tincidunt varius. Ut tempor congue pulvinar.
              Aliquam non nibh felis.
              <br />
              <br />
              Nunc eget ultrices lorem, ac sagittis felis. Nulla facilisi.
              Quisque ex risus, dignissim eu mollis dictum, consectetur vitae
              ligula. Sed a felis id nibh ex.
            </p>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Intro2;
