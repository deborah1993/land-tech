"use client";

import { useTrackingCode } from "react-hubspot-tracking-code-hook";

const HubspotTrackingCode = () => {
  const { setPathPageView, setTrackPageView } = useTrackingCode();
  setPathPageView("/");
  setTrackPageView();

  return null;
};

export default HubspotTrackingCode;
