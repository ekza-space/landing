import { createRoot } from "react-dom/client";
import App from "./ekza/App";
import { I18nProvider } from "./i18n/i18n";

const root = createRoot(document.getElementById("app"));
root.render(
  <I18nProvider>
    <App />
  </I18nProvider>
);
