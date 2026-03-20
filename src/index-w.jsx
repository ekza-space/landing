import { createRoot } from "react-dom/client";
import WotoriLandingPage from "./wotori/landing-page";
import { I18nProvider } from "./i18n/i18n";

const root = createRoot(document.getElementById("app"));
root.render(
  <I18nProvider>
    <WotoriLandingPage />
  </I18nProvider>
);
