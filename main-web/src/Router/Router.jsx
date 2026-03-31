import { createBrowserRouter } from "react-router";
import ErrorPage from "../Components/ErrorPage";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import Directory from "../Components/Directory";

import CompanyDirectory from "../Components/CompanyDirectory";
import PlayerDirectory from "../Components/PlayerDirectory";
import OurVision from "../Pages/OurVision";



export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/directory",
        element: <Directory />,
      },
      {
        path: "/playerDirectory",
        element: <PlayerDirectory />,
      },
      {
        path: "/companyDirectory",
        element: <CompanyDirectory />,
      }
    ],
  },
]);
