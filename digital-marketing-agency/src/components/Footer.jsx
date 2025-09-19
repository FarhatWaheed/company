import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#about' },
      { name: 'Careers', href: '#' },
      { name: 'Blog', href: '#' }
    ],
    services: [
      { name: 'Digital Strategy', href: '#services' },
      { name: 'Web Development', href: '#services' },
      { name: 'Social Media', href: '#services' },
      { name: 'SEO & Analytics', href: '#services' }
    ],
    resources: [
      { name: 'Case Studies', href: '#portfolio' },
      { name: 'White Papers', href: '#' },
      { name: 'Webinars', href: '#' },
      { name: 'Support', href: '#contact' }
    ]
  };

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">D</span>
                </div>
                <span className="text-2xl font-bold">DigitalPro</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                We help businesses grow through innovative digital marketing strategies 
                and cutting-edge technology solutions.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-300"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <div key={categoryIndex}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="space-y-4"
              >
                <h3 className="text-lg font-semibold capitalize">
                  {category === 'company' ? 'Company' : 
                   category === 'services' ? 'Services' : 'Resources'}
                </h3>
                <ul className="space-y-2">
                  {links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <motion.a
                        whileHover={{ x: 5 }}
                        href={link.href}
                        className="text-gray-300 hover:text-white transition-colors duration-300"
                      >
                        {link.name}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-gray-800"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-white">hello@digitalpro.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="text-white">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Address</p>
                <p className="text-white">123 Digital St, Tech City</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950 py-6">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-gray-400 text-sm"
            >
              © 2024 DigitalPro. All rights reserved.
            </motion.p>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <motion.a
                whileHover={{ color: '#ffffff' }}
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                whileHover={{ color: '#ffffff' }}
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </motion.a>
            </div>

            {/* Scroll to Top Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;