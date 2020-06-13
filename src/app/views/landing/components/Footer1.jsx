import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import TouchRipple from "@material-ui/core/ButtonBase";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  section: {
    backgroundImage: "linear-gradient(#6E5BFF, #5727C2)",
  },
  logo: {
    letterSpacing: 2.5,
  },
}));

const Footer1 = () => {
  const classes = useStyles();
  const productLink = ["feature", "use cases", "pricing"];
  const supportLink = ["Blog", "FAQ", "Support"];
  const companyLink = ["About", "Privacy Policy", "Terms of Service"];

  return (
    <section
      className={clsx("section text-white", classes.section)}
      id="footer1"
    >
      <div className="container">
        <Grid container spacing={3} alignItems="center">
          <Grid item md={2} xs={6}>
            <h5 className="mt-0 font-semibold text-white">PRODUCT</h5>
            {productLink.map((item, ind) => (
              <TouchRipple
                className="w-full justify-start text-left ml--4 border-radius-4"
                key={ind}
              >
                <span className="px-4 py-2 capitalize">{item}</span>
              </TouchRipple>
            ))}
          </Grid>
          <Grid item md={2} xs={6}>
            <h5 className="mt-0 font-semibold text-white">SUPPORT</h5>
            {supportLink.map((item, ind) => (
              <TouchRipple
                className="w-full justify-start text-left ml--4 border-radius-4"
                key={ind}
              >
                <span className="px-4 py-2 capitalize">{item}</span>
              </TouchRipple>
            ))}
          </Grid>
          <Grid item md={2} xs={6}>
            <h5 className="mt-0 font-semibold text-white">COMPANY</h5>
            {companyLink.map((item, ind) => (
              <TouchRipple
                className="w-full justify-start text-left ml--4 border-radius-4"
                key={ind}
              >
                <span className="px-4 py-2 capitalize">{item}</span>
              </TouchRipple>
            ))}
          </Grid>
          <Grid item md={2} xs={6}>
            <h5 className="mt-0 font-semibold text-white">FEATURES</h5>
            {productLink.map((item, ind) => (
              <TouchRipple
                className="w-full justify-start text-left ml--4 border-radius-4"
                key={ind}
              >
                <span className="px-4 py-2 capitalize">{item}</span>
              </TouchRipple>
            ))}
          </Grid>
          <Grid item md={2} xs={6}>
            <h5 className="mt-0 font-semibold text-white">FREQUENT LINKS</h5>
            {supportLink.map((item, ind) => (
              <TouchRipple
                className="w-full justify-start text-left ml--4 border-radius-4"
                key={ind}
              >
                <span className="px-4 py-2 capitalize">{item}</span>
              </TouchRipple>
            ))}
          </Grid>
          <Grid item md={2} xs={6}>
            <div className={clsx("m-0 font-semibold mb-1", classes.logo)}>
              Speedy Waivers
            </div>
            <div className="flex flex-wrap">
              <img
                src="/assets/images/facebook.svg"
                alt="facebook"
                className="w-full h-20 w-20 mr-3 cursor-pointer"
              />
              <img
                src="/assets/images/twitter.svg"
                alt="facebook"
                className="w-full h-20 w-20 mr-3 cursor-pointer"
              />
              <img
                src="/assets/images/youtube.svg"
                alt="facebook"
                className="w-full h-20 w-20 mr-3 cursor-pointer"
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Footer1;
