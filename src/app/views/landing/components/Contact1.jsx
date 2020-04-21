import React from "react";
import { Card, Grid, TextField, Button } from "@material-ui/core";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  section: {
    marginTop: "5rem",
  },
  card: {
    marginTop: "-10rem",
  },
}));

const Contact1 = () => {
  const classes = useStyles();

  return (
    <section
      className={clsx("section bg-light-secondary", classes.section)}
      id="contact1"
    >
      <div className="container">
        <Card
          elevation={6}
          className={clsx("text-center py-20 px-4", classes.card)}
        >
          <p className="mt-0 mb-2 text-primary">Contact us</p>
          <h1 className="mb-2 m-0 text-28">WRITE TO US NOW</h1>
          <div className="pb-2px w-72 bg-primary mx-auto mb-12"></div>

          <div className="max-w-600 mx-auto">
            <Grid container spacing={3} justify="center">
              <Grid item md={4} sm={6} xs={12}>
                <TextField label="Name" fullWidth />
              </Grid>
              <Grid item md={4} sm={6} xs={12}>
                <TextField label="Email" fullWidth />
              </Grid>
              <Grid item md={4} sm={6} xs={12}>
                <TextField label="Contact Number" fullWidth />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField label="Website (optional)" fullWidth />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField label="Question to Us" fullWidth />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Question to Us"
                  multiline
                  rows={8}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="text"
                  className="bg-primary px-8 text-white rounded"
                >
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact1;
