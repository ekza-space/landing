import { SayHi } from "./components/hi";
import { Project } from "./components/project";
import Video from "./components/video";

export default function App() {
  let stellarText =
    "Ekza Stellar main goal is to foster collaboration among users in the creation and development of assets used in gaming and virtual environments. Stellar aims to empower individual creators by providing a platform for them to collaborate, share ideas, and collectively contribute to the digital content creation landscape. This project shifting control from big studios back to individual creators, establishing a new era where creators are at the forefront, driving visual innovation all over the world.";

  let spaceText =
    "Ekza Space is a pioneering project that seeks to connect Ekza Stellar's cooperative concepts between users with the tangible aspects of the internet, including both 3-dimensional and 2-dimensional spaces. The main objective of Ekza Space is to establish a platform that enables artists and users to engage with generated content, thus comprehending the advantages derived from the utilization of these technologies.";
  return (
    <>
      <SayHi />

      <section>
        <div className="flex flex-col">
          <p className="font-audiowide text-5xl flex justify-center pt-4">
            ekza
          </p>
          <div className="flex flex-col py-16 md:flex-row lg:mx-16 m-4 bg-gray-100 rounded-lg p-4 items-center justify-center">
            <img className="w-96 h-full" src="img/wotori_worlds.jpg" />
            <div className="text-justify p-4">
              Ekza is a visionary project spearheaded by the innovative minds at
              the Wotori Studio. An integral part of the ekza.space virtual
              world project, also referred to as the metaverse, Stellar's
              primary objective is to facilitate the creation of assets that can
              be employed in gaming and virtual environments.
              <br />
              <br />
              The project enables users to collaborate and profit whenever their
              content is utilized. The philosophy of the Stellar project centers
              around redistributing control from large-scale studios back to the
              hands of the individual users and artists. It's designed to
              empower creators, allowing them to retain shares in the art
              they've created instead of settling for one-time payments.
              <br />
              <br />
              By contributing to the Stellar project, artists and users aren't
              just creating content - they're actively shaping the landscape of
              virtual worlds and games, and redefining what it means to be a
              creator in the digital age.
            </div>
          </div>
          <p className="text-5xl flex justify-center pt-4">ecosystem</p>
          <div
            className="flex flex-col justify-center space-between
                       md:flex-row lg:justify-center pt-4 lg:mx-8"
          >
            <Project
              projectName={"Stellar"}
              imgPath="./img/stellar.jpeg"
              text={stellarText}
              link="https://stellar.ekza.io"
            />
            <div className="md:hidden">
              <Project
                projectName={"Space"}
                imgPath="./img/space.jpg"
                text={spaceText}
                link="https://space.ekza.io"
                isFlip={false}
              />
            </div>
            <div className="hidden lg:block md:block">
              <Project
                projectName={"Space"}
                imgPath="./img/space.jpg"
                text={spaceText}
                link="https://space.ekza.io"
                isFlip={true}
              />
            </div>
          </div>
        </div>
      </section>
      <Video />
      <a href="https://wotori.io" target="_blank">
        <p className="flex justify-center py-4 cursor-pointer">
          Created at Wotori Studio
        </p>
      </a>
    </>
  );
}
