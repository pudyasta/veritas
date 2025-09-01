import React from "react";
import Image from "next/image";

const steps = [
  {
    id: 1,
    title: "Be Curious and Cautious. Spot Something Online",
    description:
      "Scrolling through social media and stumble on a post that feels off? Curious if it’s true, credible, or just buzzer noise?",
    icon: "/assets/home/curious.svg", // replace with your icon image
  },
  {
    id: 2,
    title: "Copy and Paste",
    description:
      "Take the username handle or the link of the content. Drop it into our platform.",
    icon: "/assets/home/search.svg", // replace with your icon image
  },
  {
    id: 3,
    title: "Get the Facts",
    description: "In seconds, receive a clear, easy-to-read analysis.",
    icon: "/assets/home/fact.svg", // replace with your icon image
  },
];

export default function HowWeWork() {
  return (
    <section className="py-16 min-h-[80vh] flex items-center" id="how-it-works">
      <div className="max-w-7xl mx-auto px-6 flex flex-col ">
        {/* Section Title */}
        <h2 className="text-3xl block md:text-4xl font-bold purple-gradient-1 mb-12 m-auto">
          How We Works
        </h2>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div
              key={step.id}
              className="bg-white shadow-lg rounded-2xl p-6 flex flex-col relative"
            >
              {/* Number */}
              <span className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg bg-[#e8ebf7] text-[#4c52a2] font-semibold">
                {step.id}
              </span>

              {/* Icon */}
              <div className="mb-6">
                <Image
                  src={step.icon}
                  alt={step.title}
                  width={i == 1 ? 500 : 180}
                  height={180}
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="font-semibold text-lg text-[#4c52a2] mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-medium text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
