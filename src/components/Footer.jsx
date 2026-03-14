import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Github,
  Youtube,
  ArrowRight,
  Code,
  GraduationCap,
  MessageCircle,
  BookOpen
} from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/courses' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const resources = [
    { name: 'Software Development Path', href: '/courses/software-development', icon: Code },
    { name: 'Data Analytics Path', href: '/courses/data-analytics', icon: GraduationCap },
    { name: 'WhatsApp Support', href: '#', icon: MessageCircle },
    { name: 'Learning Resources', href: '#', icon: BookOpen },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  const contactInfo = [
    { icon: Mail, text: 'support@digitaldooracademy.org', href: 'mailto:support@digitaldooracademy.org' },
    { icon: Phone, text: '+27 (0) 798054459', href: 'tel:+27 (0) 798054459' },
    { icon: MapPin, text: 'Johannesburg, South Africa', href: '#' },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Newsletter Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12 pb-8 border-b border-gray-700">
          <div>
            <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
            <p className="text-gray-400">
              Subscribe to our newsletter for new courses, resources, and opportunities.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none text-white placeholder-gray-500"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 whitespace-nowrap">
              Subscribe
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          {/* Logo and Mission */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Digital Door Academy" className="w-12 h-12" />
              <span className="text-xl font-bold">Digital Door Academy</span>
            </div>
            <p className="text-gray-400 mb-4">
              Opening the door to digital opportunity for underprivileged youth through free, structured learning paths in software development and data analytics.
            </p>
            <div className="flex items-center text-gray-400">
              <span>Made with</span>
              <Heart size={16} className="mx-1 text-red-500 fill-current" />
              <span>for digital inclusion</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learning Paths */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-semibold mb-4">Learning Paths</h4>
            <ul className="space-y-3">
              {resources.map((resource) => {
                const Icon = resource.icon;
                return (
                  <li key={resource.name}>
                    <Link
                      to={resource.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-3 group"
                    >
                      <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                        <Icon size={16} />
                      </div>
                      <span>{resource.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-3"
                    >
                      <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon size={16} />
                      </div>
                      <span className="text-sm break-all">{item.text}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Social Links and Copyright */}
        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>

            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center">
              <p>© {currentYear} Digital Door Academy. All rights reserved.</p>
              <p className="mt-1">
                A non-profit initiative dedicated to digital inclusion and education for all.
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-4 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span className="text-gray-600">|</span>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>

        {/* WhatsApp Support Badge */}
        <div className="fixed bottom-6 right-6 z-50">
          <a
            href="#"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <MessageCircle size={20} />
            <span className="font-medium">24/7 WhatsApp Support</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;