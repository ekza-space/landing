import { useEffect, useState } from "react";
import Captcha from "./components/captcha";
import Frontend from "./components/frontend";

export default function App() {
  const [showCaptcha, setShowCaptcha] = useState(null);

  useEffect(() => {
    const isBot = localStorage.getItem("bot") === "false";
    setShowCaptcha(!isBot);
  }, []);

  if (showCaptcha === null) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {showCaptcha ? <Captcha setShowCaptcha={setShowCaptcha} /> : <Frontend />}
    </>
  );
}
