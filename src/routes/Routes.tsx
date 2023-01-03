import { RouteObject, useRoutes } from "react-router-dom";

import {Error404, ForgotPassword, Home, Login, Signup } from "../pages";

export const dashboardRoutes: RouteObject[] = [
  { path: "login", element: <Login /> },
  { path: "/", element: <Home /> },
  { path: "forgot-password", element: < ForgotPassword/>},
  { path: "sign-up", element: <Signup/>},
  { path: "*", element: <Error404 /> },
];

export const Routes = () => {
  const routes = useRoutes(dashboardRoutes);

  return routes;
};
