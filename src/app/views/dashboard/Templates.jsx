import React, { useState, useEffect } from "react";
import { Breadcrumb, RichTextEditor, ConfirmationDialog } from "matx";
import { Card, TextField, MenuItem, Button, Dialog } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import {
  getWaiver,
  saveSettings,
  updateWaiver,
  deleteWaiver,
  addWaiver,
} from "app/redux/actions/WaiverActions";
import { useSnackbar } from "notistack";

const Templates = () => {
  const [open, setOpen] = useState(false);
  const [waiverDialogOpen, setWaiverDialogOpen] = useState(false);
  const [dialogWaiverName, setDialogWaiverName] = useState("");
  const [contentText, setContentText] = useState("");
  const [liveOption, setLiveOption] = useState("");
  const [waiver, setWaiver] = useState({});

  const dispatch = useDispatch();
  const { venue } = useSelector((state) => state.navigations);
  const { selectedWaiver, waivers } = useSelector((state) => state.waiver);
  const { enqueueSnackbar: showSnackbar } = useSnackbar();

  useEffect(() => {
    dispatch(getWaiver(venue.venueId));
  }, [venue]);

  useEffect(() => {
    setLiveOption(selectedWaiver.waiverId);
  }, [selectedWaiver]);

  useEffect(() => {
    setContentText(waiver.waiverText);
  }, [waiver]);

  const handleContentChange = (contentHtml) => {
    setContentText(contentHtml);
  };

  const handleLiveTemplateSave = () => {
    let selectedTemplate = waivers.find((item) => item.waiverId === liveOption);

    if (selectedTemplate)
      dispatch(
        saveSettings({
          venueId: selectedTemplate.venueId,
          settingValue: selectedTemplate.waiverId,
          settingName: "DefaultWaiverId",
        })
      ).then(() => {
        showSnackbar("Saved successfully", {
          variant: "success",
        });
        dispatch(getWaiver(venue.venueId));
      });
  };

  const handleWaiverSave = () => {
    if (waiver.waiverId)
      dispatch(updateWaiver({ ...waiver, waiverText: contentText })).then(
        () => {
          showSnackbar("Saved successfully", {
            variant: "success",
          });
        }
      );
  };

  const handleWaiverCreate = () => {
    if (dialogWaiverName) {
      dispatch(
        addWaiver({
          venueId: venue.venueId,
          name: dialogWaiverName,
          waiverText: "",
        })
      ).then(() => {
        setWaiverDialogOpen(false);
        showSnackbar("Saved successfully", {
          variant: "success",
        });
      });
    }
  };

  const handleWaiverDelete = () => {
    if (waiver.waiverId)
      dispatch(deleteWaiver(waiver.waiverId)).then(() => {
        setOpen(false);
        setWaiver({});
        setContentText("");
        showSnackbar("Deleted successfully", {
          variant: "success",
        });
      });
  };

  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb routeSegments={[{ name: "Template" }]} />
      </div>
      <Card className="px-6 py-4 flex flex-wrap items-center mb-6">
        <h5 className="my-0 mr-8">Live Template</h5>
        <TextField
          className="my-4 mr-4 min-w-200"
          label="Select Waiver"
          name="SelectedWaiver"
          variant="outlined"
          size="small"
          select
          value={liveOption || ""}
          onChange={({ target: { value } }) => setLiveOption(value)}
        >
          {/* <MenuItem value="" disabled>
            Select Option
          </MenuItem> */}
          {waivers.map((item, ind) => (
            <MenuItem key={item.waiverId} value={item.waiverId}>
              {item.name}
            </MenuItem>
          ))}
        </TextField>
        <Button
          variant="contained"
          color="primary"
          onClick={handleLiveTemplateSave}
        >
          Save
        </Button>
      </Card>

      <Card className="p-6">
      <h5 className="my-3 mr-8"> Templates</h5>
        <div className="flex items-center justify-between mb-6">
          <TextField
            className="min-w-200"
            label="Select Waiver"
            variant="outlined"
            size="small"
            select
            value={waiver.waiverId || ""}
            onChange={({ target: { value } }) =>
              setWaiver({ ...waivers.find((item) => item.waiverId === value) })
            }
          >
            {waivers.map((item, ind) => (
              <MenuItem key={item.waiverId} value={item.waiverId}>
                {item.name}
              </MenuItem>
            ))}
          </TextField>
          <Button
            onClick={() => setWaiverDialogOpen(true)}
            variant="contained"
            color="primary"
            className="px-6"
          >
            Create
          </Button>
        </div>

        <div className="mb-6">
        <h6 className="my-3 mr-8">If your waiver has multiple pages, then type ###PAGE### for each page break.</h6>
          <RichTextEditor
            content={contentText || ""}
            handleContentChange={handleContentChange}
            placeholder="insert text here..."
          />
        </div>
        <Button
          variant="contained"
          color="secondary"
          className="mr-4"
          onClick={() => setOpen(true)}
        >
          Delete
        </Button>
        <Button variant="contained" color="primary" onClick={handleWaiverSave}>
          Save
        </Button>
      </Card>

      <ConfirmationDialog
        open={open}
        onYesClick={handleWaiverDelete}
        onConfirmDialogClose={() => setOpen(false)}
        title="Confirm"
        text="Are you sure to delete ?"
      />

      <Dialog
        open={waiverDialogOpen}
        onClose={() => setWaiverDialogOpen(false)}
      >
        <div className="p-6">
          <TextField
            className="mb-4"
            variant="outlined"
            size="small"
            label="Waiver Name"
            fullWidth
            onChange={({ target: { value } }) => setDialogWaiverName(value)}
          />
          <Button
            onClick={() => setWaiverDialogOpen(false)}
            variant="outlined"
            color="secondary"
            className="px-6 mr-6"
          >
            Cancel
          </Button>
          <Button
            onClick={handleWaiverCreate}
            variant="contained"
            color="primary"
            className="px-6"
          >
            Create
          </Button>
        </div>
      </Dialog>
    </div>
  );
};

export default Templates;
