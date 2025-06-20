"use client";

import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import {
  SiFigma,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiWebflow,
  SiFramer,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiGithub,
  SiVercel,
} from "react-icons/si";
import { Box } from "lucide-react";

const designStack = [
  { name: "Figma", icon: SiFigma },
  { name: "Photoshop", icon: SiAdobephotoshop },
  { name: "Illustrator", icon: SiAdobeillustrator },
  { name: "Webflow", icon: SiWebflow },
  { name: "Framer", icon: SiFramer },
  { name: "Spline", icon: Box },
];

const devStack = [
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss3 },
  { name: "JavaScript", icon: SiJavascript },
  { name: "React", icon: SiReact },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "GitHub", icon: SiGithub },
  { name: "Vercel", icon: SiVercel },
];

const TechCard = ({
  name,
  Icon,
}: {
  name: string;
  Icon: React.ComponentType<{ className?: string }>;
}) => {
  return (
    <div
      className={cn(
        "flex h-24 w-24 flex-col items-center justify-center gap-2 rounded-xl border p-4 shadow-sm",
        "border-gray-200/10 bg-[#121212] hover:bg-[#1a1a1a] transition-colors"
      )}
    >
      <Icon className="text-3xl text-white" />
      <p className="text-sm text-white">{name}</p>
    </div>
  );
};

export function TechMarquee() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-4 py-6">
      {/* Design Stack */}
      <div className="relative w-[70%] mx-auto">
        <Marquee pauseOnHover className="[--duration:35s]">
          {designStack.map(({ name, icon: Icon }) => (
            <TechCard key={name} name={name} Icon={Icon} />
          ))}
        </Marquee>
        {/* Gradient edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#111111] via-[#111111] to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#111111] via-[#111111] to-transparent"></div>
      </div>

      {/* Dev Stack*/}
      <div className="relative w-[95%]">
        <Marquee reverse pauseOnHover className="[--duration:40s]">
          {devStack.map(({ name, icon: Icon }) => (
            <TechCard key={name} name={name} Icon={Icon} />
          ))}
        </Marquee>
        {/* Gradient Edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#111111] via-[#111111] to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#111111] via-[#111111] to-transparent"></div>
      </div>
    </div>
  );
}
