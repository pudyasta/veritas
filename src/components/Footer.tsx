import Image from "next/image";

type Platform = {
  name: string;
  description: string;
  icon: string;
};

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
    <section className="w-full bg-white px-6 py-16 md:px-12" id="platforms">
      {/* Floating Icons */}
      <div className="mb-10 flex flex-wrap justify-center gap-6">
        <Image
          alt="TikTok"
          className="h-24 w-24 drop-shadow-xl"
          height={60}
          src="/assets/social/Tiktok.svg"
          width={60}
        />
        <Image
          alt="Instagram"
          className="h-24 w-24 drop-shadow-xl"
          height={60}
          src="/assets/social/Instagram.svg"
          width={60}
        />
        <Image
          alt="Twitter"
          className="h-24 w-24 drop-shadow-xl"
          height={60}
          src="/assets/social/x.svg"
          width={60}
        />
        <Image
          alt="YouTube"
          className="h-24 w-24 drop-shadow-xl"
          height={60}
          src="/assets/social/Youtube.svg"
          width={60}
        />
        <Image
          alt="Facebook"
          className="h-24 w-24 drop-shadow-xl"
          height={60}
          src="/assets/social/Facebook.svg"
          width={60}
        />
      </div>

      {/* Heading */}
      <div className="my-6 text-center">
        <h2 className="purple-gradient-1 text-center font-bold text-3xl md:text-4xl">
          Analyze Across All Major Platforms
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-500">
          Our analysis works seamlessly on the social networks you use every day
          to uncover hidden narratives
        </p>
      </div>

      {/* Platform Cards */}
      <div
        className="m-auto mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:max-w-7xl"
        id="contact"
      >
        {platforms.map((platform, idx) => (
          <div
            className="flex flex-col rounded-2xl border border-gray-200 p-6 shadow-sm transition hover:shadow-md"
            key={idx}
          >
            <div className="h-24 w-24 drop-shadow-xl">
              <Image
                alt={platform.name}
                fill
                //   width={50}
                //   height={50}
                src={platform.icon}
              />
            </div>
            <h3 className="purple-gradient-1 font-semibold text-lg">
              {platform.name}
            </h3>
            <p className="mt-2 text-gray-500 text-sm">{platform.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
