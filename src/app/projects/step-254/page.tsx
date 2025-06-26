"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading from "@/components/ui/header";
import Button from "@/components/button";


// const wireframes = [1, 2, 3, 4, 5, 6];
const flows = [1, 2];
const wireframes = [
  "wireframe1.png",
  "wireframe2.png",
  "wireframe3.png",
  "wireframe4.png",
  "wireframe5.png",
  "wireframe6.png"
];

const Step254CaseStudy = () => {
  const wireframeSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 10000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerMode: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerMode: false
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '20px'
        }
      }
    ]
  };

  return (
    <main className="text-white ">

      {/* Header Texts */}
      <div className="space-y-6 text-center my-24 lg:my-16 lg:mt-40">
        <h1 className="font-heading text-gradient max-w-4xl text-4xl md:text-5xl lg:text-5xl font-bold leading-tight md:leading-[1.25] mx-auto overflow-visible">
          Step 254
        </h1>

        <p className="text-gray-400 px-4 lg:px-0 lg:text-lg max-w-2xl mx-auto">
          A curated second-hand shoe shopping experience built for Kenya's urban market. Designed to solve access, trust, and convenience challenges in the mitumba industry.
        </p>

        <div className="flex items-center justify-center gap-3">
          <div className="relative h-10 w-10 rounded-full overflow-hidden">
            <Image
              src="/Hector.png"
              alt="Hector John"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-gray-500 text-sm">
            Case study by Hector John • 12 min read
          </p>
        </div>

        <div className="pt-4 flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
            Mobile App
          </span>
          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
            E-commerce
          </span>
          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
            2025
          </span>
        </div>
      </div>

      {/* final design image */}
      <div className="overflow-hidden my-8 md:my-12 lg:my-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-[4/3] md:aspect-video lg:aspect-[16/9] rounded-xl md:rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/eastside.png"
              alt="Final Design of Step 254 App"
              fill
              className="object-cover"
              quality={90}
              priority
            />
          </div>
        </div>
      </div>


      <div className="padded mx-auto font-sans ">

        {/* About Step 254  */}
        <section className="grid lg:h-[50vh] items-center lg:my-0 my-12 md:my-20 grid-cols-1 max-w-5xl mx-auto md:grid-cols-2 px-4">
          <div>
            <h1 className="text-3xl font-heading font-semibold pb-6 md:pb-0 text-gradient leading-tight md:leading-[1.5]">
              About
            </h1>
          </div>
          <div className="relative">
            <p className="text-sm text-gray-300 leading-relaxed pl-0 md:pl-6 border-l-0 md:border-l-2 md:border-gray-600">
              Step 254 is a mobile platform that connects Kenyans to curated, affordable, and verified second-hand (mitumba) shoes, delivered right to their door. Born out of the everyday struggles of navigating chaotic markets and unreliable sellers, Step254 brings convenience, trust, and variety to the heart of Kenya’s booming mitumba culture. Whether you're looking for quality kicks on a budget or rare finds in your size, Step254 makes thrifting smarter, faster, and safer.
            </p>
          </div>
        </section>

        {/* Problem + Solution  */}
        <section className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto px-4 mt-16 md:mt-24">
          {/* Challenge Card */}
          <div className="group bg-gradient-to-br from-gray-900/50 to-gray-900/0 p-6 md:p-8 rounded-xl border border-gray-800/50 hover:border-gray-700/60 transition-all duration-300 ">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-6 flex items-center justify-center bg-red-400/10 rounded-full">
                <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gradient">The Challenge</h2>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm md:text-[15px]">
              Kenya's mitumba shoe market is a multi-billion shilling industry. But shopping in it is time-consuming, inconvenient, and unreliable. Crowded markets, limited selection, and uncertain quality prevent customers from finding the shoes they need.
            </p>
          </div>

          {/* Solution Card */}
          <div className="group bg-gradient-to-br from-gray-900/50 to-gray-900/0 p-6 md:p-8 rounded-xl border border-gray-800/50 hover:border-cyan-400/20 transition-all duration-300 ">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-6 flex items-center justify-center bg-cyan-400/10 rounded-full">
                <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-linear">The Solution</h2>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm md:text-[15px]">
              Step254 brings mitumba shoes online. We source from verified sellers, inspect and list high-quality shoes, and deliver them across Kenya. The app offers filtering, mobile payments, transparent listings, and real-time delivery tracking, bridging affordability and reliability.
            </p>
          </div>
        </section>

        {/* PAIN POINTS  */}
        <section className="space-y-8 max-w-6xl px-4 my-24 lg:mt-32 mx-auto">
          <div className="text-left lg:text-center lg:mb-4">
            <h2 className="text-4xl font-bold text-gradient font-heading mb-2">Pain Points We Solved</h2>
            <p className="text-gray-400 max-w-3xl mx-0 lg:mx-auto">
              How we transformed Kenya's mitumba shoe shopping experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Chaotic Market Experience",
                description: "Traditional mitumba shopping is physically exhausting and unpredictable. Step 254 lets users skip the hassle by browsing curated listings from the comfort of their phone.",
                icon: "🚶‍♂️"
              },
              {
                title: "Unreliable Product Quality",
                description: "Many buyers fear ending up with worn-out or misrepresented shoes. Step 254 ensures all products are inspected, photographed clearly, and presented with honest descriptions.",
                icon: "🔍"
              },
              {
                title: "Low Buyer Confidence",
                description: "Trust is a major issue when dealing with unverified sellers. Step 254 acts as the bridge — managing transactions, delivery, and ensuring sellers meet our standards.",
                icon: "🤝"
              },
              {
                title: "Unaffordable Retail Options",
                description: "Retail prices often exclude lower-income buyers looking for quality kicks. By sourcing directly from trusted mitumba dealers, Step 254 keeps prices low without compromising quality.",
                icon: "💰"
              }
            ]
              .map((point, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-900/60 to-gray-900/20 p-6 rounded-xl border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/5"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-2xl p-2 bg-gray-800/50 rounded-lg group-hover:bg-cyan-400/10 transition-colors">
                      {point.icon}
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-200 mb-2 group-hover:text-cyan-300 transition-colors">
                        {point.title}
                      </h3>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* USER PERSONAS */}
        <section className="max-w-6xl px-4 mx-auto my-24 lg:my-32">
          <div className="text-left lg:text-center mb-12 lg:mb-16">
            <h2 className="text-4xl font-bold text-gradient font-heading mb-2">
              Real People, Real Needs
            </h2>
            <p className="text-gray-400 max-w-3xl mx-0 lg:mx-auto">
              Step 254 serves Kenyans across lifestyles, making shoe shopping faster, safer, and more affordable.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                name: "Ley Walker",
                role: "University Student",
                age: 21,
                avatar: "🎓",
                need: "Loves fashion but struggles to find affordable, stylish shoes in her size without spending hours in busy markets.",
                help: "Step 254 offers curated listings with campus delivery and student-friendly pricing, letting her shop between classes without sacrificing style.",
                color: "purple"
              },
              {
                name: "Antwan Khaleed",
                role: "Junior Developer",
                age: 27,
                avatar: "💻",
                need: "Needs clean, professional sneakers but frustrated by overpriced retail and unverified online sellers.",
                help: "Gets trusted vendors, verified product photos, and smooth M-Pesa checkout, all delivered to his office in Nairobi.",
                color: "cyan"
              },
              {
                name: "Judith Awuor",
                role: "Entrepreneur",
                age: 33,
                avatar: "👩‍👧",
                need: "Juggles business, parenting, and church with no time to visit physical stalls or gamble on shoe quality.",
                help: "Filters by size/style, buys multiple pairs in one order, and receives them at home, all without stepping out.",
                color: "amber"
              }
            ].map((persona, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-b from-gray-900/60 to-gray-900/20 p-6 lg:p-8 rounded-xl border border-gray-700/50 hover:border-${persona.color}-400/40 transition-all duration-300 hover:shadow-lg overflow-hidden`}
              >
                {/* Persona Header */}
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-3xl p-3 rounded-lg bg-gray-800/50">
                    {persona.avatar}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-200">{persona.name}</h3>
                    <p className="text-gray-400 text-sm">
                      {persona.role} • {persona.age} years
                    </p>
                  </div>
                </div>

                {/* Pain Points */}
                <div className="mb-5">
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-2 h-2 rounded-full bg-${persona.color}-400`}></div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                      Challenges
                    </p>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {persona.need}
                  </p>
                </div>

                {/* Solution */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-2 h-2 rounded-full bg-${persona.color}-400`}></div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                      How We Help
                    </p>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {persona.help}
                  </p>
                </div>

                {/* Hover Effect Elements */}
                <div className={`absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-${persona.color}-900/5 to-transparent transition-opacity duration-300`}></div>
              </div>
            ))}
          </div>
        </section>


        {/* WIREFRAMES */}
        <section className="max-w-6xl px-4 mx-auto my-24 lg:my-32">
          <div className="text-left lg:text-center mb-12 lg:mb-8">
            <h2 className="text-4xl font-bold text-gradient font-heading mb-3">
              From Sketches to Structure
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
              Our wireframes established the app's core flow: from discovery to delivery, focusing on Kenya's unique mobile commerce behaviors.
            </p>
          </div>
          <div className="rounded-xl">
            <Slider {...wireframeSettings}>
              {wireframes.map((img, index) => (
                <div key={index} className="px-2">
                  <div className="rounded-xl overflow-hidden" style={{ height: '480px' }}>
                    <Image
                      src={`/${img}`}
                      alt={`Wireframe screen ${index + 1}`}
                      width={320}
                      height={480}
                      className="w-full h-full object-contain"
                      sizes="(max-width: 640px) 90vw,
                   (max-width: 768px) 45vw,
                   (max-width: 1024px) 30vw,
                   320px"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>

        

        {/* USER FLOWS */}
        <section className="space-y-8 max-w-6xl mx-auto">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-white">User Flows</h2>
            <p className="text-gray-300 leading-relaxed max-w-3xl">
              We mapped end-to-end flows — from browsing to delivery — to minimize friction and support repeat use.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {flows.map((n) => (
              <div key={n} className="rounded-xl overflow-hidden border border-gray-800/50 shadow-lg shadow-blue-500/10">
                <Image
                  src="/placeholder.png"
                  alt={`User Flow ${n}`}
                  width={700}
                  height={500}
                  className="w-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* FEATURES */}
        <section className="space-y-8 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white">Key App Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-900/20 to-transparent p-8 rounded-xl border border-blue-800/50">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">For Buyers</h3>
              <ul className="space-y-3">
                {[
                  "Curated listings with filters for size, brand, and price",
                  "Secure payments via M-Pesa and card",
                  "Real-time tracking and delivery updates",
                  "Saved searches and favorites"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-cyan-900/20 to-transparent p-8 rounded-xl border border-cyan-800/50">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">For Admins</h3>
              <ul className="space-y-3">
                {[
                  "Inventory upload and editing",
                  "Order and delivery management tools",
                  "Analytics dashboard with customer insights",
                  "Seller performance tracking"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* PITCH + ROADMAP */}
        <section className="space-y-8 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white">Investor Pitch</h2>
          <div className="bg-gradient-to-br from-gray-900/50 to-transparent p-8 rounded-xl border border-gray-800/50">
            <p className="text-gray-300 text-lg leading-relaxed">
              Step254 fills a gap in Kenya's e-commerce space by offering the first dedicated mitumba shoe
              delivery platform. We blend digital shopping, trust, and affordability — unlocking a massive
              underserved market.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900/30 p-6 rounded-xl border border-gray-800/50">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Revenue Model</h3>
              <ul className="space-y-3">
                {[
                  "Resell with sustainable margins",
                  "Delivery fees and upsells",
                  "Premium buyer features (early access, express delivery)",
                  "Seller subscription plans"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-900/30 p-6 rounded-xl border border-gray-800/50">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Roadmap</h3>
              <ul className="space-y-3">
                {[
                  "Phase 1: MVP & Supplier Onboarding (3 months)",
                  "Phase 2: Launch in Nairobi, influencer marketing (6 months)",
                  "Phase 3: Expansion to other cities (12 months)",
                  "Phase 4: Additional clothing categories (18 months)"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* METRICS */}
        <section className="space-y-8 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white">Metrics for Success</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "User growth", value: "10K+ MAU" },
              { name: "Retention", value: "30%+" },
              { name: "Order frequency", value: "2.5/month" },
              { name: "NPS Score", value: "50+" }
            ].map((metric, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900/50 to-transparent p-6 rounded-xl border border-gray-800/50 text-center">
                <p className="text-gray-400 text-sm mb-1">{metric.name}</p>
                <p className="text-2xl font-bold text-cyan-400">{metric.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-2xl mx-auto text-center space-y-6 py-16">
          <h2 className="text-3xl font-bold text-white">Want to Learn More?</h2>
          <p className="text-gray-300 text-lg">
            Step254 is currently in development. Connect with us to follow our progress.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <a
              href="https://linkedin.com/company/kheemtech"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/kheemtech"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg text-white font-medium transition-colors"
            >
              GitHub
            </a>
          </div>
        </section>
      </div>

    </main>
  );
};

export default Step254CaseStudy;