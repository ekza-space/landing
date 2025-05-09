import React from "react";
import Footer from "../components/footer";
import { SayHi } from "../components/hi";
import ProjectCards from "../components/projectCards";
import Video from "../components/video";

export default function EkzaLandingPage() {
  const stellarText =
    "Ekza Stellar’s main goal is to foster collaboration among users in the creation and development of assets used in gaming and virtual environments. Stellar empowers creators by providing a platform to share ideas and contribute collectively, shifting control from big studios back to individuals and driving global visual innovation.";
  const spaceText =
    "Ekza Space is a pioneering project connecting Stellar’s cooperative concepts with tangible internet spaces, both 3D and 2D. Its objective is to let artists and users engage with generated content and reap the benefits of these cutting‑edge technologies.";

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

      <section id="about" className="container mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-6xl font-extrabold text-transparent text-black">
            Welcome to Ekza
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-gray-700">
            Ekza is the experiment I started in 2018. I discovered the power of collaboration through the #draw_in_your_style challenges online. After studying game design and asset creation, I combined these passions to build a platform where teams can create and innovate together on blockchain‑powered worlds.
          </p>
          <a
            href="https://stellar.ekza.io/ppt/wotori-pitchdeck.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block px-8 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold rounded-lg hover:opacity-90 transition"
          >
            Pitch Deck
          </a>
        </div>
        <div>
          <img
            className="rounded-lg shadow-lg object-cover w-full"
            src="/img/wotori_worlds.jpg"
            alt="Ekza Worlds"
          />
        </div>
      </section>

      <section id="ecosystem" className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-8 text-gray-800">Ecosystem</h2>
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
            <ProjectCards stellarText={stellarText} spaceText={spaceText} />
          </div>
        </div>
      </section>

      <section id="contact" className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-5xl font-bold mb-4 text-gray-800">Contact</h2>
        <p className="text-xl text-gray-700">
          For collaboration ideas, email me at{' '}
          <a href="mailto:wotorimovako@gmail.com" className="text-purple-600 underline">
            wotorimovako@gmail.com
          </a>{' '}
          or message me on Telegram at{' '}
          <a href="https://t.me/wotorii" className="text-purple-600 underline" target="_blank" rel="noopener noreferrer">
            @wotorii
          </a>.
        </p>
      </section>
      <div className="h-24" />
      <Footer />
    </main>
  );
}
