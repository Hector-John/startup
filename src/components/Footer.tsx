'use client';

import Link from 'next/link';
import { FaLinkedin, FaTwitter, FaGithub, FaArrowRight } from 'react-icons/fa';
import { companyName } from "../lib/config";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-8">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <h2 className="text-white text-2xl font-bold mb-4 flex items-center">
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                {companyName}
              </span>
            </h2>
            <p className="text-sm leading-relaxed mb-6">
              Building the digital future with cutting-edge technology and exceptional user experiences.
            </p>
            
            {/* Newsletter */}
            <div className="mb-6">
              <h4 className="text-white text-sm font-medium mb-3">Stay updated</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-gray-900 text-sm px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 w-full"
                />
                <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-2 rounded-r-lg text-sm font-medium hover:opacity-90 transition-opacity">
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Solutions</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="hover:text-white transition flex items-center group">
                  <span className="w-1 h-1 bg-gray-500 rounded-full mr-2 group-hover:bg-cyan-400 transition"></span>
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition flex items-center group">
                  <span className="w-1 h-1 bg-gray-500 rounded-full mr-2 group-hover:bg-cyan-400 transition"></span>
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition flex items-center group">
                  <span className="w-1 h-1 bg-gray-500 rounded-full mr-2 group-hover:bg-cyan-400 transition"></span>
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition flex items-center group">
                  <span className="w-1 h-1 bg-gray-500 rounded-full mr-2 group-hover:bg-cyan-400 transition"></span>
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition flex items-center group">
                  <span className="w-1 h-1 bg-gray-500 rounded-full mr-2 group-hover:bg-cyan-400 transition"></span>
                  AI Integration
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition flex items-center group">
                  <span className="w-1 h-1 bg-gray-500 rounded-full mr-2 group-hover:bg-cyan-400 transition"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition flex items-center group">
                  <span className="w-1 h-1 bg-gray-500 rounded-full mr-2 group-hover:bg-cyan-400 transition"></span>
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition flex items-center group">
                  <span className="w-1 h-1 bg-gray-500 rounded-full mr-2 group-hover:bg-cyan-400 transition"></span>
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition flex items-center group">
                  <span className="w-1 h-1 bg-gray-500 rounded-full mr-2 group-hover:bg-cyan-400 transition"></span>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition flex items-center group">
                  <span className="w-1 h-1 bg-gray-500 rounded-full mr-2 group-hover:bg-cyan-400 transition"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Connect</h3>
            <p className="text-sm mb-6">Let's build the future together.</p>
            
            <div className="flex space-x-4 mb-6">
              <Link href="#" className="hover:text-white transition p-2 rounded-full bg-gray-900 hover:bg-gray-800">
                <FaTwitter className="text-lg" />
              </Link>
              <Link href="#" className="hover:text-white transition p-2 rounded-full bg-gray-900 hover:bg-gray-800">
                <FaLinkedin className="text-lg" />
              </Link>
              <Link href="#" className="hover:text-white transition p-2 rounded-full bg-gray-900 hover:bg-gray-800">
                <FaGithub className="text-lg" />
              </Link>
            </div>
            
            <div className="text-sm">
              <p className="mb-1">hello@{companyName.toLowerCase()}.com</p>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-12"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} {companyName}. All rights reserved.
          </div>
          
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-white transition">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;