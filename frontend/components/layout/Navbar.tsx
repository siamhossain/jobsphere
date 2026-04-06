"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container-main h-[78px] flex items-center justify-between px-4 sm:px-6 lg:px-0">
        <div className="flex items-center">
          <Link href="/" className="font-bold text-xl pr-4 sm:pr-10">
            <Image
              src="/logo.svg"
              alt="JobSphere Logo"
              width={152}
              height={36}
              className="inline mr-2 w-[120px] sm:w-[152px] h-auto"
            />
          </Link>

          <div className="space-x-4 hidden md:flex">
            <Link href="/jobs" className="nav-link">
              Find Jobs
            </Link>
            <Link href="/admin" className="nav-link">
              Admin Panel
            </Link>
          </div>
        </div>

        <div className="flex hidden md:flex items-center">
          <Link
            href="/login"
            className="font-epilogue font-bold text-[14px] sm:text-[16px] leading[160%] text-primary px-3 sm:px-4 py-2 rounded-none w-[80px] sm:w-[92px] h-[44px] sm:h-[50px] flex items-center justify-center"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="font-epilogue font-bold text-[14px] sm:text-[16px] leading[160%] ml-2 sm:ml-4 bg-primary text-white px-3 sm:px-4 py-2 rounded-none w-[90px] sm:w-[108px] h-[44px] sm:h-[50px] flex items-center justify-center"
          >
            Sign Up
          </Link>
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden flex flex-col gap-[3px] bg-white w-[36px] h-[36px] border-[#D6DDEB] items-center justify-center rounded-full"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="w-[17px] h-[2px] bg-[#25324B]"></span>
          <span className="w-[17px] h-[2px] bg-[#25324B]"></span>
          <span className="w-[17px] h-[2px] bg-[#25324B]"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col p-6 space-y-4">
            <Link href="/jobs" onClick={() => setMenuOpen(false)}>
              Find Jobs
            </Link>

            <Link href="/admin" onClick={() => setMenuOpen(false)}>
              Admin Panel
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
