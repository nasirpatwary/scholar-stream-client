import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";


import { AiOutlineMail } from "react-icons/ai";
import { PiCity } from "react-icons/pi";
import { FiPhoneCall } from "react-icons/fi";
import Container from "../shared/Container";
import { Link } from "react-router";
const Footer = () => {
  return (
    <footer className="bg-[#121212] dark:bg-gray-900">
      <Container className="py-8">
        <div className="grid md:grid-cols-7 lg:grid-cols-9 gap-6 md:space-y-0">
          {/* Logo + About */}
          <aside className="lg:col-span-3 md:col-span-3 space-y-4">
            <Link
              to="/"
              className="text-2xl text-white flex items-center gap-2"
            >
              <span className="font-bold text-primary">ScholarStream</span>
            </Link>

            <p className="text-gray-400 max-w-[44ch] mt-4">
              © {new Date().getFullYear()} ScholarStream — A trusted platform
              helping students discover global scholarships, grants, and
              financial aid opportunities. Our mission is to make education
              accessible for everyone.
            </p>

            <div className="text-gray-400 space-y-3">
              <p className="flex items-center gap-2">
                <FiPhoneCall /> +880 1954-81254
              </p>
              <p className="flex items-center gap-2">
                <AiOutlineMail /> support@scholarstream.com
              </p>
              <p className="flex items-center gap-2">
                <PiCity /> Dhaka, Bangladesh
              </p>
            </div>
          </aside>

          {/* Quick Links */}
          <nav className="space-y-3 lg:col-span-2 col-span-2">
            <h6 className="text-white/80 font-bold text-2xl">Quick Links</h6>
            <ul className="text-gray-400 flex flex-col space-y-3">
              <a className="link link-hover duration-700 delay-300 hover:text-primary">
                Home
              </a>
              <a className="link link-hover duration-700 delay-300 hover:text-primary">
                Scholarships
              </a>
              <a className="link link-hover duration-700 delay-300 hover:text-primary">
                Study Abroad
              </a>
              <a className="link link-hover duration-700 delay-300 hover:text-primary">
                Guides & Articles
              </a>
              <a className="link link-hover duration-700 delay-300 hover:text-primary">
                FAQs
              </a>
            </ul>
          </nav>

          {/* Services */}
          <nav className="space-y-3 lg:col-span-2 col-span-2">
            <h6 className="text-white/80 font-bold text-2xl">Our Services</h6>
            <ul className="text-gray-400 flex flex-col space-y-3">
              <a className="link link-hover duration-700 delay-300 hover:text-primary">
                Scholarship Finder
              </a>
              <a className="link link-hover duration-700 delay-300 hover:text-primary">
                Application Guidance
              </a>
              <a className="link link-hover duration-700 delay-300 hover:text-primary">
                Document Review
              </a>
              <a className="link link-hover duration-700 delay-300 hover:text-primary">
                University Counseling
              </a>
              <a className="link link-hover duration-700 delay-300 hover:text-primary">
                Premium Support
              </a>
            </ul>
          </nav>

          {/* Social + Disclaimer */}
          <nav className="space-y-3 lg:col-span-2 md:col-span-3">
            <h6 className="text-white/80 font-bold text-2xl">Follow Us</h6>
            <p className="text-gray-400">
              Stay updated with global scholarships, study opportunities, and
              student support resources. Join our online community for daily
              updates.
            </p>

            <div className="flex gap-2 mt-6">
              <p className="flex hover:bg-primary hover:border-primary delay-300 duration-700 transition-all cursor-pointer text-gray-400 border-gray-700 border-2 items-center justify-center rounded-full size-8">
                <FaFacebookF />
              </p>
              <p className="flex hover:bg-primary hover:border-primary delay-300 duration-700 transition-all cursor-pointer text-gray-400 border-gray-700 border-2 items-center justify-center rounded-full size-8">
                <FaXTwitter  />
              </p>
              <p className="flex hover:bg-primary hover:border-primary delay-300 duration-700 transition-all cursor-pointer text-gray-400 border-gray-700 border-2 items-center justify-center rounded-full size-8">
                <FaLinkedinIn />
              </p>
              <p className="flex hover:bg-primary hover:border-primary delay-300 duration-700 transition-all cursor-pointer text-gray-400 border-gray-700 border-2 items-center justify-center rounded-full size-8">
                <FaInstagram />
              </p>
            </div>
          </nav>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
