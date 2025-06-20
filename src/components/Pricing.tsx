"use client";

import Button from "@/components/button";

const Pricing = () => {
  return (
    <div className="padded py-20 min-h-screen flex flex-col justify-center">
      {/* Header */}
      <div className="w-full pt-8 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 lg:gap-8 mb-16">
        <h1 className="font-heading text-gradient text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
          Services
        </h1>
        <p className="text-gray-400 text-sm sm:text-base  leading-relaxed">
          Every build. Every design. Every line of code,{" "}
          <br className="hidden sm:inline" />
          crafted to solve real problems
          <br className="hidden sm:inline" /> and create lasting impact.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Column 1 */}
        <div className="card p-8 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-blue-500/30 transition-all h-full flex flex-col justify-between">
          <div>
            <div className="mb-6">
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Websites & Platforms
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                From sleek marketing websites to robust digital platforms, fully
                custom, responsive, and optimized for growth.
              </p>
            </div>
            <ul className="text-gray-400 space-y-3 mb-8">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Custom design & development</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Mobile responsive</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Payment sytems integration</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>CMS or headless options</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Strategy-led builds</span>
              </li>
            </ul>
          </div>
          <Button variant="secondary" className="w-full">
            Request a quote
          </Button>
        </div>

        {/* Column 2 - Featured */}
        <div className="card p-8 rounded-2xl bg-gray-900 border border-blue-500/20 hover:border-blue-500/40 transition-all h-full flex flex-col justify-between relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-30 pointer-events-none"></div>
          <div>
            <div className="mb-6">
              <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Product & App Design
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We craft intuitive user interfaces and seamless experiences for
                SaaS tools, dashboards, and web apps.
              </p>
            </div>
            <ul className="text-gray-400 space-y-3 mb-8">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>UX research & wireframes</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>UI design in Figma</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Developer-ready handoff</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Ongoing design support</span>
              </li>
            </ul>
          </div>
          <Button variant="glow" className="w-full">
            Start your project
          </Button>
        </div>

        {/* Column 3 stacked cards */}
        <div className="flex flex-col gap-8 h-full">
          <div className="card p-8 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-blue-500/30 transition-all flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Creative Collaboration
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                For startups, studios, or teams looking for a dependable
                creative or technical partner to build with.
              </p>
            </div>
            <Button variant="primary" className="w-full">
              Let's collaborate
            </Button>
          </div>

          <div className="card p-8 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-blue-500/30 transition-all flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Quick Fixes & Upgrades
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Perfect for small, fast changes — component fixes, layout
                polish, or quick design tweaks.
              </p>
            </div>
            <Button variant="outline" className="w-full">
              Submit a task
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
