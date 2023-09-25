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
          <div
            className="flex flex-col justify-center space-between
                       md:flex-row lg:justify-center pt-4 lg:mx-14"
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
