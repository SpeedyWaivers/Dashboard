import React from "react";
import { Redirect } from "react-router-dom";

import dashboardRoutes from "./views/dashboard/DashboardRoutes";
import sessionRoutes from "./views/sessions/SessionRoutes";
import landingRoutes from "./views/landing/LandingRoutes";

const errorRoute = [
  {
    component: () => <Redirect to="/session/404" />,
  },
];

const routes = [
  ...sessionRoutes,
  ...landingRoutes,
  ...dashboardRoutes,
  ...errorRoute,
];

export default routes;
