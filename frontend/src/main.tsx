import React from "react";
import ReactDOM from "react-dom/client";
import { Lend } from "./components/lend";
import { Borrow } from "./routes/borrow";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Detail } from "./routes/detail";
import { Profile } from "./routes/profile";
import { Root } from "./routes/root";
import { DAppProvider } from "@usedapp/core";

const file = null;
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/lend",
        element: <Lend />,
      },
      {
        path: "/borrow",
        element: <Borrow />,
      },
      {
        path: "/post/:postId",
        element: <Detail />,
      },
      {
        path: "/profile",
        element: <Profile file = {file}/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DAppProvider config={{}}>
      <RouterProvider router={router} />
    </DAppProvider>
    {/* <App /> */}
  </React.StrictMode>
);
