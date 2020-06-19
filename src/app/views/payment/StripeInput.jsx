import React, { useRef, useImperativeHandle } from "react";

const StripeInput = ({ component: Component, inputRef, ...props }) => {
  const elementRef = useRef();

  useImperativeHandle(inputRef, () => ({
    focus: () => elementRef.current.focus(),
  }));

  return (
    <Component
      style={{ base: { color: "rgba(255,255,255,0.87)" } }}
      update={() => {}}
      onReady={(element) => (elementRef.current = element)}
      {...props}
    />
  );
};

export default StripeInput;
