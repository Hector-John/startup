"use client";

import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import {
  FiShoppingBag,
  FiCoffee,
  FiBook,
  FiMusic,
  FiCamera,
  FiBriefcase,
  FiHeart,
  FiTruck,
  FiLayers,
  FiAward,
  FiHome,
} from "react-icons/fi";

type Company = {
  name: string;
  industry?: string;
  icon: React.ComponentType<{ className?: string }>;
};

type CompanyMarqueeProps = {
  showHeader?: boolean;
  className?: string;
  marqueeSpeed?: number;
};

const companies: Company[] = [
  { name: "Blaze na Yonga ", industry: "E-commerce", icon: FiShoppingBag },
  { name: "Bean There", industry: "Café Chain", icon: FiCoffee },
  { name: "Novel Ideas", industry: "Publishing", icon: FiBook },
  { name: "Ody Events", industry: "Events Entertainment", icon: FiMusic },
  { name: "Frame & Focus", industry: "Photography", icon: FiCamera },
  {
    name: "SixPoint Victoria",
    industry: "Hospitality",
    icon: FiHome,
  },
  {
    name: "Executive Suite",
    industry: "Business Solutions",
    icon: FiBriefcase,
  },
  { name: "Vitalife", industry: "Healthcare", icon: FiHeart },
  { name: "Global Routes", industry: "Logistics", icon: FiTruck },
  { name: "Lablab Studios", industry: "Design Agency", icon: FiLayers },
  { name: "IYF Academy", industry: "Education", icon: FiAward },
];

const CompanyCard = ({ name, industry, icon: Icon }: Company) => {
  return (
    <div className="flex items-center gap-3 h-16 px-4 rounded-lg group">
      <div className="p-2 rounded-md bg-gray-900/80 border border-gray-800 group-hover:border-gray-700 transition-colors">
        <Icon className="text-lg text-gray-100" />
      </div>
      <div>
        <h3 className="text-gray-100 font-medium text-sm">{name}</h3>
        {industry && <p className="text-gray-400 text-xs mt-0.5">{industry}</p>}
      </div>
    </div>
  );
};

export function CompanyMarquee({
  showHeader = false,
  className,
  marqueeSpeed = 60,
}: CompanyMarqueeProps) {
  return (
    <div className={cn("relative w-[80%] mx-auto overflow-hidden", className)}>
      {showHeader && (
        <div className="mb-8 text-center">
          <h3 className="text-gray-300 text-lg font-medium mb-2">
            Trusted by innovative companies
          </h3>
          <p className="text-gray-500 text-sm max-w-lg mx-auto">
            We've partnered with industry leaders to deliver exceptional results
          </p>
        </div>
      )}

      <div className="relative">
        <Marquee
          pauseOnHover
          className={cn("[--gap:1.5rem]", showHeader ? "py-4" : "py-8")}
          style={{ "--duration": `${marqueeSpeed}s` } as React.CSSProperties}
        >
          {companies.map((company) => (
            <CompanyCard key={company.name} {...company} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent" />
      </div>
    </div>
  );
}
