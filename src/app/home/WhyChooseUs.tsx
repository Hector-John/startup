"use client";

import { MessageSquare, Palette, Goal, Zap } from "lucide-react";

const whyChooseUsData = [
  {
    title: "Designed to convert ",
    highlight: "Conversion focused",
    description:
      "We create clean, modern interfaces that do more than look good, they drive action.",
    icon: Goal,
  },
  {
    title: "Fast, scalable builds",
    highlight: "48-hour turnaround",
    description:
      "Launch-ready websites and platforms, optimized for performance and growth.",
    icon: Zap,
  },
  {
    title: "Clear communication",
    highlight: "No email chains",
    description:
      "Stay in the loop through your tools. No clutter, no chasing, just updates.",
    icon: MessageSquare,
  },
  {
    title: "A digital-native team",
    highlight: "No templates",
    description:
      "We blend design and code seamlessly, with a sharp eye for culture and craft.",
    icon: Palette,
  },
];

const WhyChooseUs = () => {
  return (
    <div className="lg:min-h-screen py-16">
      <section className="mx-auto padded">
        {/* Header */}
        <div className="space-y-6 text-center mb-14">
          <h1 className="font-heading text-gradient max-w-4xl text-4xl md:text-5xl lg:text-5xl font-medium leading-[1.5] mx-auto">
            Why choose us?
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We don't just build websites, we create experiences that feel fast,
            look sharp, and work beautifully.
          </p>
        </div>

        {/* Cards container */}
        <div className="flex flex-col md:flex-row gap-8 lg:mt-24 px-1">
          {whyChooseUsData.map(
            ({ title, highlight, description, icon: Icon }) => (
              <div
                key={title}
                className="flex-1 min-w-[280px] md:min-w-0 relative"
              >
                {/* Icon */}
                <div
                  className="absolute -top-8 left-1/2 transform -translate-x-1/2 p-4 rounded-full w-16 h-16 flex items-center justify-center z-10"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(230, 230, 230, 0.6))",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <Icon className="text-gray-600 text-3xl" />
                </div>

                {/* Card container */}
                <div className="p-6 rounded-xl bg-[#121212] border border-gray-800 hover:border-gray-700 transition-colors h-full pt-10">
                  <div className="flex flex-col items-center">
                    <h3 className="text-white text-xl font-semibold mb-2 pt-4">
                      {title}
                    </h3>
                    <span className="bg-gray-800 text-cyan-400 text-sm font-medium px-2 py-1 rounded mb-3">
                      {highlight}
                    </span>
                    <p className="text-gray-400 leading-relaxed text-center">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
