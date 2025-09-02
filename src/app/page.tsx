"use client";

import Image from "next/image";
import { useState } from "react";
import Footer from "@/components/Footer";
import HowWeWork from "@/components/HowWeWorks";
import Navbar from "@/components/Navbar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { platforms } from "@/components/Footer";

export default function Home() {
  const [selectedPlatform, setSelectedPlatform] = useState<string>("");

  return (
    <div className="min-h-screen text-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <div className="flex min-h-screen flex-col items-center justify-center bg-[url('/assets/home/hero.png')] bg-center bg-cover px-4 py-16 sm:px-6 lg:py-20">
        <h1 className="!font-vcr mb-4 text-center text-4xl tracking-wider sm:text-5xl lg:text-7xl">
          Veritas
        </h1>
        <p
          className="mb-10 text-center text-base text-white tracking-wide sm:text-lg lg:text-2xl"
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          Recheck. Reset. Rethink.
        </p>

        {/* Search Box */}
        <div className="w-full max-w-2xl rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
          <p className="mb-4 text-sm sm:text-md">
            De-platform buzzer. Verify before you share. Paste a username or
            content link and get the facts in under a minute.
          </p>
          <div className="flex flex-col justify-between rounded-2xl bg-white px-5 py-5">
            <input
              className="w-full bg-transparent text-black text-sm placeholder-gray-400 outline-none sm:text-lg"
              placeholder="Insert username or paste content link here"
              style={{ fontFamily: "Manrope, sans-serif" }}
              type="text"
            />
            <div className="mt-4 flex justify-between items-center">
              <Select value={selectedPlatform} onValueChange={setSelectedPlatform}>
                <SelectTrigger className="w-48 bg-transparent text-black border border-gray-300">
                  <SelectValue placeholder="Select Platform" />
                </SelectTrigger>
                <SelectContent>
                  {platforms.map((platform) => (
                    <SelectItem key={platform.name} value={platform.name}>
                      <div className="flex items-center gap-2">
                        <Image src={platform.icon} alt={platform.name} width={20} height={20} />
                        <span>{platform.name}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <button className="rounded-full bg-black px-4 py-2 font-medium text-white text-xs transition-colors hover:bg-gray-800 sm:text-sm">
                Analyze
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex items-center px-4 py-12 text-center sm:px-6 lg:px-32">
        <p
          className="bg-gradient-to-r from-[#0D112C] via-[#8F9ED9] to-[#2F3687] bg-clip-text font-semibold text-base text-transparent leading-relaxed sm:text-lg lg:text-4xl"
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
      <div className="px-4 pt-16 sm:px-6 lg:px-12" id="about">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl border border-slate-700 bg-dark-purple p-6 backdrop-blur-sm sm:p-8 lg:p-12">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div className="relative aspect-square lg:aspect-[4/3]">
                <Image
                  alt="About Title"
                  className="object-contain"
                  height={1080}
                  src="/assets/home/not-found.svg"
                  width={1080}
                />
              </div>
              <div className="space-y-6">
                <h2 className="purple-gradient-2 pb-5 font-Manrope font-semibold text-2xl sm:text-3xl lg:text-5xl">
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
      <div className="px-4 py-12 sm:px-6 lg:px-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-700 bg-dark-purple p-6 backdrop-blur-sm">
            <div className="mb-4 flex items-center justify-center">
              <Image
                alt="Network"
                height={300}
                src="/assets/home/network.svg"
                width={300}
              />
            </div>
            <div>
              <h3 className="purple-gradient-2 mb-3 font-bold text-lg sm:text-xl">
                Identify Inauthentic Activity
              </h3>
              <p className="text-sm">
                We detect & expose coordinated inauthentic behavior to protect
                platform integrity.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-700 bg-dark-purple p-6 backdrop-blur-sm">
            <div className="mb-4 flex items-center justify-center">
              <Image
                alt="Paper"
                height={300}
                src="/assets/home/paper.svg"
                width={300}
              />
            </div>
            <div>
              <h3 className="purple-gradient-2 mb-3 font-bold text-lg sm:text-xl">
                Analyze Provocative Content
              </h3>
              <p className="text-sm">
                Understand the true intent behind posts designed to divide and
                provoke.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-700 bg-dark-purple p-6 backdrop-blur-sm">
            <div className="mb-4 flex items-center justify-center">
              <Image
                alt="Chat"
                height={300}
                src="/assets/home/chat.svg"
                width={300}
              />
            </div>
            <div>
              <h3 className="purple-gradient-2 mb-3 font-bold text-lg sm:text-xl">
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
