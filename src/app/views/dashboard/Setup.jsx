import React from "react";
import { Button, Checkbox } from "@material-ui/core";
import { Breadcrumb, SimpleCard } from "matx";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getRegistrationSettings,
  setRegistrationFields,
} from "app/redux/actions/RegistrationActions";
import { useState } from "react";
import { useSnackbar } from "notistack";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  table: {
    width: "100%",
    borderCollapse: "collapse",
    borderSpacing: 0,
    overflow: "auto",
    "& .border": {
      border: `2px solid ${palette.primary.contrastText}`,
    },
  },
}));

const Setup = () => {
  const [settingsList, setSettingsList] = useState([]);

  const classes = useStyles();
  const dispatch = useDispatch();
  const { registrationFields } = useSelector((state) => state.setup);
  const { venue } = useSelector((state) => state.navigations);
  const { enqueueSnackbar: showSnackbar } = useSnackbar();

  useEffect(() => {
    dispatch(getRegistrationSettings(venue.venueId));
  }, [dispatch, venue]);

  useEffect(() => {
    setSettingsList(registrationFields);
  }, [registrationFields]);

  const handleChange = (index, fieldName, value) => {
    let temp = [...settingsList];
    temp[index][fieldName] = value;
    setSettingsList(temp);
  };

  const handleSave = () => {
    dispatch(setRegistrationFields(venue.venueId, settingsList)).then(() => {
      showSnackbar("Updated successfully", {
        variant: "success",
      });
    });
  };

  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb routeSegments={[{ name: "Setup" }]} />
      </div>
      <SimpleCard title="Setup">
      <h6 className="my-3 mr-8">These fields will determine what fields show up on the speedy waivers app.</h6>
        <div className="max-w-400">
          <table className={classes.table}>
            <thead>
              <tr>
                <td></td>
                <td className="text-center pb-2">Show</td>
                <td className="text-center pb-2">Required</td>
              </tr>
            </thead>
            <tbody>
              {settingsList.map((item, ind) => (
                <tr key={ind}>
                  <td className="border pl-4">{item.displayName}</td>
                  <td className="border text-center">
                    <Checkbox
                      checked={item.show}
                      onChange={({ target: { checked } }) =>
                        handleChange(ind, "show", checked)
                      }
                    />
                  </td>
                  <td className="border text-center">
                    <Checkbox
                      checked={item.required}
                      onChange={({ target: { checked } }) =>
                        handleChange(ind, "required", checked)
                      }
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex mt-4">
            <Button
              className="px-6"
              variant="contained"
              color="primary"
              onClick={handleSave}
            >
              Save
            </Button>
          </div>
        </div>
      </SimpleCard>
    </div>
  );
};

export default Setup;
