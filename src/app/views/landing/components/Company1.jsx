import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  card: {
    padding: "1rem",
    margin: "0px 1rem 1rem",
    borderRadius: 8,
    border: "1px solid rgba(var(--secondary),0.35)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    "&:hover": {
      boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)"
    }
  }
}));

const Company1 = () => {
  const classes = useStyles();

  return (
    <section className="section">
      <div className="container">
        <div className="flex flex-wrap justify-center">
          <div className={classes.card}>
            <img
              src="/assets/images/woocommerce.svg"
              alt="woocommerce"
              className="w-full"
            />
          </div>
          <div className={classes.card}>
            <img
              src="/assets/images/tumblr.svg"
              alt="tumblr"
              className="w-full"
            />
          </div>
          <div className={classes.card}>
            <img
              src="/assets/images/shopify.svg"
              alt="shopify"
              className="w-full"
            />
          </div>
          <div className={classes.card}>
            <img
              src="/assets/images/wordpress.svg"
              alt="wordpress"
              className="w-full"
            />
          </div>
          <div className={classes.card}>
            <img
              src="/assets/images/envato.svg"
              alt="envato"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Company1;
