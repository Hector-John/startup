'use client'

import Link from 'next/link'
import { Mail, Phone, Send, Linkedin, Instagram, Facebook } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-white text-xl font-bold">Kheem Tech</h3>
            <p className="text-sm leading-relaxed">
              We deliver cutting-edge digital solutions that drive growth and transform businesses through innovative technology.
            </p>
            {/* <p className="text-xs text-gray-400 mt-4">
              Registered in Kenya. VAT No. P051XXXXXX. Certified technology provider.
            </p> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-medium mb-4">Explore</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm hover:text-cyan-400 transition-colors duration-200">
                  About Company
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm hover:text-cyan-400 transition-colors duration-200">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-sm hover:text-cyan-400 transition-colors duration-200">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm hover:text-cyan-400 transition-colors duration-200">
                  Tech Insights
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-lg font-medium mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@kheemtech.com"
                  className="text-sm hover:text-cyan-400 transition-colors duration-200 flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Email Our Team
                </a>
              </li>
              <li>
                <a
                  href="tel:+254769403162"
                  className="text-sm hover:text-cyan-400 transition-colors duration-200 flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Call Our Office
                </a>
              </li>
              <li className="text-sm text-gray-400 mt-4">
                Nairobi, Kenya<br />
                Working Hours: Mon-Fri, 9AM-5PM
              </li>
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h4 className="text-white text-lg font-medium mb-4">Stay Updated</h4>

            {/* Newsletter */}
            <div className="flex h-12 mb-6">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-gray-800 text-sm px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 w-full h-full placeholder-gray-400"
              />
              <button
                className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-2 rounded-r-lg text-sm font-medium hover:opacity-90 transition-opacity h-full flex items-center justify-center w-12"
                aria-label="Subscribe"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>

            {/* Social Links */}
            <div>
              <h5 className="text-sm font-medium mb-3">Connect With Us</h5>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/company/kheemtech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com/kheemtech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-500 transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com/kheemtech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-6 pb-4">
          <div className="text-center text-xs text-gray-400">
            <p>
              © {new Date().getFullYear()} Kheem Tech Solutions. All rights reserved. |
              <Link href="/privacy" className="hover:text-cyan-400 ml-1">Privacy Policy</Link> |
              <Link href="/terms" className="hover:text-cyan-400 ml-1">Terms of Service</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
