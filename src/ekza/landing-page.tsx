import { HeroSection } from "../components/HeroSection"
import ProjectCards from "../components/projectCards";
import Footer from "../components/footer";
import { SayHi } from "../components/hi";
import Header from "../components/Header";
import Contact from "../components/Contact";

export default function EkzaLandingPage() {
  const stellarText =
    "Ekza Stellar fosters collaboration among users to collectively create and innovate digital assets for gaming and virtual worlds. Currently built on a Cosmos-based blockchain, Stellar is in the process of migrating to Solana to leverage its robust ecosystem, aligning closely with Ekza's existing Solana-compatible projects.";

  const spaceText =
    "Ekza Space bridges Stellar's collaborative principles into practical internet spaces, offering immersive 3D environments where creators and users can actively engage with digital content. The platform amplifies user creativity, monetization, and interaction through advanced blockchain technologies. Already integrated with the Avatar service, it allows users to fully customize their appearance and represent themselves across supported environments.";

  const avatarText =
    "At the intersection of digital identity and creative expression, Ekza Space empowers users to generate and monetize customizable 3D avatars as NFTs. Already integrated with the Solana blockchain, its intuitive UI enables creators to deploy avatar minters, ensuring true ownership, portability, and seamless use across various metaverses and decentralized applications.";

  const myHeroDescription = "Ekza Space is a blockchain-powered platform that transforms 3D asset creation through global collaboration and automated revenue sharing, enabling game developers to integrate community-generated assets via the Ekza SDK while contributors earn fair, transparent compensation through smart contracts, with NFTs for ownership, generative AI for creation, and decentralization to ensure creators retain control—reducing costs, boosting efficiency, and empowering artists with recurring income.";

  const projects = [
    {
      projectName: "Stellar",
      imgPath: "https://ekza.io/ipfs/Qmc7sh3DefV3YA7xgXAnC1GE8ncsoyChtY6fBEiFDWE2bB",
      imgPath2: "https://ekza.io/ipfs/QmSPYQV89xvj1aaQcPtoAsyVJNUF8sb27uvoHxNdBZPsaV",
      text: stellarText,
      link: "https://stellar.ekza.io",
      isFlip: true
    },
    {
      projectName: "Avatar",
      imgPath: "https://ekza.io/ipfs/QmNStm5ABJp8gBPsJER4yzG5EUwforVxXQNjbkVuKPu9Nr",
      imgPath2: "https://ekza.io/ipfs/QmanL1Qp6t4nAW4gyfHG1zKj4u8Scyh7Q7ypBPMewLHEB1",
      text: avatarText,
      link: "https://avatar.ekza.io",
      isFlip: true
    },
    {
      projectName: "Space",
      imgPath: "https://ekza.io/ipfs/QmaBTrVEcyjdj4ky8pRQ2h3dQrGD8bNup5WXx3QjLmZ3PR",
      imgPath2: "",
      text: spaceText,
      link: "https://space.ekza.io",
      isFlip: true,
      showOnDesktop: true
    }
  ];

  const heroButtons = [
    {
      text: "Pitch Deck",
      link: "https://stellar.ekza.io/ppt/wotori-pitchdeck.pdf",
      variant: "primary" as const
    },
    {
      text: "Light Paper",
      link: "https://wotori.io/ppt/lp-wotori-studio_v0.5.pdf",
      variant: "secondary" as const
    }
  ];

  return (
    <main className="font-sans text-gray-900">
      <SayHi />
      <Header />

      <HeroSection
        imageUrl="/img/ekza_wotori_space.jpeg"
        imageAlt="Stylized image of the moon"
        title="Decentralized Asset Creation for Games and Virtual Worlds"
        description={myHeroDescription}
        buttons={heroButtons}
        heroHeight="h-screen"
      />

      <section id="ecosystem" className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-8 text-gray-800">Ecosystem</h2>
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
            <ProjectCards projects={projects} />
          </div>
        </div>
      </section>

      <Contact />

      {/* Add spacer when footer is relative to prevent content from being hidden */}
      <div className="h-16"></div>

      <Footer position="relative" />
    </main>
  );
}
