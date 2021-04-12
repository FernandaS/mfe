import { mount } from "marketing/MarketingApp";
import React, { useRef, useEffect } from "react";

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    console.log("REF", ref);
    mount(ref.current);
  });

  return <div ref={ref} />;
};
