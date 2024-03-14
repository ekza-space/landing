import React, { useEffect } from "react";
import Footer from "../components/footer";
import { SayHi } from "../components/hi";
import Channels from "./channels";
import Intro from "./intro";
import Resources from "./resources";

export default function WotoriLandingPage() {
  useEffect(() => {
    document.title = "Wotori Studio";
  }, []);

  return (
    <div className="">
      <SayHi />
      <Intro />
      <Resources />
      <Channels />
      <Footer />
    </div>
  );
}
