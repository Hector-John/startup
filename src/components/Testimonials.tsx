"use client";

import { FaStar } from "react-icons/fa";
import Image from "next/image";

import { testimonialData } from "../lib/config";
import { CompanyMarquee } from "./CompanyMarquee";

const Testimonials = () => {
  return (
    <div className="lg:min-h-screen padded">
      {/* Header */}
      <div className="space-y-5 text-center mb-14 mt-10">
        <h1 className="font-heading  text-gradient max-w-4xl text-xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-medium leading-[1.5] mx-auto">
          Don't just take our <br className="hidden md:block" />
          word for it
        </h1>
        <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
          See what our happy clients have to say about our services and
          solutions.
        </p>
      </div>

      {/* Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-5 lg:gap-6 mt-8 mb-12">
        {testimonialData.map((testimonial, index) => (
          <div
            key={index}
            className="card rounded-xl flex flex-col h-full transition-all hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10"
          >
            {/* Top Section - Avatar + Info */}
            <div className="flex gap-4 items-center">
              <div className="shrink-0">
                <Image
                  src={testimonial.image}
                  alt={`${testimonial.name}`}
                  width={56}
                  height={56}
                  className="rounded-full object-cover w-14 h-14 border-2 border-blue-500/30"
                />
              </div>
              <div className="text-start">
                <h3 className="text-lg font-semibold text-white">
                  {testimonial.name}
                </h3>
                <p className="text-gray-300 font-normal text-sm">
                  {testimonial.role} at{" "}
                  <span className="text-blue-400 font-medium">
                    {testimonial.company}
                  </span>
                </p>
              </div>
            </div>

            {/* Review Text */}
            <div className="mt-5 mb-6 flex-grow">
              <p className="text-gray-200 leading-6 font-normal italic">
                "{testimonial.review}"
              </p>
            </div>

            {/* Bottom Section - Rating + Company */}
            <div className="mt-auto pt-4 border-t border-gray-800/50">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-1">
                  {Array.from({ length: testimonial.rating }).map((_, idx) => (
                    <span key={idx} className="text-yellow-400">
                      <FaStar size={14} />
                    </span>
                  ))}
                </div>
                <div className="flex items-center text-gray-300 text-sm font-medium">
                  {testimonial.icon && (
                    <span className="mr-2 text-blue-400">
                      {testimonial.icon}
                    </span>
                  )}
                  <span>{testimonial.company}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <CompanyMarquee marqueeSpeed={70} />
    </div>
  );
};

export default Testimonials;
