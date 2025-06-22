"use client";

import { processSteps } from "@/lib/config";
import { cn } from "@/lib/utils";

const Process = () => {
  return (
    <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gradient">
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
