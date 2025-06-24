"use client";

import React from "react";
import { faqData } from "../lib/config";

const Faq = () => {
  return (
    <div className="padded lg:min-h-screen lg:pt-20">
      {/* Header Texts */}
      <div className="space-y-4 text-center mb-8 mt-6">
         <h1 className="font-heading text-gradient max-w-4xl text-4xl md:text-5xl lg:text-5xl font-bold leading-tight md:leading-[1.25] mx-auto overflow-visible">
          Your questions, answered
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Whether you're a new client or a long-time partner, we're here to
          help. Below are answers to the most common questions
        </p>
      </div>

      {/* Accordion */}
      <div className="max-w-4xl mx-auto py-8 px-6">
        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <details
              key={index}
              className="group card [&_summary::-webkit-details-marker]:hidden transition-all duration-300 overflow-hidden"
            >
              <summary className="flex cursor-pointer items-center justify-between text-white font-medium hover:text-gray-300 transition">
                <h3>{faq.question}</h3>
                <svg
                  className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="mt-4 leading-relaxed text-gray-400 transition-all duration-300 ease-in-out">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
