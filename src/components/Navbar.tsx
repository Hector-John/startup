"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./button";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest(".mobile-menu-container")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div className="fixed top-4 left-0 right-0 z-50 mx-auto animate-fade-in">
      <nav className="mx-auto max-w-6xl px-6 py-2 bg-[#111111]/90 border border-gray-700/50 rounded-xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="logo">
            <Link href="/" aria-label="Home">
              <Image
                src="/favicon.png"
                alt="Company Logo"
                width={50}
                height={50}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/"
              className={`px-3 py-2 rounded-md transition-all ${pathname === "/"
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 font-medium"
                  : "text-gray-500 hover:text-gray-300"
                }`}
            >
              Home
            </Link>
            <Link
              href="/services"
              className={`px-3 py-2 rounded-md transition-all ${pathname === "/services"
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 font-medium"
                  : "text-gray-500 hover:text-gray-300"
                }`}
            >
              Services
            </Link>
            <Link
              href="/projects"
              className={`px-3 py-2 rounded-md transition-all ${pathname === "/projects"
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 font-medium"
                  : "text-gray-500 hover:text-gray-300"
                }`}
            >
              Projects
            </Link>
            <Link
              href="/about"
              className={`px-3 py-2 rounded-md transition-all ${pathname === "/about"
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 font-medium"
                  : "text-gray-500 hover:text-gray-300"
                }`}
            >
              About us
            </Link>
          </div>

          {/* Desktop Button */}
          <a
            href="https://calendly.com/hakheem67/30min?utm_source=navbar&utm_medium=button&utm_campaign=quote_meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block"
          >
            <Button variant="secondary">Schedule Meeting</Button>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-400 hover:text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="mobile-menu-container md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              <Link
                href="/"
                className={`px-3 py-2 rounded-md transition-all ${pathname === "/"
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 font-medium"
                    : "text-gray-500 hover:text-gray-300"
                  }`}
              >
                Home
              </Link>
              <Link
                href="/services"
                className={`px-3 py-2 rounded-md transition-all ${pathname === "/services"
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 font-medium"
                    : "text-gray-500 hover:text-gray-300"
                  }`}
              >
                Services
              </Link>
              <Link
                href="/projects"
                className={`px-3 py-2 rounded-md transition-all ${pathname === "/projects"
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 font-medium"
                    : "text-gray-500 hover:text-gray-300"
                  }`}
              >
                Projects
              </Link>
              <Link
                href="/about"
                className={`px-3 py-2 rounded-md transition-all ${pathname === "/about"
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 font-medium"
                    : "text-gray-500 hover:text-gray-300"
                  }`}
              >
                About us
              </Link>
              <a
                href="https://calendly.com/hakheem67/30min?utm_source=navbar&utm_medium=button&utm_campaign=quote_meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button variant="secondary" className="w-full">
                  Schedule Meeting
                </Button>
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;