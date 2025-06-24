"use client";

import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import {
  FiCode,
  FiLayout,
  FiPenTool,
  FiCpu,
  FiServer,
  FiSmartphone,
  FiDatabase,
  FiCloud,
} from "react-icons/fi";

const services = [
  {
    title: "Web Design",
    description: "Beautiful interfaces",
    icon: FiLayout,
  },
  {
    title: "Web Development",
    description: "Fast, modern websites",
    icon: FiCode,
  },
  {
    title: "Product Design",
    description: "User-centered experiences",
    icon: FiPenTool,
  },
  {
    title: "Software Engineering",
    description: "Scalable solutions",
    icon: FiCpu,
  },
  {
    title: "Graphic Design",
    description: "Visual branding",
    icon: FiPenTool,
  },
  {
    title: "Web Maintenance",
    description: "Ongoing support",
    icon: FiServer,
  },
  {
    title: "Mobile Apps",
    description: "iOS & Android",
    icon: FiSmartphone,
  },
  {
    title: "Cloud Solutions",
    description: "Secure infrastructure",
    icon: FiCloud,
  },
];

const ServiceCard = ({
  title,
  description,
  icon: Icon,
}: (typeof services)[number]) => {
  return (
    <div
      className={cn(
        "card h-16 md:h-18 lg:h-20 w-fit px-3 md:px-4 py-1 md:py-4 rounded-xl border",
        "hover:bg-gray-800 transition-colors",
        "flex items-center gap-3 md:gap-4"
      )}
    >
      <div className="p-2 md:p-3 rounded-lg bg-gray-800/50">
        <Icon className="text-lg md:text-xl text-white" />
      </div>
      <div>
        <h3 className="text-white font-medium text-sm md:text-base">{title}</h3>
        <p className="text-gray-400 text-xs md:text-sm mt-0.5 md:mt-1">{description}</p>
      </div>
    </div>
  );
};

export function ServicesMarquee() {
  return (
    <div className="relative w-[90%] mx-auto overflow-hidden py-6 md:py-8">
      <div className="relative">
        <Marquee pauseOnHover className="[--duration:60s]">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </Marquee>
        {/* Gradient edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#000] via-[#000]/80 to-transparent "></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#000] via-[#000]/80 to-transparent "></div>
      </div>
    </div>
  );
}