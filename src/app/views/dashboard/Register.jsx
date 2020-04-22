import React, { useState, useEffect } from "react";
import {
  Button,
  StepLabel,
  Step,
  Stepper,
  Grid,
  Card,
  TextField,
} from "@material-ui/core";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { Breadcrumb } from "matx";
import { useSelector, useDispatch } from "react-redux";
import { useSnackbar } from "notistack";
import { Formik } from "formik";
import * as yup from "yup";
import { getRegistrationSettings } from "app/redux/actions/RegistrationActions";
import SignatureCreator from "app/MatxLayout/SharedCompoents/SignatureCreator";
import { addCustomer } from "app/redux/actions/WaiverActions";

const Register = () => {
  const [schema, setSchema] = useState({});
  const [sign, setSign] = useState(null);
  const [steps, setSteps] = useState([]);
  const [filteredFields, setFilteredFields] = useState([]);
  const [fieldsPerScreen, setFieldsPerScreen] = useState(3);
  const [activeStep, setActiveStep] = useState(0);

  const dispatch = useDispatch();
  const { venue } = useSelector((state) => state.navigations);
  const { enqueueSnackbar: showSnackbar } = useSnackbar();
  const { registrationFields = [], settings = [] } = useSelector(
    (state) => state.setup
  );

  useEffect(() => {
    dispatch(getRegistrationSettings(venue.venueId));
  }, [dispatch, venue]);

  useEffect(() => {
    let shape = {};
    filteredFields
      .slice(activeStep * fieldsPerScreen, (activeStep + 1) * fieldsPerScreen)
      .map((item) => {
        if (item.required) shape[item.name] = yup.string().required("required");
      });
    let tempSchema = yup.object().shape({ ...shape });

    setSchema(tempSchema);
  }, [activeStep, filteredFields]);

  useEffect(() => {
    let fieldCount = settings.find((item) =>
      item.settingName.match("NumberOfFieldsPerScreen")
    );
    if (fieldCount) setFieldsPerScreen(fieldCount.settingValue);

    setFilteredFields(registrationFields.filter((item) => item.show));

    let totalStep = Math.ceil(filteredFields.length / fieldsPerScreen);
    setSteps(totalStep ? new Array(totalStep).fill(1) : []);
  }, [registrationFields, settings]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleFormSubmit = (values, { setSubmitting }) => {
    if (activeStep === steps.length && sign) {
      dispatch(
        addCustomer({ ...values, venueId: venue.venueId, signature: sign })
      ).then(() => {
        showSnackbar("Customer added successfully", {
          variant: "success",
        });
      });
    } else handleNext();
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
                <StepLabel></StepLabel>
              </Step>
            ))}
          </Stepper>
          <div>
            <Formik
              initialValues={{}}
              validationSchema={() => schema}
              onSubmit={handleFormSubmit}
              enableReinitialize={true}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                setFieldValue,
              }) => (
                <form onSubmit={handleSubmit}>
                  {activeStep === steps.length ? (
                    <div>
                      <div className="flex items-center mb-4">
                        <div className="relative">
                          <SignatureCreator sign={setSign} />
                        </div>
                      </div>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleReset}
                        className="mr-4"
                      >
                        Reset
                      </Button>
                      <Button variant="contained" color="primary" type="submit">
                        Submit
                      </Button>
                    </div>
                  ) : (
                    <div>
                      <Grid container spacing={3}>
                        {filteredFields
                          .slice(
                            activeStep * fieldsPerScreen,
                            (activeStep + 1) * fieldsPerScreen
                          )
                          .map((item, ind) => (
                            <Grid key={ind} item lg={6} md={6} sm={12} xs={12}>
                              {item.name.toLowerCase().match("date") ? (
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                  <DatePicker
                                    margin="none"
                                    id="mui-pickers-date"
                                    label={item.displayName}
                                    inputVariant="outlined"
                                    type="text"
                                    autoOk={true}
                                    fullWidth
                                    value={
                                      values[item.name] ||
                                      new Date().toISOString()
                                    }
                                    // readOnly={true}
                                    format="dd MMMM, yyyy"
                                    onBlur={handleBlur}
                                    onChange={(date) =>
                                      setFieldValue(
                                        item.name,
                                        date.toISOString()
                                      )
                                    }
                                    error={
                                      errors[item.name] &&
                                      Boolean(errors[item.name])
                                    }
                                    helperText={
                                      touched[item.name] && errors[item.name]
                                    }
                                  />
                                </MuiPickersUtilsProvider>
                              ) : (
                                <TextField
                                  variant="outlined"
                                  fullWidth
                                  label={item.displayName}
                                  name={item.name}
                                  onBlur={handleBlur}
                                  onChange={handleChange}
                                  error={
                                    errors[item.name] &&
                                    Boolean(errors[item.name])
                                  }
                                  helperText={
                                    touched[item.name] && errors[item.name]
                                  }
                                  value={values[item.name] || ""}
                                />
                              )}
                            </Grid>
                          ))}
                      </Grid>
                      <div className="pt-6">
                        <Button
                          type="button"
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
                          type="submit"
                        >
                          Next
                        </Button>
                      </div>
                    </div>
                  )}
                </form>
              )}
            </Formik>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Register;
