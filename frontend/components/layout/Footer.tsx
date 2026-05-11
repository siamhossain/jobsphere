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
    <footer className="text-white bg-[linear-gradient(135deg,_rgb(79,70,229)_0%,_rgb(147,51,234)_50%,_rgb(219,39,119)_100%)]">
      <div className="container-main px-6 py-16">
        {/* Top Footer */}
        <div className="grid md:grid-cols-[2fr_1fr_1fr_2fr] gap-10">
          <div>
            <div className="footer-logo flex items-center gap-2 mb-4">
              <div className="inner w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-purple-600 font-bold">JS</span>
              </div>
              <span className="text-xl font-bold text-white">JobSphere</span>
            </div>

            <p className="text-body text-white">
              Great platform for the job seeker that passionate about startups.
              Find your dream job easier.
            </p>
          </div>

          {/* About */}
          <div>
            <h3 className="text-white font-semibold text-[18px] mb-4">About</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-body text-white">
                  Companies
                </Link>
              </li>
              <li>
                <Link href="#" className="text-body text-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-body text-white">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#" className="text-body text-white">
                  Advice
                </Link>
              </li>
              <li>
                <Link href="#" className="text-body text-white">
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
                <Link href="#" className="text-body text-white">
                  Help Docs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-body text-white">
                  Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="text-body text-white">
                  Updates
                </Link>
              </li>
              <li>
                <Link href="#" className="text-body text-white">
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
            <p className="text-body text-white mb-4">
              The latest job news, articles, sent to your inbox weekly.
            </p>

            <div className="flex gap-[8px]">
              <input
                type="email"
                placeholder="Email Address"
                className="px-3 py-2 w-full text-base bg-white text-[#A8ADB7] outline-none rounded-lg"
              />
              <button className="bg-white text-purple-600 px-6 py-2 text-sm rounded-lg hover:shadow-lg transition-all whitespace-nowrap">
                <span className="pur">Subscribe</span>
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/50 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white">
            {new Date().getFullYear()} © JobSphere. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 text-white">
            <Link
              href="#"
              className="text-white bg-white/20 w-[32] h-[32px] flex items-center justify-center rounded-full hover:bg-white hover:text-primary transition-colors duration-300"
            >
              <FaFacebookF />
            </Link>
            <Link
              href="#"
              className="text-white bg-white/20 w-[32] h-[32px] flex items-center justify-center rounded-full hover:bg-white hover:text-primary transition-colors duration-300"
            >
              <FaInstagram />
            </Link>
            <Link
              href="#"
              className="text-white bg-white/20 w-[32] h-[32px] flex items-center justify-center rounded-full hover:bg-white hover:text-primary transition-colors duration-300"
            >
              <FaTwitter />
            </Link>
            <Link
              href="#"
              className="text-white bg-white/20 w-[32] h-[32px] flex items-center justify-center rounded-full hover:bg-white hover:text-primary transition-colors duration-300"
            >
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
