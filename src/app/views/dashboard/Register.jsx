import React, { useState, useEffect } from "react";
import {
  TextField,
  Icon,
  Button,
  StepLabel,
  Step,
  Stepper,
  Grid,
  Card,
} from "@material-ui/core";
import { Breadcrumb } from "matx";
import { useSelector, useDispatch } from "react-redux";
import { useSnackbar } from "notistack";
import { getRegistrationSettings } from "app/redux/actions/RegistrationActions";
import SignatureCreator from "app/MatxLayout/SharedCompoents/SignatureCreator";

const Register = () => {
  const [settingsList, setSettingsList] = useState([]);
  const [activeStep, setActiveStep] = useState(0);
  const steps = ["First Name", "Last Name", "Address"];

  const dispatch = useDispatch();
  const { venue } = useSelector((state) => state.navigations);
  const { registrationFields, settings } = useSelector((state) => state.setup);
  const { enqueueSnackbar: showSnackbar } = useSnackbar();

  useEffect(() => {
    dispatch(getRegistrationSettings(venue.venueId));
  }, [dispatch, venue]);

  useEffect(() => {
    setSettingsList(registrationFields);
  }, [registrationFields]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb routeSegments={[{ name: "Register" }]} />
      </div>
      <Card className="px-6 py-5">
        <div>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <div>
            {activeStep === steps.length ? (
              <div>
                <div className="flex items-center mb-4">
                  <SignatureCreator />
                  <Icon>done</Icon> <span className="ml-2">Done</span>
                </div>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleReset}
                >
                  Reset
                </Button>
              </div>
            ) : (
              <div>
                {getStepContent(activeStep)}
                <div className="pt-6">
                  <Button
                    variant="contained"
                    color="secondary"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                  >
                    Back
                  </Button>
                  <Button
                    className="ml-4"
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

const getStepContent = (stepIndex) => {
  switch (stepIndex) {
    case 0:
      return (
        <form noValidate autoComplete="off">
          <Grid container spacing={3}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <TextField className="w-full" label="First Name" />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <TextField className="w-full" label="Middle Name" />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <TextField className="w-full" label="Last Name" />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <TextField className="w-full" label="Age" />
            </Grid>
          </Grid>
        </form>
      );
    case 1:
      return <TextField label="Company Name"></TextField>;
    case 2:
      return <TextField label="Address"></TextField>;
    default:
      return "";
  }
};

export default Register;
