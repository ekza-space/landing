import React, { useEffect } from "react";
import Footer from "../components/footer";
import { SayHi } from "../components/hi";
import Channels from "./channels";
import Intro from "./intro";
import Resources from "./resources";
import StarsAnimation from "../components/starts";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { useI18n } from "../i18n/i18n";

export default function WotoriLandingPage() {
  const { language, t } = useI18n();

  useEffect(() => {
    document.title = t("meta.wotoriTitle");
  }, [language, t]);

  return (
    <main>
      <SayHi />
      <StarsAnimation />
      <div className="fixed right-4 top-4 z-50">
        <LanguageSwitcher className="border-cyan-300/70 bg-black/80 text-white shadow-[0_12px_30px_rgba(0,0,0,0.45)] hover:bg-black" />
      </div>

      <Intro />
      <Resources />
      <Channels />

      <Footer position="relative" brand="Wotori Studio" />
    </main>
  );
}
