import { SiNextdotjs, SiFigma } from "react-icons/si";
import Image from "next/image";
import { TechMarquee } from "@/components/TechMarquee";

const SellingPoints = () => {
  return (
    <div className="lg:min-h-screen mt-6 py-16">
      <section className="mx-auto padded">
        {/* Header Texts */}
        <div className="space-y-6 text-center mb-14 mt-6">
          <h1 className="font-heading text-gradient max-w-4xl text-4xl md:text-5xl lg:text-5xl font-bold leading-tight md:leading-[1.25] mx-auto overflow-visible">
            Your flexible, future-ready <br className="hidden md:block" />
            tech team
          </h1>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From sleek interfaces to powerful systems — we design, build, and
            refine digital solutions that adapt to your needs and scale with
            you.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center">
          {/* Card 1 */}
          <div className="card h-[400px] max-w-sm w-full mx-auto flex flex-col justify-between bg-[#111111] p-6 rounded-xl shadow-lg shadow-black/30 hover:shadow-black/40 transition-shadow">
            <div>
              <h3 className="text-white text-xl font-semibold mb-2">
                Scale as you grow
              </h3>
              <p className="text-gray-400">
                From landing pages to full platforms, we scale with your needs,
                no disruption, just evolution.
              </p>
            </div>

            <div className="mt-4 w-full h-44 relative rounded-lg overflow-hidden shadow-md">
              <Image
                src="/real_deskmobile.png"
                alt="Desktop - Mobile Layout"
                fill
                className="object-cover w-full pointer-events-none"
                quality={100}
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="card h-[400px] max-w-sm w-full mx-auto flex flex-col justify-between bg-[#111111] p-6 rounded-xl shadow-lg shadow-black/30 hover:shadow-black/40 transition-shadow">
            <div className="w-[92%] mx-auto">
              <h3 className="text-white text-xl font-semibold mb-2">
                Blazing-fast delivery
              </h3>
              <p className="text-gray-400">
                Most requests are completed within 48 hours. Quick responses, no
                compromise on quality.
              </p>
            </div>
            <div className="mt-4 space-y-4 w-[90%] mx-auto">
              <div className="bg-gray-800/80 rounded-md p-4 text-sm text-gray-300 flex items-center justify-between shadow-sm hover:bg-gray-800 transition-colors">
                <div className="flex gap-4 items-center">
                  <div>
                    <SiFigma size={36} className="text-[#a259ff]" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span>🎨 Homepage redesign</span>
                    <span className="text-gray-500 ">🕒 Today, 09:02AM</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800/80 rounded-md p-4 text-sm text-gray-300 flex items-center justify-between shadow-sm hover:bg-gray-800 transition-colors">
                <div className="flex gap-4 items-center">
                  <div>
                    <SiNextdotjs size={36} className="text-white" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span>🌀 Stripe integration</span>
                    <span className="text-gray-500">🕒 Today, 2:18PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card h-[400px] max-w-sm w-full mx-auto flex flex-col justify-between bg-[#111111] p-6 rounded-xl shadow-lg shadow-black/30 hover:shadow-black/40 transition-shadow">
            <div>
              <h3 className="text-white text-xl font-semibold mb-2">
                Problems → Solutions → Results
              </h3>
              <p className="text-gray-400">
                This is our rhythm: diagnose issues, implement fixes, and
                deliver measurable improvements.
              </p>
            </div>
            <div className="mt-4 w-full">
              {/* Chat container */}
              <div className="space-y-3 w-full">
                {/* Client message */}
                <div className="flex justify-start">
                  <div className="max-w-[80%]">
                    <div className="bg-gray-700/90 text-gray-50 px-4 py-3 rounded-r-xl rounded-bl-xl text-xs leading-snug shadow-sm">
                      We need our website to convert better, it's not driving
                      enough sales.
                    </div>
                    <div className="text-xs text-gray-500 mt-1 pl-1">
                      11:59 a.m
                    </div>
                  </div>
                </div>

                {/* reply */}
                <div className="flex justify-end">
                  <div className="max-w-[80%]">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-3 rounded-l-xl rounded-br-xl text-xs leading-snug shadow-md">
                      Let's optimize it. Our last redesign boosted conversions
                      by 41% 🚀
                      <br />
                      <span className="opacity-90">
                        Sending proposal now...
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 mt-1 pr-1 text-right">
                      12:03 p.m
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Larger Collaboration Card */}
        <div className="card mt-10">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="w-full md:w-1/2">
              <h3 className="text-white text-2xl font-semibold mb-4">
                Interfaces that flow and feel alive
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Every detail is crafted for motion, clarity, and speed. From
                microinteractions to launch-ready pages, your product feels
                effortless | because it is.
              </p>
            </div>
            <div className=" w-full md:w-1/2 relative ">
              <TechMarquee />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SellingPoints;
