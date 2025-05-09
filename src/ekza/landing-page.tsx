import { HeroSection } from "../components/HeroSection"
import ProjectCards from "../components/projectCards";
import Footer from "../components/footer";
import { SayHi } from "../components/hi";


export default function EkzaLandingPage() {
  const stellarText =
    "Ekza Stellar’s main goal is to foster collaboration among users in the creation and development of assets used in gaming and virtual environments. Stellar empowers creators by providing a platform to share ideas and contribute collectively, shifting control from big studios back to individuals and driving global visual innovation.";
  const spaceText =
    "Ekza Space is a pioneering project connecting Stellar’s cooperative concepts with tangible internet spaces, both 3D and 2D. Its objective is to let artists and users engage with generated content and reap the benefits of these cutting‑edge technologies.";

  const myHeroDescription = "Ekza Space is a blockchain-powered platform that transforms 3D asset creation through global collaboration and automated revenue sharing, enabling game developers to integrate community-generated assets via the Ekza SDK while contributors earn fair, transparent compensation through smart contracts, with NFTs for ownership, generative AI for creation, and decentralization to ensure creators retain control—reducing costs, boosting efficiency, and empowering artists with recurring income.";

  return (
    <main className="font-sans text-gray-900">
      <SayHi />
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-4xl font-extrabold text-black">
            ekza
          </a>
          <nav className="space-x-6 text-gray-600">
            <a href="#about" className="hover:text-purple-600 transition">About</a>
            <a href="#ecosystem" className="hover:text-purple-600 transition">Ecosystem</a>
            <a href="#contact" className="hover:text-purple-600 transition">Contact</a>
          </nav>
        </div>
      </header>

      <HeroSection
        imageUrl="/img/ekza_wotori_space.jpeg"
        imageAlt="Stylized image of the moon"
        title="Decentralized Asset Creation for Games and Virtual Worlds"
        description={myHeroDescription}
        ctaText="Pitch Deck"
        ctaLink="https://stellar.ekza.io/ppt/wotori-pitchdeck.pdf"
      // heroHeight="h-screen" // Optionally make it full screen height
      />

      <section id="ecosystem" className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-8 text-gray-800">Ecosystem</h2>
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
            <ProjectCards stellarText={stellarText} spaceText={spaceText} />
          </div>
        </div>
      </section>

      <section id="contact" className="bg-gray-20 py-16 md:py-24"> {/* Added a light background for separation */}
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Get in Touch
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-10 md:mb-12 max-w-xl mx-auto"> {/* Softer gray, max-width for readability */}
            Have a project in mind, a question, or just want to discuss collaboration ideas? We'd love to hear from you!
          </p>

          <div className="space-y-8 md:space-y-6 max-w-md mx-auto"> {/* Container for contact methods */}

            {/* Email Contact Method */}
            <div className="flex flex-col items-center text-center">
              {/* Optional Icon (Heroicons example) */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>
                <span className="block text-sm font-medium text-gray-500">Email Us</span> {/* Label */}
                <a
                  href="mailto:wotorimovako@gmail.com"
                  className="text-xl text-purple-600 hover:text-purple-800 hover:underline transition-colors duration-150"
                >
                  wotorimovako@gmail.com
                </a>
              </div>
            </div>

            {/* Telegram Contact Method */}
            <div className="flex flex-col items-center text-center">
              {/* Optional Icon (Simple placeholder, replace with actual Telegram SVG if possible) */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /> {/* Simplified Telegram-like icon */}
              </svg>
              <div>
                <span className="block text-sm font-medium text-gray-500">Message on Telegram</span> {/* Label */}
                <a
                  href="https://t.me/wotorii"
                  className="text-xl text-purple-600 hover:text-purple-800 hover:underline transition-colors duration-150"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @wotorii
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>


      <div className="h-24" />

      <Footer />
    </main>
  );
}
