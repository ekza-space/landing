import { SayHi } from "./components/hi";
import { Project } from "./components/project";

export default function App() {
  let stellarText =
    "Ekza Stellar, is part of the ekza project. Its main goal is to enable users to create and earn from assets used in gaming and virtual environments. Stellar aims to shift control from big studios to individual creators, allowing them to earn continuously from their work. This project is redefining the digital content creation landscape and empowering creators like never before.";

  let spaceText =
    "Ekza Space is a pioneering project that seeks to connect Ekza Stellar's cooperative concepts between users with the tangible aspects of the internet, including both 3-dimensional and 2-dimensional spaces. The main objective of Ekza Space is to establish a platform that enables artists and users to engage with generated content, thus comprehending the advantages derived from the utilization of these technologies.";

  return (
    <>
      <SayHi />

      <div className="flex flex-col">
        <p className="font-audiowide text-5xl flex justify-center pt-4">ekza</p>
        <div
          className="flex flex-col justify-center space-between
                   lg:flex-row lg:justify-center pt-4 "
        >
          <Project
            projectName={"Stellar"}
            imgPath="./img/stellar.png"
            text={stellarText}
            link="https://stellar.ekza.io"
          />
          <Project
            projectName={"Space"}
            imgPath="./img/space.png"
            text={spaceText}
            link="https://space.ekza.io"
          />
        </div>
        <a href="https://wotori.io" target="_blank">
          <p className="flex justify-center py-4 cursor-pointer">
            Created at Wotori Studio
          </p>
        </a>
      </div>
    </>
  );
}
