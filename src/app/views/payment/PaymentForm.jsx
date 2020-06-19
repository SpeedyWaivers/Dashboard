import React, { Fragment, useState } from "react";
import {
  injectStripe,
  CardNumberElement,
  CardCVCElement,
  CardExpiryElement,
} from "react-stripe-elements";
import { Button, LinearProgress, TextField } from "@material-ui/core";
import MatxLogo from "app/MatxLayout/SharedCompoents/MatxLogo";
import StripeInput from "./StripeInput";
import { useSelector, useDispatch } from "react-redux";
import { addCreditCard } from "app/redux/actions/PaymentActions";
import { useSnackbar } from "notistack";

const PaymentForm = ({ handleClose, stripe }) => {
  const [loading, setLoading] = useState(false);

  const { user = {} } = useSelector((state) => state);
  const { venue } = useSelector((state) => state.navigations);
  const dispatch = useDispatch();
  const { enqueueSnackbar: snackbar } = useSnackbar();

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);

    if (stripe) {
      let { source: token } = await stripe.createSource({
        type: "card",
        currency: "USD",
      });

      if (token && venue?.venueId) {
        try {
          await dispatch(addCreditCard(token, venue.venueId));
          snackbar("Card added successfully", { variant: "success" });
        } catch (error) {
          snackbar(error?.response?.title, { variant: "error" });
        }
      }
      setLoading(false);
      handleClose();
    } else {
      setLoading(false);
      handleClose();
      snackbar("Stripe.js hasn't loaded yet.", { variant: "error" });
    }
  };

  return (
    <Fragment>
      {loading && <LinearProgress color="primary" variant="indeterminate" />}
      <form onSubmit={handleSubmit} className="p-6">
        <div className="flex justify-center mb-8">
          <MatxLogo />
        </div>
        <TextField
          className="mb-6"
          label="Card Number"
          variant="outlined"
          size="small"
          placeholder=""
          fullWidth
          InputLabelProps={{ shrink: true }}
          InputProps={{
            inputComponent: StripeInput,
            inputProps: {
              component: CardNumberElement,
            },
          }}
        />

        <div className="flex mb-8">
          <TextField
            className="mr-4"
            label="Expiration Date"
            variant="outlined"
            size="small"
            fullWidth
            InputLabelProps={{ shrink: true }}
            InputProps={{
              inputComponent: StripeInput,
              inputProps: {
                component: CardExpiryElement,
              },
            }}
          />

          <TextField
            label="CVC"
            variant="outlined"
            size="small"
            fullWidth
            InputLabelProps={{ shrink: true }}
            InputProps={{
              inputComponent: StripeInput,
              inputProps: {
                component: CardCVCElement,
              },
            }}
          />
        </div>

        <div className="flex justify-center">
          <Button className="capitalize mr-4" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            className="capitalize"
            type="submit"
            variant="contained"
            color="primary"
          >
            Add Card
          </Button>
        </div>
      </form>
    </Fragment>
  );
};

export default injectStripe(PaymentForm);
