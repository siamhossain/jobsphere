import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#202430] text-gray-300">
      <div className="container-main px-6 py-16">
        {/* Top Footer */}
        <div className="grid md:grid-cols-[2fr_1fr_1fr_2fr] gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/footer-logo.svg"
                alt="JobSpehere Logo"
                width={152}
                height={36}
              />
            </div>

            <p className="text-body text-[#D6DDEB]">
              Great platform for the job seeker that passionate about startups.
              Find your dream job easier.
            </p>
          </div>

          {/* About */}
          <div>
            <h3 className="text-white font-semibold text-[18px] mb-4">About</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-body text-[#D6DDEB]">
                  Companies
                </Link>
              </li>
              <li>
                <Link href="#" className="text-body text-[#D6DDEB]">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-body text-[#D6DDEB]">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#" className="text-body text-[#D6DDEB]">
                  Advice
                </Link>
              </li>
              <li>
                <Link href="#" className="text-body text-[#D6DDEB]">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold text-[18px] mb-4">
              Resources
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-body text-[#D6DDEB]">
                  Help Docs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-body text-[#D6DDEB]">
                  Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="text-body text-[#D6DDEB]">
                  Updates
                </Link>
              </li>
              <li>
                <Link href="#" className="text-body text-[#D6DDEB]">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold text-[18px] mb-4">
              Get job notifications
            </h3>
            <p className="text-body text-[#D6DDEB] mb-4">
              The latest job news, articles, sent to your inbox weekly.
            </p>

            <div className="flex gap-[8px]">
              <input
                type="email"
                placeholder="Email Address"
                className="px-3 py-2 w-full text-base bg-white text-[#A8ADB7] outline-none"
              />
              <button className="bg-primary h-[50px] px-4 py-2 text-sm text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            {new Date().getFullYear()} © JobSphere. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 text-gray-400">
            <Link
              href="#"
              className="text-white bg-white/10 w-[32] h-[32px] flex items-center justify-center rounded-full hover:bg-white hover:text-primary transition-colors duration-300"
            >
              <FaFacebookF />
            </Link>
            <Link
              href="#"
              className="text-white bg-white/10 w-[32] h-[32px] flex items-center justify-center rounded-full hover:bg-white hover:text-primary transition-colors duration-300"
            >
              <FaInstagram />
            </Link>
            <Link
              href="#"
              className="text-white bg-white/10 w-[32] h-[32px] flex items-center justify-center rounded-full hover:bg-white hover:text-primary transition-colors duration-300"
            >
              <FaTwitter />
            </Link>
            <Link
              href="#"
              className="text-white bg-white/10 w-[32] h-[32px] flex items-center justify-center rounded-full hover:bg-white hover:text-primary transition-colors duration-300"
            >
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
