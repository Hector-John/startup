"use client";

import Image from "next/image";
import { Phone, Mail } from "lucide-react";

const ServicesCta = () => {
  return (
    <div className="relative w-full py-24 px-6 md:px-16 lg:px-24 flex items-center justify-center min-h-[350px] overflow-hidden">
      <Image
        src="/servicesCta.png"
        alt="Services CTA"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="z-0"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80 z-10" />

      {/* Top Gradient Overlay */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-black to-transparent z-15" />

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black to-transparent z-15" />

      {/* Content */}
      <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 items-center gap-12 w-full max-w-6xl">
        {/* Left: Text */}
        <div className="text-left">
          <p className="text-lg md:text-xl mb-2 text-blue-400 font-medium">
            Simple, Easy, Quick Steps
          </p>
          <h2 className="text-3xl text-gradient md:text-5xl font-bold mb-4 leading-tight">
            Do you have a project in mind?
          </h2>
          <p className="text-gray-300 max-w-xl">
            Let's bring your vision to life. Get in touch today and let's create
            something amazing together.
          </p>
        </div>

        {/* Right: Contact Info */}
        <div className="flex flex-col items-center space-y-6">
          {/* Phone Contact */}
          <div className="flex items-center gap-6 w-full max-w-xs">
            <div className="p-5 rounded-full border border-gray-800 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 flex-shrink-0">
              <Phone size={24} className="text-gray-200" />
            </div>
            <div className="flex-1">
              <p className="text-gray-300 font-semibold">
                For Urgent Assistance:
              </p>
              <a
                href="tel:+254769403162"
                className="text-blue-400 underline-offset-4 hover:underline hover:text-blue-300 bg-transparent border-none shadow-none p-0 h-auto"
              >
                Call us
              </a>
            </div>
          </div>

          {/* Email Contact */}
          <div className="flex items-center gap-6 w-full max-w-xs">
            <div className="p-5 rounded-full border border-gray-800 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 flex-shrink-0">
              <Mail size={24} className="text-gray-200" />
            </div>
            <div className="flex-1">
              <p className="text-gray-300 font-semibold">Email Us Anytime:</p>
              <a
                href="mailto:hakheem67@gmail.com"
                className="text-blue-400 underline-offset-4 hover:underline hover:text-blue-300 bg-transparent border-none shadow-none p-0 h-auto"
              >
                Send an email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCta;
