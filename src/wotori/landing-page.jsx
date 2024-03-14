import React, { useEffect } from "react";
import Footer from "../components/footer";
import { SayHi } from "../components/hi";
import ProjectCards from "../components/projectCards";

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
      <div className="h-screen flex items-center justify-center">
        <div className="max-w-3xl ">
          <img className="w-64" src="/img/cat.png" alt="Cat" />
          <h1 className="text-4xl font-bold mb-2">Wotori Studio</h1>
          <h2 className="text-3xl mb-2">Decentralized Animation Studio</h2>
          <p className="text-2xl">
            Our objective is to establish a platform that enables users to
            collaborate globally, facilitating the creation of cross-cultural
            content that is both open and self-governed.
          </p>
        </div>
      </div>

      {/* metarials */}
      <div
        className="h-screen flex flex-col items-center justify-center
        bg-gray-100"
      >
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

        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl mb-2">Whitepaper</h2>
          <p className="text-2xl mb-3">
            Here we outline our inspiration, philosophy, and goals. This content
            is regularly updated to reflect our evolving vision and aspirations.
          </p>
          <a
            target="_blank"
            href="https://stellar.ekza.io/ppt/wotori-white-paper.pdf"
          >
            read more
          </a>
        </div>

        <div className="max-w-6xl">
          <ProjectCards stellarText={stellarText} spaceText={spaceText} />
        </div>
      </div>

      {/* channels & token */}
      <div className="h-screen flex items-center justify-center space-between">
        <div
          className="flex 
                      md:flex-row sm:flex-col
                      lg:space-x-64 md:space-x-14"
        >
          <div className="Channels">
            <p className="text-3xl mb-8">channels:</p>

            <div className="WotoriStudio mb-12 ">
              <p>Wotori Studio</p>
              <div className="">
                <a
                  target="_blank"
                  href="https://www.instagram.com/wotoristudio/"
                >
                  <h2 className="text-3xl">Instagram</h2>
                </a>
              </div>
              <div className="">
                <a target="_blank" href="https://twitter.com/wotorimovako">
                  <h2 className="text-3xl">Twitter</h2>
                </a>
              </div>
            </div>

            <div className="EkzaSpace">
              <p>Ekza Space</p>
              <div className="">
                <a target="_blank" href="https://www.instagram.com/ekza.space/">
                  <h2 className="text-3xl">Instagram</h2>
                </a>
              </div>
              <div className="">
                <a
                  target="_blank"
                  href="https://stellar.ekza.io/ppt/wotori-pitchdeck.pdf"
                >
                  <h2 className="text-3xl">Twitter</h2>
                </a>
              </div>

              <div className="">
                <a target="_blank" href="https://t.me/ekzaspace">
                  <h2 className="text-3xl">Telegram</h2>
                </a>
              </div>

              <div className="">
                <a target="_blank" href="https://discord.gg/yUWb4Q5b">
                  <h2 className="text-3xl">Discord</h2>
                </a>
              </div>
            </div>
          </div>

          <div className="Token">
            <p className="text-3xl mb-8">tokens:</p>
            {/* <p className="text-3xl mb-2">etherium: ERC20</p>
            <p className="text-3xl mb-8">archway: CW20</p> */}
            <p>Tokens are not yet minted.</p>
            <p>Etherium erc20 and archway cw20 should be here soon.</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
