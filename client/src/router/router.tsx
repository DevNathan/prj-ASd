import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/layout/layout";
import IndexPage from "../pages/index/IndexPage";
import AskPage from "@/pages/ask/AskPage";
import ConfirmPage from "@/pages/ask/confirm/ConfirmPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <IndexPage />,
      },
      {
        path: "ask",
        element: <AskPage />,
      },
      {
        path: "ask/confirm",
        element: <ConfirmPage />,
      },
    ],
  },
]);

export default router;
