import React from "react";
import Button from "@/components/button";
import ServicesCta from "./ServicesCta";
import Process from "@/components/Process";
import Heading from "@/components/ui/header";
import { services } from "@/lib/config";


const ServicesPage: React.FC = () => {
  return (
    <div className='mb-8' >

      <Heading
        bgImage="/servicesCta.png"
        title={ <> Services </> }
        subtitle="From idea to deployment, we handle the heavy lifting, smart design, efficient code, and reliable delivery."
      />

      <section className=" mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 padded ">
          {services.map((service, index) => (
            <div
              key={index}
              className="card bg-gray-900/50 border border-gray-800 hover:border-blue-500/30 rounded-2xl p-6 transition-all flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-blue-500/10 rounded-lg">
                    {service.icon}
                  </div>
                  <h3 className="text-white text-lg font-semibold">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3 text-sm text-gray-300">
                  {service.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <ServicesCta />
        <Process />

      </section>
    </div>
  );
};

export default ServicesPage;
