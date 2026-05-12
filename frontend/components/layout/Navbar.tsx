"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useContext } from "react";
import { logoutUser } from "@/lib/auth";
import { AuthContext } from "@/context/AuthContext";

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

  const { user, clearUser } = useContext(AuthContext);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white"
      }`}
    >
      <div className="container-main h-[78px] flex items-center justify-between px-4 sm:px-6 lg:px-0">
        <div className="flex items-center">
          <Link href="/" className="font-bold text-xl pr-4 sm:pr-10">
            <div className="nav-logo flex items-center gap-2">
              <div className="inner w-8 h-8 rounded-lg flex items-center justify-center bg-[linear-gradient(to_right,rgb(79,70,229),rgb(147,51,234))]">
                <span className="text-white font-bold">JS</span>
              </div>
              <span className="font-bold text-gray-900">JobSphere</span>
            </div>
          </Link>

          <div className="space-x-4 hidden md:flex">
            <Link href="/jobs" className="nav-link">
              Find Jobs
            </Link>

            {user && user.role === "admin" && (
              <Link href="/admin" className="nav-link">
                Dashboard
              </Link>
            )}
          </div>
        </div>

        <div className="flex hidden md:flex items-center">
          {!user && (
            <Link
              href="/login"
              className="font-epilogue font-bold text-[14px] sm:text-[16px] leading[160%] text-primary px-3 sm:px-4 py-2 rounded-none w-[80px] sm:w-[92px] h-[44px] sm:h-[50px] flex items-center justify-center"
            >
              Login
            </Link>
          )}

          {user && (
            <button
              className="text-white px-6 py-2 rounded-lg transition-colors shadow-lg hover:shadow-xl bg-gradient-to-r from-indigo-600 to-purple-600 cursor-pointer font-medium"
              onClick={() => {
                logoutUser();
                clearUser();
              }}
            >
              Logout
            </button>
          )}

          {!user && (
            <Link
              href="/register"
              className="text-white px-6 py-2 rounded-lg transition-colors shadow-lg hover:shadow-xl bg-gradient-to-r from-indigo-600 to-purple-600 cursor-pointer font-medium"
            >
              Sign Up
            </Link>
          )}

          {user && (
            <span className="ml-4 text-gray-600">
              Hello, <span className="text-primary">{user.name}</span>
            </span>
          )}
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
