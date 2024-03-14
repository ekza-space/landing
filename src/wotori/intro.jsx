export default function Intro() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="max-w-3xl max-sm:m-8 sm:m-8">
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
  );
}
