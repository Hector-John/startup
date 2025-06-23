"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const wireframes = [1, 2, 3, 4, 5, 6];
const flows = [1, 2];

const Step254CaseStudy = () => {
  const wireframeSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <main className="bg-black text-white px-6 md:px-20 py-16 space-y-32">
      {/* HERO */}
      <section className="space-y-6 max-w-5xl mx-auto">
        <div className="mb-8">
          <span className="text-sm font-medium text-cyan-400 mb-2 block">
            CASE STUDY
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent leading-tight">
            Step254 – Mitumba Shoe Delivery App
          </h1>
        </div>
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl">
          A curated second-hand shoe shopping experience built for Kenya's urban market. 
          Designed to solve access, trust, and convenience challenges in the mitumba industry.
        </p>
        <div className="pt-4">
          <div className="h-px w-full bg-gradient-to-r from-blue-600/20 via-cyan-500/50 to-transparent"></div>
        </div>
      </section>

      {/* FINAL DESIGN */}
      <section className="space-y-8 max-w-6xl mx-auto">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-white">Final Design</h2>
          <p className="text-gray-300 max-w-3xl leading-relaxed text-lg">
            A sleek, mobile-first experience where users browse curated mitumba shoes from trusted sellers, 
            place orders with M-Pesa, and get doorstep delivery.
          </p>
        </div>
        <div className="rounded-xl overflow-hidden border border-gray-800/50 shadow-lg shadow-cyan-500/10">
          <Image
            src="/placeholder.png"
            alt="Final Design"
            width={1200}
            height={800}
            className="w-full object-cover"
          />
        </div>
      </section>

      {/* PROBLEM + SOLUTION */}
      <section className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-gray-900/50 to-gray-900/0 p-8 rounded-xl border border-gray-800/50">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">The Challenge</h2>
          <p className="text-gray-300 leading-relaxed">
            Kenya's mitumba shoe market is a multi-billion shilling industry. But shopping in it is 
            time-consuming, inconvenient, and unreliable. Crowded markets, limited selection, and 
            uncertain quality prevent customers from finding the shoes they need.
          </p>
        </div>
        <div className="bg-gradient-to-br from-gray-900/50 to-gray-900/0 p-8 rounded-xl border border-gray-800/50">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">The Solution</h2>
          <p className="text-gray-300 leading-relaxed">
            Step254 brings mitumba shoes online. We source from verified sellers, inspect and list 
            high-quality shoes, and deliver them across Kenya. The app offers filtering, mobile payments, 
            transparent listings, and real-time delivery tracking — bridging affordability and reliability.
          </p>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="space-y-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white">Pain Points We Solved</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Market chaos",
              description: "Users no longer need to visit crowded stalls to find shoes."
            },
            {
              title: "Uncertain quality",
              description: "Every listing is verified and described with real photos."
            },
            {
              title: "Lack of trust",
              description: "Step254 acts as the trusted intermediary between buyer and seller."
            },
            {
              title: "Retail pricing barriers",
              description: "Direct sourcing allows affordable prices below retail."
            }
          ].map((point, index) => (
            <div key={index} className="bg-gray-900/30 p-6 rounded-lg border border-gray-800/50">
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">{point.title}</h3>
              <p className="text-gray-300">{point.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* USER PERSONAS */}
      <section className="space-y-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white">User Personas</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: "Ley Walker",
              role: "University Student",
              age: 22,
              need: "Trendy, affordable shoes without the hassle of markets.",
              help: "She shops from her hostel with affordable delivery.",
            },
            {
              name: "Michael Ochieng",
              role: "Accountant",
              age: 30,
              need: "Branded shoes for work at good prices.",
              help: "He orders quality shoes with office delivery and M-Pesa.",
            },
            {
              name: "Sarah Atieno",
              role: "Freelancer",
              age: 25,
              need: "Stylish, affordable shoes with variety.",
              help: "She filters by size, price and brand to find what fits.",
            },
          ].map((p, i) => (
            <div key={i} className="bg-gradient-to-b from-gray-900/50 to-transparent p-6 rounded-xl border border-gray-800/50 hover:border-cyan-400/30 transition-all">
              <h3 className="text-xl font-bold text-cyan-400">{p.name}</h3>
              <p className="text-gray-400 mb-3">{p.role} • {p.age} years</p>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-400 font-medium">Needs</p>
                  <p className="text-gray-300">{p.need}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium">How App Helps</p>
                  <p className="text-gray-300">{p.help}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WIREFRAMES */}
      <section className="space-y-8 max-w-6xl mx-auto">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-white">Wireframes</h2>
          <p className="text-gray-300 leading-relaxed max-w-3xl">
            Initial lo-fi wireframes helped structure the app's core: category browsing, 
            product pages, M-Pesa checkout, and delivery confirmation.
          </p>
        </div>
        <div className="px-4 py-6 bg-gray-900/20 rounded-xl border border-gray-800/50">
          <Slider {...wireframeSettings}>
            {wireframes.map((n) => (
              <div key={n} className="px-2">
                <div className="rounded-lg overflow-hidden border border-gray-700/50">
                  <Image
                    src="/placeholder.png"
                    alt={`Wireframe ${n}`}
                    width={320}
                    height={620}
                    className="w-full object-contain"
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
    </main>
  );
};

export default Step254CaseStudy;