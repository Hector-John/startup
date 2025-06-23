"use client";

import Image from "next/image";
import { ServicesMarquee } from "@/components/ServicesMarquee";
import { ChartNoAxesCombined, MousePointerClick } from "lucide-react";

const TechRange = () => {
  return (
    <div className="padded mx-auto lg:min-h-screen py-12">
      {/* Header texts */}
      <div className="space-y-8 text-center mb-14 mt-10">
        <h1 className="font-heading text-gradient max-w-4xl pb-2 text-4xl md:text-5xl lg:text-5xl font-bold leading-tight md:leading-[1.25] mx-auto overflow-visible">
          Our team offers a <br className="hidden md:block" />
          wide range of services
        </h1>

        <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
          From landing pages to full websites, UI/UX to ongoing updates, our
          expert designers bring your vision to life, hassle-free.
        </p>
      </div>
      <ServicesMarquee />

      {/* Image container */}
      <div className="relative h-[80vh] w-full my-10 rounded-xl">
        <Image
          src="/contact.jpg"
          alt="Templates"
          fill
          className="object-cover object-top rounded-xl"
          quality={100}
        />
      </div>

      {/* Stats Section */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-6 py-8">
        {/* Stat 1 */}
        <div className="flex gap-4 items-center justify-center p-4 w-full">
          <div className="p-5 rounded-full border border-gray-800 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 flex-shrink-0">
            <ChartNoAxesCombined size={28} className="text-gray-300" />
          </div>
          <div className="flex flex-col">
            <p className="font-medium text-2xl text-gray-100">30%</p>
            <p className="text-gray-400">More conversions</p>
          </div>
        </div>

        {/* Stat 2 */}
        <div className="flex gap-4 items-center justify-center p-4 w-full">
          <div className="p-5 rounded-full border border-gray-800 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 flex-shrink-0">
            <MousePointerClick size={28} className="text-gray-300" />
          </div>
          <div className="flex flex-col">
            <p className="font-medium text-2xl text-gray-100">50%</p>
            <p className="text-gray-400">More engagement</p>
          </div>
        </div>

        {/* Stat 3 */}
        <div className="flex gap-4 items-center justify-center p-4 w-full">
          <div className="p-5 rounded-full border border-gray-800 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 flex-shrink-0">
            <MousePointerClick size={28} className="text-gray-300" />
          </div>
          <div className="flex flex-col">
            <p className="font-medium text-2xl text-gray-100">97%</p>
            <p className="text-gray-400">Customer satisfaction</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechRange;
