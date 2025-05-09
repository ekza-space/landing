import { useEffect, useState } from "react";
import EkzaLandingPage from "./landing-page";
import Captcha from "../components/captcha";

export default function App() {
  const [showCaptcha, setShowCaptcha] = useState(false);

  // TODO: make captcha more inteligence for more botlike users
  // useEffect(() => {
  //   const isBot = localStorage.getItem("bot") === "false";
  //   setShowCaptcha(!isBot);
  // }, []);

  // if (showCaptcha === null) {
  //   return <div>Loading...</div>;
  // }

  return (
    <>
      {showCaptcha ? (
        <Captcha setShowCaptcha={setShowCaptcha} />
      ) : (
        <EkzaLandingPage />
      )}
    </>
  );
}
