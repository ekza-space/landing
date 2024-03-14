import React, { useEffect } from "react";
import Footer from "../components/footer";
import { SayHi } from "../components/hi";
import ProjectCards from "../components/projectCards";
import Channels from "./channels";
import Intro from "./intro";

export default function WotoriLandingPage() {
  let stellarText =
    "Ekza Stellar main goal is to foster collaboration among users in the creation and development of assets used in gaming and virtual environments. Stellar aims to empower individual creators by providing a platform for them to collaborate, share ideas, and collectively contribute to the digital content creation landscape. This project shifting control from big studios back to individual creators, establishing a new era where creators are at the forefront, driving visual innovation all over the world.";

  let spaceText =
    "Ekza Space is a pioneering project that seeks to connect Ekza Stellar's cooperative concepts between users with the tangible aspects of the internet, including both 3-dimensional and 2-dimensional spaces. The main objective of Ekza Space is to establish a platform that enables artists and users to engage with generated content, thus comprehending the advantages derived from the utilization of these technologies.";
  useEffect(() => {
    document.title = "Wotori Studio";
  }, []);

  return (
    <div className="">
      <SayHi />
      {/* intro */}
      <Intro />

      {/* metarials */}
      <div
        className="lg:h-screen md:h-screen
                    overflow-auto overflow-visible
                    flex flex-col items-center justify-center
                    bg-gray-100"
      >
        <div className="max-sm:m-8 sm:m-8">
          <div className="max-w-3xl mb-24">
            <h2 className="text-3xl mb-2">Pitchdeck</h2>
            <p className="text-2xl mb-3">
              The presentation elucidates the platform we are developing and the
              tools we aim to introduce to the web3 ecosystem.
            </p>
            <a
              target="_blank"
              href="https://stellar.ekza.io/ppt/wotori-pitchdeck.pdf"
            >
              read more
            </a>
          </div>

          <div className="max-w-3xl mb-12 overflow-visible">
            <h2 className="text-3xl mb-2">Whitepaper</h2>
            <p className="text-2xl mb-3">
              Here we outline our inspiration, philosophy, and goals. This
              content is regularly updated to reflect our evolving vision and
              aspirations.
            </p>
            <a
              target="_blank"
              href="https://stellar.ekza.io/ppt/wotori-white-paper.pdf"
            >
              read more
            </a>
          </div>
        </div>

        <div className="max-w-6xl">
          <ProjectCards stellarText={stellarText} spaceText={spaceText} />
        </div>
      </div>

      {/* channels & token */}
      <Channels />

      <Footer />
    </div>
  );
}
