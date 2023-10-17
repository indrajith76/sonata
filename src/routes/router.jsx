import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Presales from "../pages/Presales";
import Tokens from "../pages/Tokens";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Presales /> },
      { path: "/tokens", element: <Tokens /> },
    ],
  },
]);
