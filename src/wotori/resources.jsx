export default function Resources() {
  return (
    <div
      className="lg:h-screen md:h-screen
                    overflow-auto overflow-visible
                    flex flex-col items-center justify-center
                    bg-gray-100"
    >
      <div className="max-sm:m-8 sm:m-8">
        <div className="max-w-3xl mb-24 overflow-visible">
          <h2 className="text-3xl mb-2">Whitepaper</h2>
          <p className="text-2xl mb-3">
            Here we outline our inspiration, philosophy, and goals. This content
            is regularly updated to reflect our evolving vision and aspirations.
          </p>
          {/* <a
            className="link"
            target="_blank"
            href="https://stellar.ekza.io/ppt/wotori-white-paper.pdf"
          >
            read more
          </a> */}
          more information will be available shortly.
        </div>

        <div className="max-w-3xl mb-24">
          <h2 className="text-3xl mb-2">Pitchdeck</h2>
          <p className="text-2xl mb-3">
            The presentation elucidates the platform we are developing and the
            tools we aim to introduce to the web3 ecosystem.
          </p>
          <a
            className="link"
            target="_blank"
            href="https://stellar.ekza.io/ppt/wotori-pitchdeck.pdf"
          >
            read more
          </a>
        </div>

        <div className="max-w-3xl mb-12 overflow-visible">
          <h2 className="text-3xl mb-2">Ekza space</h2>
          <p className="text-2xl mb-3">
            Ekza is the project through which Wotori Studio achieves all of its
            internal objectives by constructing a platform for collaboration and
            content creation.
          </p>
          <a className="link" target="_blank" href="https://ekza.io">
            read more
          </a>
        </div>
      </div>
    </div>
  );
}
