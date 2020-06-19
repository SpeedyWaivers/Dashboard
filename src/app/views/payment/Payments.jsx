import React, { useState, useEffect } from "react";
import { Button, Dialog } from "@material-ui/core";
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

  console.log(creditCardList);

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
            <img
              className="h-36 bg-white"
              src={cardTypeList[card?.cardBrand]}
              alt="debit card"
            />
            <span className="mx-4">**** **** **** {card?.lastFour}</span>
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

const cardTypeList = {
  ["American Express"]: "/assets/images/payment-methods/amex.png",
  ["MasterCard"]: "/assets/images/payment-methods/master-card.png",
  ["Visa"]: "/assets/images/payment-methods/visa.png",
  ["UnionPay"]: "/assets/images/payment-methods/western-union.png",
};
export default Waivers;
