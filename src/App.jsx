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
              Ekza is the experiment I started in 2018. I gained an
              understanding of collaboration when the #draw_in_your_style
              challenge emerged on the internet. I participated multiple times
              and felt so exhilarated and joyful that I wanted to bring this
              concept to artists worldwide. Additionally, I attended a game
              design school and delved into game and asset creation. Combining
              these two passions, the idea of Ekza was born in my mind.
              <br />
              <br />
              It is a platform where people can build their own worlds, form
              teams, and dive into the creative process on top of modern
              blockchain technologies that changes the game and the entire
              computer animation industry, so you are welcome!
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
