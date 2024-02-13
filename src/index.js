import React from "react";
import ReactDOM from "react-dom/client";

import "normalize.css";
import "../src/styles/Common/index.css";

import { RouterInfo } from "./routes/router";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { CookiesProvider } from "react-cookie";
import { Provider } from "react-redux";

import store from "./store/store";
import Loading from "./components/Loading/Loading";

const queryClient = new QueryClient();
const RouterObject = createBrowserRouter(RouterInfo);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <CookiesProvider>
        <RouterProvider router={RouterObject} fallbackElement={<Loading />} />
      </CookiesProvider>
    </Provider>
  </QueryClientProvider>,
);
