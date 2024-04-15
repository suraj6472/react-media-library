import React from "react";
import ReactDOM from "react-dom/client";
import Index, { loader as mediaLoader } from "./pages/Index";
import AllFolder, { loader as directoryLoader } from "./pages/AllFolder";
import FolderMedia, { loader as folderMediaLoader } from "./pages/FolderMedia";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    loader: mediaLoader,
  },
  {
    path: "/all-folders",
    element: <AllFolder />,
    loader: directoryLoader,
  },
  {
    path: "/folder/:id",
    element: <FolderMedia />,
    loader: folderMediaLoader,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
