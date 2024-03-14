import { createRoot } from "react-dom/client";
import WotoriLandingPage from "./wotori/landing-page";

const root = createRoot(document.getElementById("app"));
root.render(
  <>
    <WotoriLandingPage />
  </>
);
