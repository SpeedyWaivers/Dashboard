import React from "react";

const dashboardRoutes = [
  {
    path: "/waivers",
    component: React.lazy(() => import("./Waivers")),
  },
  {
    path: "/setup",
    component: React.lazy(() => import("./Setup")),
  },
  {
    path: "/templates",
    component: React.lazy(() => import("./Templates")),
  },
  {
    path: "/register",
    component: React.lazy(() => import("./Register")),
  },
  {
    path: "/payments",
    component: React.lazy(() => import("./Payments")),
  },
];

export default dashboardRoutes;
