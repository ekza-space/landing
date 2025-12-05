export default function Channels() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white px-6 sm:px-10 lg:px-16">
      <div className="w-full max-w-6xl">
        <header className="mb-10 sm:mb-14">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
            channels
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-light">
            Where to find{" "}
            <span className="font-normal text-white">Wotori Studio</span> and{" "}
            <span className="font-normal text-white">Ekza Space</span>
          </h2>
        </header>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Wotori Studio Card */}
          <div className="relative group bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-md transition-all duration-200 hover:bg-white/10 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,0.45)]">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
                  studio
                </p>
                <h3 className="mt-2 text-2xl font-light">Wotori Studio</h3>
              </div>
            </div>

            <div className="space-y-3">
              <ChannelLink
                label="X (Twitter)"
                href="https://twitter.com/wotorimovako"
              />
              <ChannelLink
                label="Instagram"
                href="https://www.instagram.com/wotoristudio/"
              />
              <ChannelLink
                label="Discord"
                href="https://discord.gg/De83tH6H"
              />
              <ChannelLink
                label="Telegram"
                href="https://t.me/wotoristudio"
              />
              <ChannelLink
                label="Email"
                href="mailto:wotorimovako@gmail.com"
                subtle
              />
            </div>
          </div>

          {/* Ekza Space Card */}
          <div className="relative group bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-md transition-all duration-200 hover:bg-white/10 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,0.45)]">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
                  space
                </p>
                <h3 className="mt-2 text-2xl font-light">Ekza Space</h3>
              </div>
            </div>

            <div className="space-y-3">
              <ChannelLink
                label="X (Twitter)"
                href="https://twitter.com/EkzaSpace"
              />
              <ChannelLink
                label="Instagram"
                href="https://www.instagram.com/ekza.space/"
              />
              <ChannelLink
                label="Discord"
                href="https://discord.gg/yUWb4Q5b"
              />
              <ChannelLink
                label="Telegram"
                href="https://t.me/ekzaspace"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChannelLink({ label, href, subtle = false }) {
  const baseClasses =
    "flex items-center justify-between rounded-full px-4 py-2.5 text-sm sm:text-base border transition-all duration-200";

  const variantClasses = subtle
    ? "border-white/20 text-gray-300 hover:border-white/40 hover:text-white"
    : "border-white/40 text-white hover:bg-white/10 hover:border-white";

  return (
    <a
      className={`${baseClasses} ${variantClasses}`}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span>{label}</span>
      <span className="text-xs uppercase tracking-[0.2em] text-gray-300">
        open ↗
      </span>
    </a>
  );
}
