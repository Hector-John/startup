import React from "react";
import Button from "@/components/button";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaPencilRuler,
  FaCreditCard,
  FaPaintBrush,
  FaBullhorn,
} from "react-icons/fa";
import ServicesCta from "./ServicesCta";
import Process from "@/components/Process";
import Heading from "@/components/ui/header";


const services = [
  {
    title: "Web Development",
    icon: <FaLaptopCode className="text-xl text-blue-400" />,
    description: "Custom web apps tailored to your needs.",
    points: [
      "Modern, scalable stack",
      "Fully responsive designs",
      "Optimized for speed & SEO",
      "Built for growth",
    ],
  },
  {
    title: "Software Development",
    icon: <FaMobileAlt className="text-xl text-blue-400" />,
    description: "Robust backend logic for modern businesses.",
    points: [
      "Full-stack solutions",
      "Secure data architecture",
      "Process automation",
      "Cloud-native builds",
    ],
  },
  {
    title: "UI/UX Design",
    icon: <FaPencilRuler className="text-xl text-blue-400" />,
    description: "Interfaces that are beautiful, intuitive, and fast.",
    points: [
      "Figma-based workflows",
      "Component-level UI kits",
      "User journey mapping",
      "Prototyping & testing",
    ],
  },
  {
    title: "Payment Integrations",
    icon: <FaCreditCard className="text-xl text-blue-400" />,
    description: "Seamless, secure payments made simple.",
    points: [
      "Stripe, PayPal, Flutterwave",
      "Recurring billing support",
      "Custom checkout flows",
      "PCI-compliant practices",
    ],
  },
  {
    title: "Visual & Graphic Design",
    icon: <FaPaintBrush className="text-xl text-blue-400" />,
    description: "Brand visuals and creatives that stand out.",
    points: [
      "Logo & identity design",
      "Brand kits & decks",
      "Illustration support",
      "Marketing asset design",
    ],
  },
  {
    title: "Digital Strategy",
    icon: <FaBullhorn className="text-xl text-blue-400" />,
    description: "A clear plan to build presence and traffic.",
    points: [
      "SEO-driven structures",
      "Social campaign support",
      "Analytics-based improvement",
      "Long-term growth systems",
    ],
  },
];

const ServicesPage: React.FC = () => {
  return (
    <div className='mb-8' >

<Heading
  bgImage="/servicesCta.png"
  title={
    <>
    Services
    </>
  }
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

      <ServicesCta/>
<Process/>

      </section>
    </div>
  );
};

export default ServicesPage;
