"use client";

import { FaSearch, FaMapSigns, FaPalette, FaCode, FaRocket, FaLifeRing } from "react-icons/fa";
import { cn } from "@/lib/utils";

export const processSteps = [
  {
    title: "Discovery",
    color: "from-blue-500 to-blue-700",
    icon: FaSearch,
    description:
      "We'll start by understanding your goals, challenges, and audience, the foundation of everything built afterward.",
    bullets: [
      "Clarifying vision and objectives",
      "Reviewing competitors & inspiration",
    ],
    outcome: "Clarity & Alignment",
  },
  {
    title: "Planning",
    color: "from-purple-500 to-purple-700",
    icon: FaMapSigns,
    description:
      "Then define the roadmap: tech stack, architecture, deliverables, and timelines. All structured for clarity.",
    bullets: [
      "Project breakdown and milestones",
      "Selecting tools & approaches",
    ],
    outcome: "Structured Execution Plan",
  },
  {
    title: "Design",
    color: "from-teal-500 to-teal-700",
    icon: FaPalette,
    description:
      "Then translate ideas into sleek, intuitive designs, interfaces that not only look good, but feel great.",
    bullets: [
      "Wireframes & prototyping",
      "Design systems & visual language",
    ],
    outcome: "Visual Direction",
  },
  {
    title: "Development",
    color: "from-indigo-500 to-indigo-700",
    icon: FaCode,
    description:
      "We then craft clean, scalable code built for performance, responsiveness, and seamless integration.",
    bullets: [
      "Frontend + backend logic",
      "API integrations & automation",
    ],
    outcome: "Working Product",
  },
  {
    title: "Launch",
    color: "from-orange-500 to-orange-700",
    icon: FaRocket,
    description:
      "Deploy with precision, ensuring stability, performance, and peace of mind from day one.",
    bullets: ["Pre-launch testing", "Zero-downtime deployment"],
    outcome: "Live Deployment",
  },
  {
    title: "Support",
    color: "from-pink-500 to-pink-700",
    icon: FaLifeRing,
    description:
      "Tech evolves. Stay ahead with continuous maintenance, feature upgrades, and ongoing improvements.",
    bullets: ["Bug fixes & quick turnarounds", "New features & optimizations"],
    outcome: "Ongoing Growth",
  },
];


const Process = () => {
  return (
    <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-gradient">
          How We Work
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          A straightforward, high-impact process designed to ship fast and
          deliver quality.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {processSteps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={index} className="relative flex gap-6">
              {/* Icon with Number Bubble */}
              <div className="relative">
                <div
                  className={cn(
                    "w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br text-white text-2xl shrink-0",
                    step.color
                  )}
                >
                  <Icon />
                </div>
                <div className="absolute -top-2 -left-2 bg-white text-black text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md">
                  {index + 1}
                </div>
              </div>

              {/* Step Text */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-xl font-semibold text-white">
                    {step.title}
                  </h3>
                  <span className="text-sm text-blue-400 bg-white/10 border border-white/10 px-2 py-0.5 rounded-full">
                    {step.outcome}
                  </span>
                </div>
                <p className="text-gray-400 mb-3 leading-relaxed">
                  {step.description}
                </p>
                <ul className="space-y-1 text-sm text-gray-400">
                  {step.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-blue-400">•</span> {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Process;
