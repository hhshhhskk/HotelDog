import React from "react";
import ReactDOM from "react-dom/client";

import "normalize.css";
import "../src/styles/Common/index.css";

import { RouterInfo } from "./routes/router";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import Loading from "./components/Loading/Loading";

const queryClient = new QueryClient();
const RouterObject = createBrowserRouter(RouterInfo);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={RouterObject} fallbackElement={<Loading />} />
  </QueryClientProvider>,
);
