import { useEffect, useState } from "react";
import { checkWords } from "./words";

export default function Captcha({ setShowCaptcha }) {
  const [selectedWord, setSelectedWord] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");

  useEffect(() => {
    handleWordSelection();
  }, []);

  const handleWordSelection = () => {
    const randomIndex = Math.floor(Math.random() * checkWords.length);
    setSelectedWord(checkWords[randomIndex]);
  };

  const handleCaptchaSubmit = () => {
    if (captchaInput.toLowerCase() === selectedWord.toLowerCase()) {
      localStorage.setItem("bot", "false");
      setShowCaptcha(false);
    } else {
      alert("Incorrect word. Please try again.");
    }
  };
  return (
    <div className="w-96 text-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pb-48">
      <div className="">
        <p>
          Hi, this is a very simple captcha. Enter or copy/paste the word:{" "}
          <p className="font-bold">{selectedWord}</p>
        </p>
        <input
          className="mt-4 block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          type="text"
          value={captchaInput}
          onChange={(e) => setCaptchaInput(e.target.value)}
        />
        <button className="mt-4 buttonCustom" onClick={handleCaptchaSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}
