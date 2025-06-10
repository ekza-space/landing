import React from "react";
import { Project } from "./project";

interface ProjectCardsProps {
  stellarText: string;
  spaceText: string;
}

const ProjectCards: React.FC<ProjectCardsProps> = ({ stellarText, spaceText }) => {
  return (
    <div
      className="grid gap-6 pt-4 lg:mx-8 md:grid-cols-2 lg:grid-cols-3 items-start"
    >
      <Project
        projectName={"Stellar"}
        imgPath="https://ekza.io/ipfs/Qmc7sh3DefV3YA7xgXAnC1GE8ncsoyChtY6fBEiFDWE2bB"
        imgPath2="https://ekza.io/ipfs/QmSPYQV89xvj1aaQcPtoAsyVJNUF8sb27uvoHxNdBZPsaV"
        text={stellarText}
        link="https://stellar.ekza.io"
        isFlip={true}
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
          imgPath="https://ekza.io/ipfs/QmaBTrVEcyjdj4ky8pRQ2h3dQrGD8bNup5WXx3QjLmZ3PR"
          imgPath2=""
          text={spaceText}
          link="https://space.ekza.io"
          isFlip={true}
        />
      </div>
      <Project
        projectName={"Solana Avatar"}
        imgPath="https://ekza.io/ipfs/QmNStm5ABJp8gBPsJER4yzG5EUwforVxXQNjbkVuKPu9Nr"
        imgPath2="https://ekza.io/ipfs/QmanL1Qp6t4nAW4gyfHG1zKj4u8Scyh7Q7ypBPMewLHEB1"
        text="Ekza Space is a pioneering platform at the intersection of digital identity and creative expression in the Web3 era. This project introduces a UI that lets users create avatar minters—personalized 3D avatars that others can mint and use across metaverses and decentralized applications. By enabling true ownership, portability, and monetization through NFTs, Ekza Space redefines digital presence in a connected virtual future."
        link="https://avatar.ekza.io"
        isFlip={true}
      />
    </div>
  );
}

export default ProjectCards;
