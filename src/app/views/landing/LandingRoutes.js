import React from "react";

const settings = {
  activeLayout: "layout1",
  layout1Settings: {
    topbar: {
      show: false,
    },
    leftSidebar: {
      show: false,
      mode: "close",
    },
  },
  layout2Settings: {
    mode: "full",
    topbar: {
      show: false,
    },
    navbar: { show: false },
  },
  secondarySidebar: { show: false },
  footer: { show: false },
};

const landingRoutes = [
  {
    path: "/",
    exact: true,
    component: React.lazy(() => import("./Landing1")),
    settings,
  },
];

export default landingRoutes;
