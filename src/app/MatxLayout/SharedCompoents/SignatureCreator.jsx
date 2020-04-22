import React, { useState } from "react";
import SignaturePad from "react-signature-canvas";
import { Button } from "@material-ui/core";

const SignatureCreator = () => {
  const [trimmedDataURL, setTrimmedDateURL] = useState("");

  let signPad = {};

  const clear = () => {
    signPad.clear();
  };

  const trim = () => {
    console.log(signPad.toData());
    setTrimmedDateURL(signPad.getTrimmedCanvas().toDataURL("image/png"));
  };

  return (
    <div className="w-200 h-200">
      <div>
        <SignaturePad
          canvasProps={{ className: "bg-white" }}
          ref={(ref) => (signPad = ref)}
        />
      </div>
      <div>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          className="mr-4"
          onClick={clear}
        >
          Clear
        </Button>
        <Button variant="contained" color="primary" size="small" onClick={trim}>
          Trim
        </Button>
      </div>
    </div>
  );
};

export default SignatureCreator;
