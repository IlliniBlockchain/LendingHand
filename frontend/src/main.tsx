import React from "react";
import ReactDOM from "react-dom/client";
import { Lend } from "./routes/lend/lend";
import { Borrow } from "./routes/borrow";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Detail } from "./routes/detail";
import { Profile } from "./routes/profile";
import { Root } from "./routes/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
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
        element: <Profile />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
