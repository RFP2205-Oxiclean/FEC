import React, { useEffect, useRef } from "react";

let usePrevious = function (newValue) {
  let ref = useRef();

  useEffect(() => {
    ref.current = newValue;
  }, [newValue]);

  return ref.current;
};
export default usePrevious;
