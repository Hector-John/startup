import Heading from "@/components/ui/header";
import Image from "next/image";
import { UserCheck, Rocket, Eye, Cpu, ThumbsUp, CodeXml, Headset } from "lucide-react";
import { companyName } from '@/lib/config'
import Process from "@/components/Process";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import BannerCta from "@/components/BannerCta";
import Cta from "@/components/Cta";


const AboutPage = () => {
  return (
    <div className="">
      {/* Hero Heading */}
      <Heading
        bgImage="/about_bg.png"
        title={<>About us</>}
        subtitle="A digital-first tech company building sleek, fast, and scalable web solutions.
We design and develop custom websites and platforms that elevate brands and drive results.
Everything we create is built for clarity, performance, and long-term value."
      />

      {/* Main About Section */}
      <div className="padded">
        <div className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative w-full h-72 md:h-[500px] rounded-xl overflow-hidden border border-slate-800/50 ">
            <Image
              src="/about.png"
              alt="About Kheem Tech"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Text Content */}
          <div className="space-y-5 ">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient leading-tight">
              Crafting Tech That Works,<br className="hidden md:block" />{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Beautifully and Intelligently
              </span>
            </h2>
            <div className="space-y-4">
              <p className="text-gray-500 leading-relaxed ">
                {companyName} is a creative technology company helping modern brands thrive through sleek, scalable, and performance-driven digital solutions. We’re not just developers, we’re problem-solvers, designers, and strategists who blend clean code with intuitive design to build experiences that are fast, future ready, and built to last.
              </p>
              <p className="text-gray-500 leading-relaxed ">
                From landing pages to full platforms, we craft web products that are as functional as they are forward thinking, always tailored to the unique goals of startups and growing teams. No noise, just clarity, innovation, and digital work that speaks for itself.
              </p>
              <p className="text-gray-500 leading-relaxed ">
                With deep expertise in web development, UI/UX design, and product strategy, we don’t just launch beautiful interfaces, we engineer systems that scale with your business. Our work is grounded in thoughtful planning, technical precision, and a belief that every digital experience should move users and deliver results.
              </p>
            </div>

          </div>
        </div>


        {/* Stats Section */}
        <div className="w-full hidden md:grid grid-cols-1 sm:grid-cols-3 gap-6 py-3">
          {/* Stat 1 */}
          <div className="flex gap-4 items-center justify-center p-4 w-full">
            <div className="p-5 rounded-full border border-gray-800 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 flex-shrink-0">
              <CodeXml size={28} className="text-gray-300" />
            </div>
            <div className="flex flex-col">
              <p className="font-medium text-2xl text-gray-100">129+</p>
              <p className="text-gray-400">Projects delivered</p>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex gap-4 items-center justify-center p-4 w-full">
            <div className="p-5 rounded-full border border-gray-800 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 flex-shrink-0">
              <ThumbsUp size={28} className="text-gray-300" />
            </div>
            <div className="flex flex-col">
              <p className="font-medium text-2xl text-gray-100">97%</p>
              <p className="text-gray-400">Customer satisfaction</p>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex gap-4 items-center justify-center p-4 w-full">
            <div className="p-5 rounded-full border border-gray-800 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 flex-shrink-0">
              <Headset size={28} className="text-gray-300" />
            </div>
            <div className="flex flex-col">
              <p className="font-medium text-2xl text-gray-100">24/7</p>
              <p className="text-gray-400">Customer support</p>
            </div>
          </div>
        </div>

        {/* Our Foundation Section */}
        <div className="my-16 max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-blue-400/90 uppercase tracking-wider">
              Our Principles
            </span>
            <h3 className="text-4xl md:text-5xl lg:text-5xl font-bold text-gradient font-heading mt-3">
              The Foundation of Everything We Build
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pillar 1 */}
            <div className="card hover:border-blue-400/30 transition-all">
              <div className="flex items-start gap-5">
                <div className="bg-blue-500/10 p-3 rounded-lg">
                  <UserCheck className="text-blue-400 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-3">People-first Design</h4>
                  <p className="text-slate-400">
                    Every interface is built around real users, clean layouts, intuitive flows, and responsive systems that reduce friction and elevate experience.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="card hover:border-blue-400/30 transition-all">
              <div className="flex items-start gap-5">
                <div className="bg-blue-500/10 p-3 rounded-lg">
                  <Rocket className="text-blue-400 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-3">Speed & Scalability</h4>
                  <p className="text-slate-400">
                    We code for growth. From MVPs to full platforms, our work is engineered to scale, load fast, and adapt as your business evolves.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="card hover:border-blue-400/30 transition-all">
              <div className="flex items-start gap-5">
                <div className="bg-blue-500/10 p-3 rounded-lg">
                  <Eye className="text-blue-400 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-3">Clarity Over Clutter</h4>
                  <p className="text-slate-400">
                    Whether it's the copy, layout, or flow, everything is built with intentional simplicity that drives focus, not confusion.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="card hover:border-blue-400/30 transition-all">
              <div className="flex items-start gap-5">
                <div className="bg-blue-500/10 p-3 rounded-lg">
                  <Cpu className="text-blue-400 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-3">Tech That Works</h4>
                  <p className="text-slate-400">
                    We don't chase trends. We build stable, secure, and elegant digital products that actually solve problems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Process />
      </div>
      <BannerCta />
      <div className="padded ">
        <Team />
        <Testimonials />
      </div>
      <div className="padded my-24 ">
        <Cta />
      </div>
    </div>
  );
};

export default AboutPage;