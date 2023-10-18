import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Farms from "../pages/Farms";
import Presales from "../pages/Presales";
import Services from "../pages/Services";
import TokenPages from "../pages/TokenPages";
import Tokens from "../pages/Tokens";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Presales /> },
      { path: "/tokens", element: <Tokens /> },
      { path: "/Services", element: <Services /> },
      { path: "/Farms", element: <Farms /> },
    ],
  },
  { path: "/TokenPages", element: <TokenPages /> },
]);
