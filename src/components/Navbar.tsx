"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./button";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="fixed top-4 left-0 right-0 z-50">
      <nav className="mx-auto max-w-6xl px-6 py-3 bg-[#10141c]/80 backdrop-blur-lg border border-gray-700/50 rounded-xl shadow-lg">
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

          <div className="flex items-center gap-6">
            <Link
              href="/"
              className={`px-3 py-2 rounded-md transition-all ${
                pathname === "/"
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 font-medium"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              Home
            </Link>
            <Link
              href="/services"
              className={`px-3 py-2 rounded-md transition-all ${
                pathname === "/services"
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 font-medium"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              Services
            </Link>
            <Link
              href="/projects"
              className={`px-3 py-2 rounded-md transition-all ${
                pathname === "/projects"
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 font-medium"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              Projects
            </Link>
            <Link
              href="/about"
              className={`px-3 py-2 rounded-md transition-all ${
                pathname === "/about"
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 font-medium"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              About us
            </Link>
          </div>

          <Link href="/contact">
            <Button variant="secondary">Schedule Meeting</Button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
