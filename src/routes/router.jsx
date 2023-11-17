import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Create from "../pages/Create";
import Farms from "../pages/Farms";
import PresaleAllDone from "../pages/PresaleAllDone";
import Presales from "../pages/Presales";
import PresaleStep1 from "../pages/PresaleStep1";
import PresaleStep2 from "../pages/PresaleStep2";
import PresaleStep3 from "../pages/PresaleStep3";
import PresaleStep4 from "../pages/PresaleStep4";
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
      { path: "/services", element: <Services /> },
      { path: "/farms", element: <Farms /> },
      { path: "/create", element: <Create /> },
      { path: "/presale-step-1", element: <PresaleStep1 /> },
      { path: "/presale-step-2", element: <PresaleStep2/> },
      { path: "/presale-step-3", element: <PresaleStep3/> },
      { path: "/presale-step-4", element: <PresaleStep4/> },
      { path: "/presale-all-done", element: <PresaleAllDone/> },
    ],
  },
  { path: "/tokenPages", element: <TokenPages /> },
]);
