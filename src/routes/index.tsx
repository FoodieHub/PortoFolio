/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from "react-router-dom";
import { HomeScreen } from "../screens";

export const ROUTES = {
  home: '/'
}

export const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <HomeScreen />,
  },
]);