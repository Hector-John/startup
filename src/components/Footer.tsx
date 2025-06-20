'use client';

import Link from 'next/link';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { companyName } from "../lib/config";


const Footer = () => {
  return (
    <footer className="bg-[#1b1b1b] text-gray-500 py-16 px-6">
      <div className="padded mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Column */}
        <div>
          <h2 className="text-white text-2xl font-bold mb-4">{companyName} </h2>
          <p className="text-sm leading-relaxed">
            Digital products crafted for speed, scale, and seamless user experience. We build interfaces that move people and systems that power ideas.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="hover:text-gray-300 transition">Web Design & Dev</Link></li>
            <li><Link href="#" className="hover:text-gray-300 transition">Product & App Design</Link></li>
            <li><Link href="#" className="hover:text-gray-300 transition">Creative Collaboration</Link></li>
            <li><Link href="#" className="hover:text-gray-300 transition">Quick Fixes</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-gray-300 transition">About Us</Link></li>
            <li><Link href="/projects" className="hover:text-gray-300 transition">Our Work</Link></li>
            <li><Link href="/about" className="hover:text-gray-300 transition">Team </Link></li>
            <li><Link href="/terms" className="hover:text-gray-300 transition">Terms of service</Link></li>
            <li><Link href="/policies" className="hover:text-gray-300 transition">Privacy policy</Link></li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="text-white font-semibold mb-4">Connect</h3>
          <p className="text-sm mb-4">Let’s build something exceptional together.</p>
          <div className="flex space-x-4 text-xl">
            <Link href="#" className="hover:text-gray-300 transition"><FaTwitter /></Link>
            <Link href="#" className="hover:text-gray-300 transition"><FaLinkedin /></Link>
            <Link href="#" className="hover:text-gray-300 transition"><FaGithub /></Link>
          </div>
        </div>
      </div>

    
       <div className="mt-12 text-center text-sm  text-gray-600">
     © {new Date().getFullYear()} {companyName}. All rights reserved.
    </div> 
    </footer>
  );
};

export default Footer;
