import { useEffect, useState } from "react";
import Captcha from "./components/captcha";
import Frontend from "./components/frontend";

export default function App() {
  const [showCaptcha, setShowCaptcha] = useState(null);

  useEffect(() => {
    const isBot = localStorage.getItem("bot") === "false";
    setShowCaptcha(!isBot);
  }, []);

  return (
    <>
      {showCaptcha ? <Captcha setShowCaptcha={setShowCaptcha} /> : <Frontend />}
    </>
  );
}
