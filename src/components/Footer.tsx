import React from "react";
import Image from "next/image";

interface Platform {
  name: string;
  description: string;
  icon: string;
}

const platforms: Platform[] = [
  {
    name: "X/Twitter",
    description: "See the real agenda behind trending topics.",
    icon: "/assets/social/x.svg",
  },
  {
    name: "Instagram",
    description: "Reveal true influencer credibility.",
    icon: "/assets/social/Instagram.svg",
  },
  {
    name: "TikTok",
    description: "Detect manufactured viral campaigns.",
    icon: "/assets/social/Tiktok.svg",
  },
  {
    name: "Facebook",
    description: "Expose the intent behind outrage-bait.",
    icon: "/assets/social/Facebook.svg",
  },
  {
    name: "YouTube",
    description: "Gauge the true reaction to any video.",
    icon: "/assets/social/Youtube.svg",
  },
];

export default function Footer() {
  return (
    <section className="w-full py-16 px-6 md:px-12  bg-white" id="platforms">
      {/* Floating Icons */}
      <div className="flex justify-center gap-6 mb-10 flex-wrap ">
        <Image
          src="/assets/social/Tiktok.svg"
          alt="TikTok"
          width={60}
          height={60}
          className="drop-shadow-xl w-24 h-24"
        />
        <Image
          src="/assets/social/Instagram.svg"
          alt="Instagram"
          width={60}
          height={60}
          className="drop-shadow-xl w-24 h-24"
        />
        <Image
          src="/assets/social/x.svg"
          alt="Twitter"
          width={60}
          height={60}
          className="drop-shadow-xl w-24 h-24"
        />
        <Image
          src="/assets/social/Youtube.svg"
          alt="YouTube"
          width={60}
          height={60}
          className="drop-shadow-xl w-24 h-24"
        />
        <Image
          src="/assets/social/Facebook.svg"
          alt="Facebook"
          width={60}
          height={60}
          className="drop-shadow-xl w-24 h-24"
        />
      </div>

      {/* Heading */}
      <div className="text-center my-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center purple-gradient-1">
          Analyze Across All Major Platforms
        </h2>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Our analysis works seamlessly on the social networks you use every day
          to uncover hidden narratives
        </p>
      </div>

      {/* Platform Cards */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12 lg:max-w-7xl m-auto"
        id="contact"
      >
        {platforms.map((platform, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-gray-200 shadow-sm p-6 flex flex-col  hover:shadow-md transition"
          >
            <div className="drop-shadow-xl w-24 h-24">
              <Image
                src={platform.icon}
                alt={platform.name}
                //   width={50}
                //   height={50}
                fill
              />
            </div>
            <h3 className="text-lg font-semibold purple-gradient-1">
              {platform.name}
            </h3>
            <p className="text-gray-500 text-sm mt-2">{platform.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
