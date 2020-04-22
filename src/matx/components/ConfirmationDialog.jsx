import React from "react";
import { Dialog, Button } from "@material-ui/core";

const ConfirmationDialog = ({
  open,
  onConfirmDialogClose,
  text,
  title = "confirm",
  onYesClick,
}) => {
  return (
    <Dialog
      maxWidth="xs"
      fullWidth={true}
      open={open}
      onClose={onConfirmDialogClose}
    >
      <div className="p-6 text-center">
        <h4 className="capitalize m-0 mb-2">{title}</h4>
        <p>{text}</p>
        <div className="pt-2">
          <Button
            onClick={onConfirmDialogClose}
            variant="outlined"
            color="secondary"
            className="px-6 rounded mr-6"
          >
            No
          </Button>
          <Button
            onClick={onYesClick}
            variant="contained"
            color="primary"
            className="px-6 rounded"
          >
            Yes
          </Button>
        </div>
      </div>
    </Dialog>
  );
};

export default ConfirmationDialog;
