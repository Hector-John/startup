"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {motion} from 'framer-motion'


const wireframes = [
  "wireframe1.png",
  "wireframe2.png",
  "wireframe3.png",
  "wireframe4.png",
  "wireframe5.png",
  "wireframe6.png"
];

const userFlows = [
  {
    title: "User Flow Chart",
    description: "Visualizes the full user journey — from landing on the app to placing an order, highlighting decisions and touchpoints.",
    image: "/flow-chart.png",
    fallback: "/placeholder.png"
  },
  {
    title: "Task Flow",
    description: "Breaks down specific user goals like searching, filtering, and buying shoes into streamlined, step-by-step interactions.",
    image: "/task-flow.png",
    fallback: "/placeholder.png"
  },
  {
    title: "Site Map",
    description: "Outlines all key app screens and their connections, ensuring a clear and intuitive navigation experience.",
    image: "/sitemap.png",
    fallback: "/placeholder.png"
  },
  {
    title: "Information Architecture",
    description: "Defines how content is grouped, labeled, and accessed, making it easier for users to find what they need quickly.",
    image: "/ia-diagram.png",
    fallback: "/placeholder.png"
  }
];

const featuresData = [
  {
    title: "Smart Search",
    description: "Quickly filter by size, brand, condition, and price to find exactly what you need, no market digging, no wasted time",
    icon: (
      <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
      </svg>
    )
  },
  {
    title: "Flexible Payments",
    description: "Pay via M-Pesa, card, or crypto options, because convenience means meeting users where they are",
    icon: (
      <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    )
  },
  {
    title: "Live Tracking",
    description: "Track your order from pickup to delivery in real time, so you stay informed and never feel left in the dark",
    icon: (
      <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    )
  },
  {
    title: "Wishlists",
    description: "Save shoes you love and revisit them later, perfect for browsing on the go or waiting for payday",
    icon: (
      <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    title: "Verified Quality",
    description: "Each shoe is inspected and photographed before listing, so buyers can trust what they see is what they get",
    icon: (
      <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    )
  },
  {
    title: "Size Matching",
    description: "Listings include actual measurements to help you pick a perfect fit, avoiding disappointment or costly returns",
    icon: (
      <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  }
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
      <div className="space-y-4 text-center  my-28 lg:my-16 lg:mt-36">
        <h1 className="font-heading text-gradient max-w-4xl text-4xl md:text-5xl lg:text-5xl font-bold leading-tight md:leading-[1.25] lg:pb-1 mx-auto overflow-visible">
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
                color: "green"
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
        <section className="max-w-6xl px-4 mx-auto my-24 lg:my-32">
          <div className="lg:text-center text-left mb-12 ">
            <h2 className="text-4xl font-bold text-gradient lg:pb-1 font-heading mb-3">
              Mapping the Journey
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
              We visualized every touchpoint to create seamless experiences from discovery to delivery.
            </p>
          </div>

          <div className="space-y-16 md:space-y-20">
            {userFlows.map((flow, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8 items-center ${index % 2 === 0 ? '' : 'lg:[&>*:nth-child(1)]:order-2 lg:[&>*:nth-child(2)]:order-1'
                  }`}
              >
                {/* Text Content */}
                <div className="lg:col-span-1 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${index % 2 === 0 ? 'bg-cyan-400' : 'bg-purple-400'
                      }`}></div>
                    <h3 className="text-xl font-semibold text-white">{flow.title}</h3>
                  </div>
                  <p className="text-gray-400 pl-6">{flow.description}</p>
                </div>

                {/* Image */}
                <div className="lg:col-span-3 relative group">
                  <div className="aspect-[16/9] w-full rounded-xl overflow-hidden border border-gray-700/50 shadow-lg">
                    <Image
                      src={flow.image}
                      alt={flow.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = flow.fallback;
                      }}
                    />
                  </div>
                  <div className={`absolute inset-0 -z-10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${index % 2 === 0 ? 'bg-cyan-900/10' : 'bg-purple-900/10'
                    }`}></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="max-w-5xl px-4 mx-auto my-24 lg:my-32">
          <div className="text-left lg:text-center mb-12 lg:mb-16">
            <h2 className="text-4xl font-bold text-gradient font-heading mb-2">
              Key Features
            </h2>
            <p className="text-gray-400 max-w-3xl mx-0 lg:mx-auto">
              Step 254 puts Kenya's best mitumba finds at your fingertips, built with features that simplify shopping, boost trust, and save time.
            </p>
          </div>

          {/* Mobile Horizontal Scroll */}
          <div className="md:hidden relative overflow-hidden">
            <div className="pb-4 -mx-4 px-4 overflow-x-auto no-scrollbar touch-pan-x">
              <div className="inline-flex space-x-4 w-max">
                {featuresData.map((feature, index) => (
                  <div
                    key={index}
                    className="inline-block w-[80vw] flex-shrink-0 group bg-gradient-to-br from-gray-900/50 to-gray-900/0 p-5 rounded-xl border border-gray-700/50 hover:border-blue-400/30 transition-all duration-300"
                  >
                    <div className="w-8 h-8 flex items-center justify-center bg-blue-400/10 rounded-lg mb-3 group-hover:bg-blue-400/20 transition-colors">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Scroll hint indicator */}
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-black via-gray-black/70 to-transparent pointer-events-none flex items-center justify-end">
              <svg className="w-5 h-5 text-gray-400 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* Tablet */}
          <div className="hidden md:grid md:grid-cols-2 lg:hidden gap-6">
            {featuresData.map((feature, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-900/50 to-gray-900/0 p-6 rounded-xl border border-gray-700/50 hover:border-blue-400/30 transition-all duration-300"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-blue-400/10 rounded-lg mb-4 group-hover:bg-blue-400/20 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Desktop  */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-6">
            {featuresData.map((feature, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-900/50 to-gray-900/0 p-6 rounded-xl border border-gray-700/50 hover:border-blue-400/30 transition-all duration-300"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-blue-400/10 rounded-lg mb-4 group-hover:bg-blue-400/20 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <div className=' max-w-3xl mx-auto text-center  ' >
          <p className="text-gray-400 leading-relaxed">
            Step254 is evolving to bring Kenya's mitumba experience into the digital age.
            Our development journey balances rapid iteration with sustainable growth,
            ensuring we solve real problems while building for scale.
          </p>
        </div>

        {/* DEVELOPMENT ROADMAP */}
        <section className="max-w-6xl space-y-6 px-4 mx-auto my-24 lg:my-32">
          <h2 className="text-4xl font-bold text-gradient my-10 font-heading ">Building the Future of Thrifting</h2>
          <div className="">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 flex items-center justify-center bg-cyan-400/10 rounded-full">
                <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-linear">Our Development Path</h3>
            </div>
            <div className="space-y-6">
              {[
                {
                  phase: "Phase 1: Foundation",
                  timeline: "Months 1-3",
                  description: "Launching our MVP with core features: curated listings, M-Pesa integration, and Nairobi delivery. Partnering with 20 verified mitumba suppliers to ensure quality inventory.",
                  milestones: [
                    "Core app development",
                    "Supplier onboarding",
                    "Initial user testing"
                  ]
                },
                {
                  phase: "Phase 2: Growth",
                  timeline: "Months 4-9",
                  description: "Expanding our Nairobi operations with influencer partnerships and localized marketing. Introducing wishlists and improved search filters based on user feedback.",
                  milestones: [
                    "Nairobi-wide launch",
                    "First 5,000 users",
                    "Community building"
                  ]
                },
                {
                  phase: "Phase 3: Expansion",
                  timeline: "Months 10-18",
                  description: "Bringing Step254 to Mombasa, Kisumu, and Nakuru. Developing our logistics network to ensure reliable nationwide delivery.",
                  milestones: [
                    "3 new cities",
                    "Nationwide delivery",
                    "Localized experiences"
                  ]
                },
                {
                  phase: "Phase 4: Evolution",
                  timeline: "Months 19-24",
                  description: "Expanding beyond shoes to include complementary categories like jackets and accessories, while maintaining our focus on quality and affordability.",
                  milestones: [
                    "New product categories",
                    "Enhanced seller tools",
                    "Sustainable scaling"
                  ]
                }
              ].map((phase, index) => (
                <div key={index} className="group pl-6 border-l-2 border-gray-700 hover:border-cyan-400 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                    <h4 className="text-xl font-semibold text-white">{phase.phase}</h4>
                    <span className="text-sm text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded-full w-fit">
                      {phase.timeline}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-3">{phase.description}</p>
                  <ul className="space-y-2">
                    {phase.milestones.map((milestone, i) => (
                      <li key={i} className="flex items-start text-gray-300">
                        <span className="text-cyan-400 mr-2 mt-1">•</span>
                        <span>{milestone}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

{/* METRICS */}
<section className="max-w-6xl px-4 mx-auto my-20 lg:my-28">
  <div className="text-left lg:text-center mb-12">
    <h2 className="text-4xl font-bold text-gradient font-heading mb-3">
      Measuring What Matters
    </h2>
    <p className="text-gray-400 text-lg max-w-3xl mx-0 lg:mx-auto">
      Key indicators that show we're delivering real value to Kenya's thrifters
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {[
      {
        name: "Monthly Active Users",
        value: "10K+",
        description: "Building a thriving community of repeat buyers",
        icon: "👥",
        color: "blue"
      },
      {
        name: "Retention Rate",
        value: "30%+",
        description: "Customers who keep coming back monthly",
        icon: "🔄",
        color: "cyan"
      },
      {
        name: "Order Frequency",
        value: "2.5/month",
        description: "Average purchases per active user",
        icon: "📦",
        color: "purple"
      },
      {
        name: "Net Promoter Score",
        value: "50+",
        description: "Users likely to recommend us",
        icon: "❤️",
        color: "pink"
      }
    ].map((metric, index) => (
      <div
        key={index}
        className={`group bg-gradient-to-br from-gray-900/50 to-gray-900/0 p-6 rounded-xl border border-gray-700/50 hover:border-${metric.color}-400/30 transition-all duration-300 hover:shadow-lg`}
      >
        <div className="flex flex-col items-center text-center">
          <span className="text-2xl mb-3 p-2 bg-gray-800/50 rounded-lg group-hover:bg-${metric.color}-400/10 transition-colors">
            {metric.icon}
          </span>
          <h3 className="text-3xl font-bold text-${metric.color}-400 mb-2">
            {metric.value}
          </h3>
          <p className="text-gray-300 font-medium mb-1">{metric.name}</p>
          <p className="text-gray-400 text-sm">{metric.description}</p>
        </div>
      </div>
    ))}
  </div>
</section>

{/* CLOSING SECTION */}
<section className="max-w-4xl px-4 mx-auto my-24 lg:my-32">
  <div className="text-center">
    <motion.h2 
      className="text-4xl font-bold text-gradient font-heading mb-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      The Future of Thrifting
    </motion.h2>
    
    <motion.div
      className="space-y-6 max-w-2xl mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      viewport={{ once: true }}
    >
      <p className="text-gray-400 text-lg leading-relaxed">
        Step 254 represents a fundamental shift in Kenya's second-hand economy. 
        We're building more than an app, we're creating a new standard for accessible, 
        trustworthy fashion that celebrates both sustainability and personal style.
      </p>
      
      <div className="border-t border-gray-800/50 pt-6">
        <p className="text-gray-400 mb-4">
          Interested in our journey or have ideas to share?
        </p>
        <a
          href="mailto:hakheem67@gmail.com"
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-500 transition-colors group"
        >
          <span>Get in touch</span>
          <svg 
            className="w-4 h-4 transition-transform group-hover:translate-x-1"
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </motion.div>
  </div>
</section>


      
      </div>

    </main>
  );
};

export default Step254CaseStudy;