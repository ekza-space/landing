import React from "react";
import { isIOS, isSafari, isFirefox } from "react-device-detect";
import Subscribe from "./subscribe";

export default function Video() {
  return (
    <section className="relative">
      <div className="absolute inset-0 flex justify-center items-center">
        <Subscribe />
      </div>
      {isIOS || isSafari || isFirefox || true ? (
        <img className="mt-4" src="/img/moon.jpg" alt="Moon Image" />
      ) : (
        <video className="mt-4" autoPlay loop muted playsInline>
          <source src="/video/enter.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </section>
  );
}
