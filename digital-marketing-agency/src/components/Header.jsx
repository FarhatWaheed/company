import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { 
      name: 'Services', 
      href: '#services',
      dropdown: [
        { name: 'Digital Strategy', href: '#services' },
        { name: 'Web Development', href: '#services' },
        { name: 'Social Media', href: '#services' },
        { name: 'SEO & Analytics', href: '#services' }
      ]
    },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">D</span>
            </div>
            <span className="text-2xl font-bold text-gradient">DigitalPro</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() => scrollToSection(item.href)}
                  onMouseEnter={() => setActiveDropdown(item.dropdown ? item.name : null)}
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 transition-colors duration-300 font-medium"
                >
                  <span>{item.name}</span>
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </motion.button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === item.name && item.dropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2"
                    >
                      {item.dropdown.map((dropdownItem, idx) => (
                        <button
                          key={idx}
                          onClick={() => scrollToSection(dropdownItem.href)}
                          className="w-full text-left px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                        >
                          {dropdownItem.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#contact')}
              className="btn-primary"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-primary-600 transition-colors duration-300"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-gray-100"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item, index) => (
                  <div key={index}>
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className="w-full text-left px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200 font-medium"
                    >
                      {item.name}
                    </button>
                    {item.dropdown && (
                      <div className="ml-4 space-y-1">
                        {item.dropdown.map((dropdownItem, idx) => (
                          <button
                            key={idx}
                            onClick={() => scrollToSection(dropdownItem.href)}
                            className="w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                          >
                            {dropdownItem.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="px-4 pt-4">
                  <button
                    onClick={() => scrollToSection('#contact')}
                    className="w-full btn-primary"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;