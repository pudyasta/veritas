import Footer from "@/components/Footer";
import HowWeWork from "@/components/HowWeWorks";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen text-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 py-16 lg:py-20 bg-[url('/assets/home/hero.png')] bg-cover bg-center">
        <h1
          className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 tracking-wider text-center"
          style={{ fontFamily: "VCR OSD Mono, monospace" }}
        >
          Veritas
        </h1>
        <p
          className="text-base sm:text-lg lg:text-2xl mb-10 text-white tracking-wide text-center"
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          Recheck. Reset. Rethink.
        </p>

        {/* Search Box */}
        <div className="w-full max-w-2xl sm:max-w-xl md:max-w-2xl lg:max-w-3xl bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
          <p className="text-sm sm:text-md mb-4">
            De-platform buzzer. Verify before you share. Paste a username or
            content link and get the facts in under a minute.
          </p>
          <div className="flex flex-col justify-between bg-white py-5 px-5 rounded-2xl">
            <input
              type="text"
              placeholder="Insert username or paste content link here"
              className="text-black placeholder-gray-400 outline-none text-sm sm:text-lg bg-transparent w-full"
              style={{ fontFamily: "Manrope, sans-serif" }}
            />
            <div className="flex justify-end mt-4">
              <button className="bg-black text-white px-4 py-2 rounded-full text-xs sm:text-sm font-medium hover:bg-gray-800 transition-colors">
                Analyze
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="text-center px-4 sm:px-6 lg:px-32 py-12 flex items-center">
        <p
          className="text-base sm:text-lg lg:text-4xl leading-relaxed font-semibold bg-gradient-to-r from-[#0D112C] via-[#8F9ED9] to-[#2F3687] bg-clip-text text-transparent"
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          Every day, you scroll through endless posts. Some inspire, some spark
          curiosity, some just feel off. 58% of people struggle to tell truth
          from lies, and 47% blame influencers and politicians.{" "}
          <br className="hidden sm:block" />
          How do you know what to trust?
        </p>
      </div>

      {/* Main Feature Section */}
      <div className="px-4 sm:px-6 lg:px-12 pt-16" id="about">
        <div className="max-w-7xl mx-auto">
          <div className="bg-dark-purple backdrop-blur-sm rounded-3xl p-6 sm:p-8 lg:p-12 border border-slate-700">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-square lg:aspect-[4/3]">
                <Image
                  src="/assets/home/not-found.svg"
                  alt="About Title"
                  width={1080}
                  height={1080}
                  className="object-contain"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold font-Manrope purple-gradient-2 pb-5">
                  See the Agenda,
                  <br />
                  Not Just the Post
                </h2>
                <p className="text-sm sm:text-base lg:text-lg">
                  Buzzers, bots, and viral tricks shape what you see every day.
                  Many posts are designed to provoke, not inform.
                </p>
                <p className="text-sm sm:text-base lg:text-lg">
                  Veritas helps you stay aware. By uncovering coordinated
                  behavior and manipulative language, we keep you one step ahead
                  of misinformation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="px-4 sm:px-6 lg:px-12 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-dark-purple backdrop-blur-sm rounded-2xl p-6 border border-slate-700 flex flex-col justify-between">
            <div className="flex items-center justify-center mb-4">
              <Image
                src="/assets/home/network.svg"
                alt="Network"
                width={300}
                height={300}
              />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 purple-gradient-2">
                Identify Inauthentic Activity
              </h3>
              <p className="text-sm">
                We detect & expose coordinated inauthentic behavior to protect
                platform integrity.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-dark-purple backdrop-blur-sm rounded-2xl p-6 border border-slate-700 flex flex-col justify-between">
            <div className="flex items-center justify-center mb-4">
              <Image
                src="/assets/home/paper.svg"
                alt="Paper"
                width={300}
                height={300}
              />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 purple-gradient-2">
                Analyze Provocative Content
              </h3>
              <p className="text-sm">
                Understand the true intent behind posts designed to divide and
                provoke.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-dark-purple backdrop-blur-sm rounded-2xl p-6 border border-slate-700 flex flex-col justify-between">
            <div className="flex items-center justify-center mb-4">
              <Image
                src="/assets/home/chat.svg"
                alt="Chat"
                width={300}
                height={300}
              />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 purple-gradient-2">
                Gain Instant Clarity
              </h3>
              <p className="text-sm">
                Turn doubt into certainty within seconds, with clear and
                actionable insights.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How We Work Section */}
      <HowWeWork />

      {/* Footer */}
      <Footer />
    </div>
  );
}
