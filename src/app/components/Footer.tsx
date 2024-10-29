"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub size={24} />, href: "https://github.com/natthawat141", label: "GitHub" },
    { icon: <FaLinkedin size={24} />, href: "http://linkedin.com/in/natthawat-sawatdee-b47625215", label: "LinkedIn" },
    { icon: <FaEnvelope size={24} />, href: "mailto:bill.natthawat@gmail.com", label: "Email" }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#0a0a1f] to-gray-900 text-white overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h3>
            <p className="text-gray-300">
              Natthawat Sawatdee | Developer & chief technology officer
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((link, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-2 bg-gray-800/50 rounded-lg border border-gray-700/50 
                             hover:border-blue-500/50 hover:text-blue-400 
                             transition-all duration-300
                             hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {['Home', 'Projects', 'Contact'].map((item, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <Link
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Contact
            </h3>
            <address className="not-italic space-y-3 text-gray-300">
              <p className="flex items-center space-x-2">
                <span>Bangkok, Thailand</span>
              </p>
              <p className="flex items-center space-x-2 hover:text-blue-400 transition-colors cursor-pointer">
                <span>Email: bill.natthawat@gmail.com</span>
              </p>
              <p className="flex items-center space-x-2">
                <span>Phone: 0616710038</span>
              </p>
            </address>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Natthawat Sawatdee. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {['Privacy Policy', 'Terms of Service'].map((item, index) => (
                <Link
                  key={index}
                  href={`/${item.toLowerCase().replace(' ', '-')}`}
                  className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;