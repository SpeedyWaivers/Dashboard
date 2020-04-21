import React from "react";
import { Button, Checkbox } from "@material-ui/core";
import { Breadcrumb, SimpleCard } from "matx";
import { makeStyles } from "@material-ui/core/styles";

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
  const classes = useStyles();

  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb routeSegments={[{ name: "Setup" }]} />
      </div>
      <SimpleCard title="Setup">
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
              {["Address", "City", "State", "Mobile"].map((item, ind) => (
                <tr key={item}>
                  <td className="border pl-4">{item}</td>
                  <td className="border text-center">
                    <Checkbox />
                  </td>
                  <td className="border text-center">
                    <Checkbox />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-end mt-4">
            <Button className="px-6" variant="contained" color="primary">
              Save
            </Button>
          </div>
        </div>
      </SimpleCard>
    </div>
  );
};

export default Setup;
