"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
    FaLinkedin,
    FaGithub,
    FaDribbble,
    FaTwitter,
    FaGlobe,
} from "react-icons/fa";

const Team = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        pauseOnHover: true,
        arrows: false,
        appendDots: (dots: React.ReactNode) => (
            <div className="mt-24"> {/* Increased space between cards and dots */}
                <ul className="flex justify-center gap-2">{dots}</ul> {/* Decreased gap between dots */}
            </div>
        ),
        customPaging: () => (
            <div className="w-3 h-3 bg-slate-500 rounded-full hover:bg-blue-400 transition-all duration-300"></div>
        ),
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } },
        ],
    };

    const teamMembers = [
        {
            name: "Hakheem Odhiambo",
            role: "Frontend Developer & UI/UX Designer",
            description: "Specializes in creating responsive, accessible user interfaces and crafting intuitive user experiences with modern frameworks.",
            image: "/placeholder.png",
            linkedin: "https://linkedin.com/in/hakheem",
            github: "https://github.com/hakheem",
            portfolio: "https://kheem.tech",
        },
        {
            name: "Joy Njeri",
            role: "UI/UX Designer",
            description: "Transforms complex problems into beautiful, user-friendly designs with a focus on accessibility and human-centered design principles.",
            image: "/placeholder.png",
            linkedin: "https://linkedin.com/in/joynjeri",
            dribbble: "https://dribbble.com/joynjeri",
            twitter: "https://twitter.com/joydesigns",
        },
        {
            name: "Brian Otieno",
            role: "Full Stack Developer",
            description: "Builds robust, scalable applications with expertise across the entire stack, from database architecture to frontend implementation.",
            image: "/placeholder.png",
            linkedin: "https://linkedin.com/in/brianotieno",
            github: "https://github.com/brianotieno",
            portfolio: "https://brian.codes",
        },
        {
            name: "Diana Wambui",
            role: "Project Manager",
            description: "Orchestrates project timelines, resources, and team coordination to ensure timely delivery of high-quality products.",
            image: "/placeholder.png",
            linkedin: "https://linkedin.com/in/dianawambui",
            twitter: "https://twitter.com/dianawpm",
            globe: "https://dianawambui.com",
        },
        {
            name: "Mark Kimani",
            role: "Backend Engineer",
            description: "Designs and implements high-performance server architectures, APIs, and database systems with security and scalability in mind.",
            image: "/placeholder.png",
            linkedin: "https://linkedin.com/in/markkimani",
            github: "https://github.com/markkimani",
            portfolio: "https://markengineer.dev",
        },
    ];

    return (
        <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-gradient  mb-4">
                        Meet Our Team
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        A multidisciplinary team committed to building clean, scalable, and smart solutions.
                    </p>
                </div>

                <div className="relative">
                    <Slider {...settings}>
                        {teamMembers.map((member, index) => (
                            <div key={index} className="px-4 focus:outline-none">
                                <div className="card transition-all mb-10  hover:border-blue-400/30 group">
                                    <div className="flex justify-center mb-6">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-40 h-40 object-cover rounded-full border-3 border-blue-500/20 group-hover:scale-105 transition-all"
                                        />
                                    </div>
                                    <div className="text-center">
                                        <h3 className="text-xl font-bold text-gradient font-heding">{member.name}</h3>
                                        <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mt-2 mb-2">{member.role}</p>
                                        <p className="text-gray-400 text-sm mb-6 min-h-[100px]mb-4 ">{member.description}</p>
                                        <div className="flex justify-center space-x-4">
                                            {member.linkedin && (
                                                <a
                                                    href={member.linkedin}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-slate-400 hover:text-[#0077b5] rounded-full p-2 transition-colors"
                                                    aria-label={`${member.name}'s LinkedIn`}
                                                >
                                                    <FaLinkedin size={20} />
                                                </a>
                                            )}
                                            {member.github && (
                                                <a
                                                    href={member.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-slate-400 hover:text-white rounded-full p-2 transition-colors"
                                                    aria-label={`${member.name}'s GitHub`}
                                                >
                                                    <FaGithub size={20} />
                                                </a>
                                            )}
                                            {member.dribbble && (
                                                <a
                                                    href={member.dribbble}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-slate-400 hover:text-[#ea4c89] rounded-full p-2 transition-colors"
                                                    aria-label={`${member.name}'s Dribbble`}
                                                >
                                                    <FaDribbble size={20} />
                                                </a>
                                            )}
                                            {member.twitter && (
                                                <a
                                                    href={member.twitter}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-slate-400 hover:text-[#1da1f2] rounded-full p-2 transition-colors"
                                                    aria-label={`${member.name}'s Twitter`}
                                                >
                                                    <FaTwitter size={20} />
                                                </a>
                                            )}
                                            {(member.portfolio || member.globe) && (
                                                <a
                                                    href={member.portfolio || member.globe}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-slate-400 hover:text-blue-400 rounded-full p-2 transition-colors"
                                                    aria-label={`${member.name}'s Website`}
                                                >
                                                    <FaGlobe size={20} />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

            </div>
        </section>
    );
};

export default Team;