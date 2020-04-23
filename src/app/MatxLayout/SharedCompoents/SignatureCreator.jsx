import React, { useState } from "react";
import SignaturePad from "react-signature-canvas";
import { Button } from "@material-ui/core";

const SignatureCreator = ({ sign }) => {
  const [trimmedDataURL, setTrimmedDateURL] = useState("");

  let signPad = {};

  const clear = () => {
    signPad.clear();
    sign(null);
  };

  return (
    <div className="relative">
      <div>
        <SignaturePad
          canvasProps={{ width: 300, height: 180, className: "bg-white" }}
          onEnd={() => sign(signPad.toDataURL())}
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
      </div>
    </div>
  );
};

export default SignatureCreator;
