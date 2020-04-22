import React, { useState, useEffect } from "react";
import { Breadcrumb, RichTextEditor } from "matx";
import { Card, TextField, MenuItem, Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import {
  getWaiver,
  saveSettings,
  saveWaiver,
  deleteWaiver,
} from "app/redux/actions/WaiverActions";
import { useSnackbar } from "notistack";

const Templates = () => {
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
    setWaiver(selectedWaiver);
  }, [selectedWaiver]);

  const handleContentChange = (contentHtml) => {
    console.log(waiver);
    setWaiver({
      ...waiver,
      waiverText: contentHtml,
    });
  };

  const handleLiveTemplateSave = () => {
    let selectedTemplate = waivers.find((item) => item.waiverId === liveOption);
    if (selectedTemplate)
      dispatch(
        saveSettings({
          venueId: 1,
          settingValue: "14",
          settingName: "DefaultWaiverId",
          // venueId: selectedTemplate.venueId,
          // settingValue: selectedTemplate.waiverId.toString(),
          // settingName: selectedTemplate.name,
        })
      ).then(() => {
        showSnackbar("Saved successfully", {
          variant: "success",
        });
      });
  };

  const handleWaiverSave = () => {
    if (waiver.waiverId)
      dispatch(saveWaiver(waiver)).then(() => {
        showSnackbar("Saved successfully", {
          variant: "success",
        });
      });
  };

  const handleWaiverDelete = () => {
    if (waiver.waiverId)
      dispatch(deleteWaiver(waiver.waiverId)).then(() => {
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
          name="SelectedWaiver"
          variant="outlined"
          size="small"
          select
          value={liveOption || ""}
          onChange={({ target: { value } }) => setLiveOption(value)}
        >
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
        <TextField
          className="mb-6 min-w-200"
          name="SelectedWaiver"
          variant="outlined"
          size="small"
          select
          value={waiver.waiverId || ""}
          onChange={({ target: { value } }) =>
            setWaiver(waivers.find((item) => item.waiverId === value))
          }
        >
          {waivers.map((item, ind) => (
            <MenuItem key={item.waiverId} value={item.waiverId}>
              {item.name}
            </MenuItem>
          ))}
        </TextField>
        <div className="mb-6">
          <RichTextEditor
            content={waiver.waiverText || ""}
            handleContentChange={handleContentChange}
            placeholder="insert text here..."
          />
        </div>
        <Button
          variant="contained"
          color="secondary"
          className="mr-4"
          onClick={handleWaiverDelete}
        >
          Delete
        </Button>
        <Button variant="contained" color="primary" onClick={handleWaiverSave}>
          Save
        </Button>
      </Card>
    </div>
  );
};

export default Templates;
