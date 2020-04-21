import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { Grid, Button } from "@material-ui/core";
import { PlayArrow } from "@material-ui/icons";
import Topbar1 from "./Topbar1";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  section: {
    backgroundImage: "linear-gradient(#6E5BFF, #5727C2)",
    paddingTop: "32px !important",
    [theme.breakpoints.down("xs")]: {
      paddingTop: "5rem !important",
    },
  },
}));

const Intro1 = () => {
  const classes = useStyles();

  return (
    <section className={clsx("section", classes.section)} id="intro1">
      <Topbar1 />
      <div className="container text-white">
        <Grid container spacing={3} alignItems="center">
          <Grid item sm={6} xs={12}>
            <div className="max-w-400">
              <h1 className="font-normal mb-2 text-28 text-white">
                We Are a Full Service Business & Creative Agency
              </h1>
              <div className="pb-2px w-120 bg-default"></div>
            </div>
            <p className="my-6">
              We design beautiful experience, interfaces and brands that break
              the barriers of time and burn into the memories of individuals.
            </p>
            <div className="flex">
              <Button
                className="mr-4 border-radius-8 elevation-z3"
                variant="contained"
                color="primary"
              >
                Get Service
              </Button>
              <Button className="text-white" variant="text" color="primary">
                <PlayArrow fontSize="small" className="text-whtie mr-1" />
                Watch Video
              </Button>
            </div>
          </Grid>
          <Grid item sm={6} xs={12}>
            <div>
              <img
                className="w-full"
                src="/assets/images/business-1.svg"
                alt="business1"
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Intro1;
