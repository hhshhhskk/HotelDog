import React from "react";
import ReactDOM from "react-dom/client";

import "normalize.css";
import "../src/styles/Common/index.css";

import { RouterInfo } from "./routes/router";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Loading from "./components/Loading/Loading";

const RouterObject = createBrowserRouter(RouterInfo);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={RouterObject} fallbackElement={<Loading />} />
);
