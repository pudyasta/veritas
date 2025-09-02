import Image from "next/image";

type Step = {
  id: number;
  title: string;
  description: string;
  icon: string;
};

const steps: Step[] = [
  {
    id: 1,
    title: "Be Curious and Cautious. Spot Something Online",
    description:
      "Scrolling through social media and stumble on a post that feels off? Curious if it’s true, credible, or just buzzer noise?",
    icon: "/assets/home/curious.svg",
  },
  {
    id: 2,
    title: "Copy and Paste",
    description:
      "Take the username handle or the link of the content. Drop it into our platform.",
    icon: "/assets/home/search.svg",
  },
  {
    id: 3,
    title: "Get the Facts",
    description: "In seconds, receive a clear, easy-to-read analysis.",
    icon: "/assets/home/fact.svg",
  },
];

export default function HowWeWork() {
  return (
    <section className="flex min-h-[80vh] items-center py-16" id="how-it-works">
      <div className="mx-auto flex max-w-7xl flex-col px-6">
        {/* Section Title */}
        <h2 className="purple-gradient-1 m-auto mb-12 block font-bold text-3xl md:text-4xl">
          How We Works
        </h2>

        {/* Steps */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <div
              className="relative flex flex-col rounded-2xl bg-white p-6 shadow-lg"
              key={step.id}
            >
              {/* Number */}
              <span className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-lg bg-[#e8ebf7] font-semibold text-[#4c52a2]">
                {step.id}
              </span>

              {/* Icon */}
              <div className="mb-6">
                <Image
                  alt={step.title}
                  className="object-contain"
                  height={180}
                  src={step.icon}
                  width={i === 1 ? 500 : 180}
                />
              </div>

              {/* Title */}
              <h3 className="mb-2 font-semibold text-[#4c52a2] text-lg">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-medium">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
