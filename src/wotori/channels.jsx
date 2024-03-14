export default function Channels() {
  return (
    <div className="h-screen md:h-screen flex items-center justify-center space-between overflow-auto">
      <div className="flex flex-col md:flex-row lg:space-x-64 md:space-x-14 max-sm:m-14 sm:m-12">
        <div className="Channels max-sm:mb-8 sm:mb-8">
          <p className="text-3xl mb-8">channels:</p>

          <div className="WotoriStudio mb-12 ">
            <p className="text-2xl">Wotori Studio</p>
            <div className="">
              <a
                className="link"
                target="_blank"
                href="https://www.instagram.com/wotoristudio/"
              >
                <h2 className="">Instagram</h2>
              </a>
            </div>
            <div className="">
              <a
                className="link"
                target="_blank"
                href="https://twitter.com/wotorimovako"
              >
                <h2 className="">Twitter</h2>
              </a>
            </div>
            <a className="mt-2 link" href="mailto:wotorimovako@gmail.com">
              Email
            </a>
          </div>

          <div className="EkzaSpace">
            <p className="text-2xl">Ekza Space</p>
            <div className="">
              <a
                className="link"
                target="_blank"
                href="https://www.instagram.com/ekza.space/"
              >
                <h2 className="">Instagram</h2>
              </a>
            </div>
            <div className="">
              <a
                className="link"
                target="_blank"
                href="https://stellar.ekza.io/ppt/wotori-pitchdeck.pdf"
              >
                <h2 className="">Twitter</h2>
              </a>
            </div>

            <div className="">
              <a className="link" target="_blank" href="https://t.me/ekzaspace">
                <h2 className="">Telegram</h2>
              </a>
            </div>

            <div className="">
              <a
                className="link"
                target="_blank"
                href="https://discord.gg/yUWb4Q5b"
              >
                <h2 className="">Discord</h2>
              </a>
            </div>
          </div>
        </div>

        <div className="Token">
          <p className="text-3xl mb-8">tokens:</p>
          {/* <p className="text-3xl mb-2">etherium: ERC20</p>
        <p className="text-3xl mb-8">archway: CW20</p> */}
          <p>Tokens are not yet minted.</p>
          <p>Ethereum ERC20 and archway CW20 would be here soon.</p>
        </div>
      </div>
    </div>
  );
}
