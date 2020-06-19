import React, { useState, useEffect } from "react";
import { Button, Dialog, CardActionArea } from "@material-ui/core";
import { Elements } from "react-stripe-elements";
import { Breadcrumb, SimpleCard } from "matx";
import { useDispatch, useSelector } from "react-redux";
import {
  getCreditCardByVenueId,
  deleteCreditCard,
} from "app/redux/actions/PaymentActions";
import PaymentForm from "./PaymentForm";
import { useSnackbar } from "notistack";

const Waivers = () => {
  const [open, setOpen] = useState(false);

  const { venue } = useSelector((state) => state.navigations);
  const { creditCardList = [] } = useSelector((state) => state.payment);
  const dispatch = useDispatch();
  const { enqueueSnackbar: snackbar } = useSnackbar();

  const toggleDialog = () => setOpen(!open);

  useEffect(() => {
    if (venue?.venueId) {
      dispatch(getCreditCardByVenueId(venue.venueId));
    }
  }, [venue]);

  const handleDelete = async (card) => {
    await dispatch(deleteCreditCard(card));
    snackbar("Deleted successfully", { variant: "success" });
  };

  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb routeSegments={[{ name: "Payments" }]} />
      </div>
      <SimpleCard title="Payments">
        {!!!creditCardList.length && (
          <Button variant="contained" color="primary" onClick={toggleDialog}>
            Add Credit Card
          </Button>
        )}
        {creditCardList.map((card, ind) => (
          <div className="flex items-center mt-4" key={card.creditCardId}>
            <div className="flex-grow mr-4 max-w-200">
              <img src="/assets/images/debit-card.png" alt="debit card" />
            </div>
            <Button
              variant="contained"
              className="bg-error"
              onClick={() => handleDelete(card)}
            >
              Delete
            </Button>
          </div>
        ))}
      </SimpleCard>

      <Dialog
        open={open}
        scroll="body"
        maxWidth="xs"
        fullWidth
        onClose={toggleDialog}
      >
        <Elements>
          <PaymentForm handleClose={toggleDialog} />
        </Elements>
      </Dialog>
    </div>
  );
};

export default Waivers;
