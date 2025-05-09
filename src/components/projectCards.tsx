import React from "react";
import { Project } from "./project";

interface ProjectCardsProps {
  stellarText: string;
  spaceText: string;
}

const ProjectCards: React.FC<ProjectCardsProps> = ({ stellarText, spaceText }) => {
  return (
    <div
      className={`flex flex-col justify-center 
      space-between md:flex-row lg:justify-center
       pt-4 lg:mx-8`}
    >
      <Project
        projectName={"Stellar"}
        imgPath="/img/stellar.jpg"
        imgPath2="/img/distr.jpeg"
        text={stellarText}
        link="https://stellar.ekza.io"
      />
      <div className="md:hidden">
        <Project
          projectName={"Space"}
          imgPath="/img/space.jpg"
          imgPath2="/img/space-ashton.jpeg"
          text={spaceText}
          link="https://space.ekza.io"
          isFlip={false}
        />
      </div>
      <div className="hidden lg:block md:block">
        <Project
          projectName={"Space"}
          imgPath="./img/space.jpg"
          imgPath2="/img/space-ashton.jpeg"
          text={spaceText}
          link="https://space.ekza.io"
          isFlip={true}
        />
      </div>
    </div>
  );
}

export default ProjectCards;
