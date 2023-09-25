import React from "react";
import { isIOS, isSafari, isFirefox } from "react-device-detect";
import Subscribe from "./subscribe";

export default function Video() {
  return (
    <div className="h-screen">
      <section className="relative">
        <div className="absolute inset-0 flex justify-center customPadding">
          <Subscribe />
        </div>
        {isIOS || isSafari || isFirefox || true ? (
          <img className="mt-4 object-cover h-screen w-screen" src="/img/moon.jpg" alt="Moon Image" />
        ) : (
          <video className="mt-4" autoPlay loop muted playsInline>
            <source src="/video/enter.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </section>
    </div>
  );
}
